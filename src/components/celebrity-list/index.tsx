'use client'
import { useState } from 'react'
import Image from 'next/image'
import { formatDistanceStrict } from 'date-fns/formatDistanceStrict'
import ThumbsUp from '@components/thumbs-up'
import ThumbsDown from '@components/thumbs-down'
import VoteGauge from '@components/vote-gauge'
import { useCelebrities } from '@hooks/useCelebrities'

interface HandleVoteType {
  id: number
  type: 'positive' | 'negative'
}

export default function CelebrityList() {
  const [votedCelebrity, setVotedCelebrity] = useState<number>()
  const [hasVoted, setHasVoted] = useState<boolean>()
  const [voteType, setVoteType] = useState('')
  const { celebrities, setCelebrities } = useCelebrities()

  const celebrityHasBeenVoted = (id: number) => votedCelebrity === id

  const handleVote = async ({ id, type }: HandleVoteType) => {
    if (!hasVoted) {
      try {
        const response = await fetch('/api/votes/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ celebrityId: id, vote: type }),
        })

        if (response.ok) {
          setHasVoted(true)
          setVotedCelebrity(id)
          const data = await response.json()
          setCelebrities((prevCelebrity) => {
            return prevCelebrity.map((celebrity) => {
              if (celebrity.id === id) {
                return {
                  ...celebrity,
                  votes: {
                    ...celebrity.votes,
                    [type]: celebrity.votes[type] + 1,
                  },
                }
              }
              return celebrity
            })
          })
          console.log('Vote registration success:', data)
        } else {
          console.error('Vote registration error:', response.statusText)
        }
      } catch (error) {
        console.error('Vote registration error:', error)
      }
    } else {
      setVoteType('')
      setHasVoted(false)
    }
  }

  return (
    <div className="flex flex-col justify-items-center lg:w-[1100px] w-[723px]">
      {celebrities?.map((celebrity) => (
        <div key={celebrity.id}>
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
                {hasVoted && celebrityHasBeenVoted(celebrity.id)
                  ? 'Thank you for your vote!'
                  : `${formatDistanceStrict(
                      new Date(celebrity.lastUpdated),
                      new Date(),
                    )} ago in ${celebrity.category}`}
              </p>
            </div>
            <div
              className={`flex justify-between ${hasVoted && celebrityHasBeenVoted(celebrity.id) ? '' : 'w-[190px]'} self-end mr-8 mb-3 absolute -right-4 top-12`}
            >
              <>
                {hasVoted && celebrityHasBeenVoted(celebrity.id) ? (
                  ''
                ) : (
                  <>
                    <button
                      onClick={() => setVoteType('positive')}
                      className="focus:border-white focus:border-[3px]"
                    >
                      <ThumbsUp
                        thumbStyle="bg-thumbsbg-green-hover"
                        isListView
                      />
                    </button>
                    <button
                      onClick={() => setVoteType('negative')}
                      className="focus:border-white focus:border-[3px]"
                    >
                      <ThumbsDown
                        thumbStyle="bg-thumbsbg-yellow-hover"
                        isListView
                      />
                    </button>
                  </>
                )}

                <button
                  disabled={!voteType && votedCelebrity !== celebrity.id}
                  onClick={async () => {
                    handleVote({
                      id: celebrity.id,
                      type: voteType as 'positive' | 'negative',
                    })
                  }}
                  className="w-[107px] h-[38px] border border-s-white bg-vote-now-bg text-[15px]"
                >
                  {hasVoted && celebrityHasBeenVoted(celebrity.id)
                    ? 'Vote Again'
                    : 'Vote Now'}
                </button>
              </>
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
