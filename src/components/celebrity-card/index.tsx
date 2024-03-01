'use client'
import React, { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'
import { Celebrity } from './types'

export default function CelebrityCard() {
  const [celebrities, setCelebrities] = useState<Celebrity[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/api/Celebrities')
      .then((res) => res.json())
      .then((data) => {
        console.log('API Response:', data.celebrities[0].data) // Log the API response
        setCelebrities(data.celebrities[0].data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  console.log('Celebrities State:', celebrities) // Log the celebrities state

  return (
    <div>
      {celebrities.map((celebrity) => (
        <div className="w-[348px] h-[348px] text-white grid grid-cols-1">
          <Fragment key={celebrity._id}>
            <Image
              src={`/img/${celebrity.picture}`}
              alt={celebrity.name}
              width={348}
              height={348}
              className="absolute -z-10"
            />
            <p className="text-4xl">{celebrity.name}</p>
            <p className="text-base font-normal">{celebrity.description}</p>
            <p className="text-xs font-bold">{celebrity.category}</p>
            <p>{celebrity.lastUpdated}</p>
            <p>{celebrity.votes.positive}</p>
            <p>{celebrity.votes.negative}</p>
          </Fragment>
        </div>
      ))}
    </div>
  )
}
