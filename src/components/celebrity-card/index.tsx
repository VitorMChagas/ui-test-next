import { Fragment, useEffect, useState } from 'react'
import { formatDistanceStrict } from 'date-fns/formatDistanceStrict'
import Image from 'next/image'
import ThumbsUp from '@components/thumbs-up'
import ThumbsDown from '@components/thumbs-down'
import VoteGauge from '@components/vote-gauge'
import useDeviceSize from '@hooks/useDeviceSize'
import { useCelebrities } from '@hooks/useCelebrities'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import useIsMobile from '@hooks/useIsMobile'

interface HandleVoteType {
  id: number
  type: 'positive' | 'negative'
}

export default function CelebrityCard() {
  const [votedCelebrity, setVotedCelebrity] = useState<number>()
  const [hasVoted, setHasVoted] = useState<boolean>()
  const [voteType, setVoteType] = useState('')
  const { celebrities, setCelebrities } = useCelebrities()
  const isMobile = useIsMobile()

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
    <>
      {isMobile ? (
        <div className="flex flex-wrap w-[375px] pl-2 md:w-[640px] lg:w-[1100px]">
          <Swiper slidesPerView={1} centeredSlides spaceBetween={-12}>
            {celebrities.map((celebrity) => (
              <SwiperSlide key={celebrity.id}>
                <div className="w-[348px] h-[348px] text-white mb-10 flex flex-col justify-end">
                  <Fragment>
                    <Image
                      src={`/img/${celebrity.picture}`}
                      alt={celebrity.name}
                      width={348}
                      height={348}
                      objectFit="cover"
                      className="absolute -z-10"
                    />
                    <div className="flex max-h-[100px] flex-wrap items-center">
                      {celebrity.votes.positive > celebrity.votes.negative ? (
                        <ThumbsUp thumbStyle="bg-thumbsbg-green" />
                      ) : (
                        <ThumbsDown thumbStyle="bg-thumbsbg-yellow" />
                      )}
                      <p className="pl-2 overflow-hidden text-3xl font-normal whitespace-nowrap overflow-ellipsis max-w-[350px]">
                        {celebrity.name}
                      </p>
                    </div>

                    <p className="text-[15px] line-clamp-2 font-normal w-[300px] self-center">
                      {celebrity.description}
                    </p>
                    <p className="self-end pb-4 pr-5 text-xs font-bold">
                      {hasVoted
                        ? 'Thank you for your vote!'
                        : `${formatDistanceStrict(
                            new Date(celebrity.lastUpdated),
                            new Date(),
                          )} ago in ${celebrity.category}`}
                    </p>
                    <div className="flex justify-between w-[190px] self-end mr-8 mb-3">
                      {hasVoted ? (
                        ''
                      ) : (
                        <>
                          <button
                            className="focus:border-white focus:border-[3px]"
                            onClick={() => setVoteType('positive')}
                          >
                            <ThumbsUp thumbStyle="bg-thumbsbg-green-hover" />
                          </button>
                          <button
                            className="focus:border-white focus:border-[3px]"
                            onClick={() => setVoteType('negative')}
                          >
                            <ThumbsDown thumbStyle="bg-thumbsbg-yellow-hover" />
                          </button>
                        </>
                      )}

                      <button
                        className="w-[107px] h-[38px] border border-s-white bg-vote-now-bg text-[15px] disabled"
                        onClick={async () => {
                          handleVote({
                            id: celebrity.id,
                            type: voteType as 'positive' | 'negative',
                          })
                        }}
                      >
                        {hasVoted && celebrityHasBeenVoted(celebrity.id)
                          ? 'Vote Again'
                          : 'Vote Now'}
                      </button>
                    </div>
                    <VoteGauge
                      positiveVotes={celebrity?.votes?.positive}
                      negativeVotes={celebrity?.votes?.negative}
                    />
                  </Fragment>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="grid grid-cols-2 min-w-[800px] justify-items-center w-full mx-auto relative lg:grid-cols-3 lg:min-w-[1100px]">
          {celebrities.map((celebrity) => (
            <div className="w-[348px] h-[348px] text-white mb-10 flex flex-col justify-end">
              <Fragment key={celebrity.id}>
                <Image
                  src={`/img/${celebrity.picture}`}
                  alt={celebrity.name}
                  width={348}
                  height={348}
                  objectFit="cover"
                  className="absolute -z-10"
                />
                <div className="flex max-h-[100px] flex-wrap items-center">
                  {celebrity?.votes.positive > celebrity?.votes?.negative ? (
                    <ThumbsUp thumbStyle="bg-thumbsbg-green" />
                  ) : (
                    <ThumbsDown thumbStyle="bg-thumbsbg-yellow" />
                  )}
                  <p className="pl-2 overflow-hidden text-3xl font-normal whitespace-nowrap overflow-ellipsis max-w-[350px]">
                    {celebrity.name}
                  </p>
                </div>

                <p className="text-[15px] line-clamp-2 font-normal w-[300px] self-center">
                  {celebrity.description}
                </p>
                <p className="self-end pb-4 pr-5 text-xs font-bold">
                  {hasVoted && celebrityHasBeenVoted(celebrity.id)
                    ? 'Thank you for your vote!'
                    : `${formatDistanceStrict(
                        new Date(celebrity.lastUpdated),
                        new Date(),
                      )} ago in ${celebrity.category}`}
                </p>
                <div
                  className={`flex justify-between ${hasVoted && celebrityHasBeenVoted(celebrity.id) ? '' : 'w-[190px]'}  self-end mr-8 mb-3`}
                >
                  {hasVoted && celebrityHasBeenVoted(celebrity.id) ? (
                    ''
                  ) : (
                    <>
                      <button
                        className="focus:border-white focus:border-[3px]"
                        onClick={() => setVoteType('positive')}
                      >
                        <ThumbsUp thumbStyle="bg-thumbsbg-green-hover" />
                      </button>
                      <button
                        className="focus:border-white focus:border-[3px]"
                        onClick={() => setVoteType('negative')}
                      >
                        <ThumbsDown thumbStyle="bg-thumbsbg-yellow-hover" />
                      </button>
                    </>
                  )}
                  <button
                    className="h-[38px] w-[107px] border border-s-white bg-vote-now-bg text-[15px]"
                    disabled={!voteType && votedCelebrity !== celebrity.id}
                    onClick={async () => {
                      handleVote({
                        id: celebrity.id,
                        type: voteType as 'positive' | 'negative',
                      })
                    }}
                  >
                    {hasVoted && celebrityHasBeenVoted(celebrity.id)
                      ? 'Vote Again'
                      : 'Vote Now'}
                  </button>
                </div>
                <VoteGauge
                  positiveVotes={celebrity?.votes?.positive}
                  negativeVotes={celebrity?.votes?.negative}
                />
              </Fragment>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
