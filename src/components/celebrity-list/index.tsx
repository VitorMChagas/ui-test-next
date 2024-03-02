'use client'
import { formatDistanceStrict } from 'date-fns/formatDistanceStrict'
import Image from 'next/image'
import ThumbsUp from '@components/thumbs-up'
import ThumbsDown from '@components/thumbs-down'
import VoteGauge from '@components/vote-gauge'
import { useCelebrities } from '@hooks/useCelebrities'

interface HandleVoteType {
  id: number
  type: string
}

export default function CelebrityList() {
  const { celebrities } = useCelebrities()

  const handleVote = async (_id, type) => {
    try {
      // Convert the _id to string
      const celebrityId = String(_id)

      const response = await fetch('/api/votes/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ celebrityId, type }), // Use celebrityId instead of _id
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Vote registration success:', data)
      } else {
        console.error('Vote registration error:', response.statusText)
      }
    } catch (error) {
      console.error('Vote registration error:', error)
    }
  }

  return (
    <div className="flex flex-col justify-items-center w-[1100px]">
      {celebrities?.map((celebrity) => (
        <div key={celebrity._id}>
          <div className="w-[1100px] min-h-[170px] relative justify-start text-white mb-10 flex flex-col z-5 bg-[url('/img/list-bg.png')] bg-right bg-no-repeat">
            <div className="absolute w-[267px] h-[170px]">
              <Image
                src={`/img/${celebrity.picture}`}
                alt={celebrity.name}
                fill
                objectFit="cover"
                className="absolute left-0 -z-10"
              />
            </div>

            <div className="flex max-h-[100px] flex-wrap items-center absolute top-0">
              {celebrity.votes.positive > celebrity.votes.negative ? (
                <ThumbsUp
                  style="bg-thumbsbg-green w-[45px] h-[45px]"
                  isListView
                />
              ) : (
                <ThumbsDown
                  style="bg-thumbsbg-yellow w-[45px] h-[45px]"
                  isListView
                />
              )}
            </div>
            <div className="flex flex-col ml-[267px] w-max items-start">
              <p className="overflow-hidden text-[36px] mt-[5px] font-normal whitespace-nowrap overflow-ellipsis max-w-[350px]">
                {celebrity.name}
              </p>
              <p className="text-[15px] line-clamp-2 font-light w-[540px] self-center">
                {celebrity.description}
              </p>
              <p className="absolute right-0 px-4 py-2 text-xs font-bold bottom-self-end">
                {formatDistanceStrict(
                  new Date(celebrity.lastUpdated),
                  new Date(),
                )}
                &nbsp;ago in {celebrity.category}
              </p>
            </div>

            <div className="flex justify-between w-[190px] self-end mr-8 mb-3 absolute -right-4 top-12">
              <button onClick={() => handleVote(celebrity._id, 'positive')}>
                <ThumbsUp style="bg-thumbsbg-green-hover" isListView />
              </button>
              <button onClick={() => handleVote(celebrity._id, 'negative')}>
                <ThumbsDown style="bg-thumbsbg-yellow-hover" isListView />
              </button>
              <button className="w-[107px] h-[38px] border border-s-white bg-vote-now-bg text-[15px]">
                Vote Now
              </button>
            </div>
            <VoteGauge
              isListView
              positiveVotes={celebrity?.votes?.positive}
              negativeVotes={celebrity?.votes?.negative}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
