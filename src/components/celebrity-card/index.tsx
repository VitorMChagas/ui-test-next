import { Fragment } from 'react'
import { formatDistanceStrict } from 'date-fns/formatDistanceStrict'
import Image from 'next/image'
import ThumbsUp from '@components/thumbs-up'
import ThumbsDown from '@components/thumbs-down'
import VoteGauge from '@components/vote-gauge'
import { useCelebrities } from '@hooks/useCelebrities'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import useDeviceSize from '@hooks/useDeviceSize'

interface HandleVoteType {
  id: number
  type: string
}

export default function CelebrityCard() {
  const { celebrities } = useCelebrities()
  const { isMobile, isTablet, isDesktop } = useDeviceSize()

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
    <>
      <div className="flex flex-wrap w-[375px] pl-2 md:w-[640px] lg:w-[1100px]">
        {!isMobile && (
          <Swiper slidesPerView={1} centeredSlides spaceBetween={-12}>
            {celebrities?.map((celebrity) => (
              <SwiperSlide key={celebrity._id}>
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
                      {formatDistanceStrict(
                        new Date(celebrity.lastUpdated),
                        new Date(),
                      )}
                      &nbsp;ago in {celebrity.category}
                    </p>
                    <div className="flex justify-between w-[190px] self-end mr-8 mb-3">
                      <button
                        onClick={() => handleVote(celebrity._id, 'positive')}
                      >
                        <ThumbsUp thumbStyle="bg-thumbsbg-green-hover" />
                      </button>
                      <button
                        onClick={() => handleVote(celebrity._id, 'negative')}
                      >
                        <ThumbsDown thumbStyle="bg-thumbsbg-yellow-hover" />
                      </button>
                      <button className="w-[107px] h-[38px] border border-s-white bg-vote-now-bg text-[15px]">
                        Vote Now
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
        )}
      </div>

      <div className="grid grid-cols-2 min-w-[800px] justify-items-center w-full mx-auto relative lg:grid-cols-3 lg:min-w-[1100px]">
        {(isDesktop || isTablet) &&
          celebrities?.map((celebrity) => (
            <div className="w-[348px] h-[348px] text-white mb-10 flex flex-col justify-end">
              <Fragment key={celebrity._id}>
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
                  {formatDistanceStrict(
                    new Date(celebrity.lastUpdated),
                    new Date(),
                  )}
                  &nbsp;ago in {celebrity.category}
                </p>
                <div className="flex justify-between w-[190px] self-end mr-8 mb-3">
                  <button onClick={() => handleVote(celebrity._id, 'positive')}>
                    <ThumbsUp thumbStyle="bg-thumbsbg-green-hover" />
                  </button>
                  <button onClick={() => handleVote(celebrity._id, 'negative')}>
                    <ThumbsDown thumbStyle="bg-thumbsbg-yellow-hover" />
                  </button>
                  <button className="w-[107px] h-[38px] border border-s-white bg-vote-now-bg text-[15px]">
                    Vote Now
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
    </>
  )
}
