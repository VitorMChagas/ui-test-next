'use client'

import useDeviceSize from '@hooks/useDeviceSize'
import { useState } from 'react'

export default function SpeakOutBanner() {
  const [disable, setDisable] = useState(false)
  const { isDesktop } = useDeviceSize()

  return (
    <aside
      className={`flex justify-between 
    lg:p-4 p-3 mt-9 overflow-hidden bg-light-gray text-[--color-dark-gray] w-[350px] h-[150px] lg:w-full lg:h-[88px] lg:max-w-[1100px] mx-auto md:w-[740px] md:h-[110px] md:my-6 ${disable ? 'hidden' : 'none'} `}
      role="doc-tip"
      aria-label="Speak Out"
    >
      <div className="w-[126px] basis-[60%] lg:pr-4 flex flex-col justify-center flex-nowrap md:basis-[30%] lg:basis-[15%]">
        <span className="text-[15px] font-light tracking-tightest md:text-[14px] lg:text-base">
          Speak out. Be heard.
        </span>
        <span className="lg:text-2xl text-xl font-bold tracking-normal leading-5 md:text-[21px] lg:leading-8 ">
          Be counted
        </span>
      </div>
      <div className="basis-[80%]">
        <p className="font-light tracking-tighter text-[15px] leading-[18px] md:text-[18px] md:leading-5 lg:tracking-tightest">
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
