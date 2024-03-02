'use client'

import { useState } from 'react'
import Header from '@/components/header'
import SpeakOutBanner from '@components/speak-out-banner'
import CelebrityList from '@components/celebrity-list'
import ViewDropdown from '@components/view-dropdown'
import CelebrityCard from '@components/celebrity-card'

export default function Page() {
  const [selectedOption, setSelectedOption] = useState('Grid')
  function handleSelectedOption(option: string) {
    setSelectedOption(option)
  }

  return (
    <>
      <Header />
      <SpeakOutBanner />
      <div className="flex max-w-[1100px] justify-between mx-auto my-3 items-center px-1">
        <p className="text-[--color-dark-gray] font-light text-[45px]">
          Previous Rulings
        </p>
        <ViewDropdown
          options={['List', 'Grid']}
          handleSelectedOption={handleSelectedOption}
        />
      </div>
      {/* <div className="min-w-[1100px] h-[350px] flex justify-center">
        {selectedOption === 'Grid' ? <CelebrityCard /> : <CelebrityList />}
      </div> */}
    </>
  )
}
