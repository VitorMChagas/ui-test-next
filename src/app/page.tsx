'use client'

import { useState } from 'react'
import Header from '@/components/header'
import SpeakOutBanner from '@components/speak-out-banner'
import CelebrityList from '@components/celebrity-list'
import ViewDropdown from '@components/view-dropdown'
import CelebrityCard from '@components/celebrity-card'
import Footer from '@components/footer'
import useIsMobile from '@hooks/useIsMobile'

export default function Page() {
  const [selectedOption, setSelectedOption] = useState('Grid')
  const isMobile = useIsMobile()

  function handleSelectedOption(option: string) {
    setSelectedOption(option)
  }

  return (
    <>
      <Header />
      <SpeakOutBanner />
      <div className="flex lg:max-w-[1100px] justify-between mx-auto my-3 items-center lg:px-1 px-6">
        <p className="text-[--color-dark-gray] font-light text-[24px] lg:text-[45px]">
          Previous Rulings
        </p>
        {!isMobile && (
          <ViewDropdown
            options={['List', 'Grid']}
            handleSelectedOption={handleSelectedOption}
          />
        )}
      </div>
      {isMobile ? (
        <CelebrityCard />
      ) : (
        <div className="max-w-[800px] lg:max-w-[1100px] mx-auto flex justify-center pt-5">
          {selectedOption === 'Grid' ? <CelebrityCard /> : <CelebrityList />}
        </div>
      )}
      <Footer />
    </>
  )
}
