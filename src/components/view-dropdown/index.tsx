'use client'

import React, { useState } from 'react'
import { IoCaretDownSharp } from 'react-icons/io5'

interface DropdownProps {
  options: ('List' | 'Grid')[]
  handleSelectedOption: (option: string) => void
}

export default function ViewDropdown({
  options,
  handleSelectedOption,
}: DropdownProps) {
  const [open, setOpen] = useState(false)
  const [currentOption, setCurrentOption] = useState('Grid')

  const handleOptionClick = (option: string) => {
    setCurrentOption(option)
    setOpen(false)
    handleSelectedOption(option)
  }

  return (
    <div className="relative z-10 inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex l relative items-center justify-center px-4 py-2 w-[173px] text-sm font-medium text-gray-700 border-2 bg-white border-black hover:bg-gray-50"
      >
        {currentOption}
        <IoCaretDownSharp className="absolute right-4" />
      </button>
      {open && (
        <div className="absolute top-[34px] w-[173px] mt-2 bg-gray-50 divide-y-2 divide-black shadow-lg border-2 border-black">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`block w-full px-4 py-2 text-sm text-center ${
                currentOption === option
                  ? 'bg-indigo-100 text-zinc-600 font-bold'
                  : 'hover:bg-gray-100'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
