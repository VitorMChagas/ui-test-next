'use client'

import { useState } from 'react'
import useDeviceSize from '@hooks/useDeviceSize'
import Header from '@/components/header'
import SpeakOutBanner from '@components/speak-out-banner'
import CelebrityList from '@components/celebrity-list'
import ViewDropdown from '@components/view-dropdown'
import CelebrityCard from '@components/celebrity-card'
import Footer from '@components/footer'

export default function Page() {
  const [selectedOption, setSelectedOption] = useState('Grid')
  const { isMobile } = useDeviceSize()

  function handleSelectedOption(option: string) {
    setSelectedOption(option)
  }

  return (
    <>
      <Header />
      <SpeakOutBanner />
      <div className="flex max-w-[1100px] justify-between mx-auto my-3 items-center px-1 md:px-6 md:py-">
        <p className="text-[--color-dark-gray] font-light text-[24px] lg:text-[45px] md:text-[24px]">
          Previous Rulings
        </p>
        {isMobile && (
          <ViewDropdown
            options={['List', 'Grid']}
            handleSelectedOption={handleSelectedOption}
          />
        )}
      </div>
      {!isMobile && (
        <div className="max-w-[640px] lg:max-w-[1100px] h-[350px] flex justify-center">
          {selectedOption === 'Grid' ? <CelebrityCard /> : <CelebrityList />}
        </div>
      )}
      <Footer />
    </>
  )
}
