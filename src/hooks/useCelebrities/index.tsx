import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Celebrity } from './types'

interface HooksReturn {
  celebrities: Celebrity[]
  setCelebrities: Dispatch<SetStateAction<Celebrity[]>>
}

export const useCelebrities = (): HooksReturn => {
  const [celebrities, setCelebrities] = useState<Celebrity[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/api/celebrities')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCelebrities(data.celebrities)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return {
    celebrities,
    setCelebrities,
  }
}
