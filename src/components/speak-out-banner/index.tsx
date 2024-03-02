'use client'

import useDeviceSize from '@hooks/useDeviceSize'
import { useState } from 'react'

export default function SpeakOutBanner() {
  const [disable, setDisable] = useState(false)
  const { isDesktop } = useDeviceSize()

  return (
    <aside
      className={`flex justify-between 
    p-4 mt-9 overflow-hidden bg-light-gray text-[--color-dark-gray] max-w-[1100px] md:max-w-[723px] md:h-[110px] mx-auto ${disable ? 'hidden' : 'none'} `}
      role="doc-tip"
      aria-label="Speak Out"
    >
      <div className="basis-[20%] pr-4 flex flex-col justify-center">
        <span className="text-base font-light tracking-tightest md:text-[14px]">
          Speak out. Be heard.
        </span>
        <span className="text-2xl font-bold tracking-normal md:text-[21px] md:leading-5">
          Be counted
        </span>
      </div>
      <div className="basis-[80%]">
        <p className="font-light tracking-tightest md:text-[18px] md:leading-5">
          Rule of Thumb is a crowd sourced court of public opinion where anyone
          and everyone can speak out and speak freely. It’s easy: You share your
          opinion, we analyze and put the data in a public report.
        </p>
      </div>
      {!isDesktop ? (
        ''
      ) : (
        <button
          className="ml-4"
          aria-label="close"
          onClick={() => setDisable(!disable)}
        >
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#000" strokeWidth="2" fill="none" fillRule="evenodd">
              <path d="M1 19L19 1M1 1l18 18" />
            </g>
          </svg>
        </button>
      )}
    </aside>
  )
}
