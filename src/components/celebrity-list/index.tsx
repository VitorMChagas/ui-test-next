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
    <div className="flex flex-col justify-items-center lg:w-[1100px] w-[723px]">
      {celebrities?.map((celebrity) => (
        <div key={celebrity._id}>
          <div className="lg:w-[1100px] w-[723px] lg:min-h-[170px] min-h-[142px] relative justify-start text-white mb-10 flex flex-col z-5 lg:bg-[url('/img/list-bg.png')] bg-[url('/img/list-bg-tablet.png')] bg-right bg-no-repeat">
            <div className="absolute lg:w-[267px] lg:h-[170px] w-[170px] h-[142px]">
              <Image
                src={`/img/${celebrity.picture}`}
                alt={celebrity.name}
                fill
                style={{ objectFit: 'cover' }}
                className="absolute left-10 -z-10"
              />
            </div>

            <div className="flex max-h-[100px] flex-wrap items-center absolute top-0">
              {celebrity.votes.positive > celebrity.votes.negative ? (
                <ThumbsUp
                  thumbStyle="bg-thumbsbg-green lg:w-[45px] lg:h-[45px] w-[30px] h-[30px]"
                  isListView
                />
              ) : (
                <ThumbsDown
                  thumbStyle="bg-thumbsbg-yellow lg:w-[45px] lg:h-[45px] w-[30px] h-[30px]"
                  isListView
                />
              )}
            </div>
            <div className="flex flex-col lg:ml-[267px] ml-[160px] w-max items-start">
              <p className="overflow-hidden text-[36px] lg:mt-[5px] mt-0 font-normal whitespace-nowrap overflow-ellipsis max-w-[350px]">
                {celebrity.name}
              </p>
              <p className="text-[15px] line-clamp-2 font-light lg:w-[540px] w-[340px] self-center">
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
                <ThumbsUp thumbStyle="bg-thumbsbg-green-hover" isListView />
              </button>
              <button onClick={() => handleVote(celebrity._id, 'negative')}>
                <ThumbsDown thumbStyle="bg-thumbsbg-yellow-hover" isListView />
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
