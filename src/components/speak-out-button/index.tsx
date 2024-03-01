'use client'

import { useState } from 'react'

export default function SpeakOutButton() {
  const [disable, setDisable] = useState(false)
  return (
    <aside
      className={`flex justify-between 
    p-4 mt-9 overflow-hidden bg-light-gray text-[--color-dark-gray] max-w-[1100px] mx-auto ${disable ? 'hidden' : 'none'} `}
      role="doc-tip"
      aria-label="Speak Out"
    >
      <div className="basis-[20%] pr-4 flex flex-col">
        <span className="text-base font-light tracking-tightest ">
          Speak out. Be heard.
        </span>
        <span className="text-2xl font-bold tracking-normal">Be counted</span>
      </div>
      <div className="basis-[80%]">
        <p className="font-light tracking-tighter">
          Rule of Thumb is a crowd sourced court of public opinion where anyone
          and everyone can speak out and speak freely. It’s easy: You share your
          opinion, we analyze and put the data in a public report.
        </p>
      </div>
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
    </aside>
  )
}
