import { useEffect, useState } from 'react'
import { Celebrity } from './types'

interface HooksReturn {
  celebrities?: Celebrity[]
  setCelebrities?: string
}

export const useCelebrities = (): HooksReturn => {
  const [celebrities, setCelebrities] = useState<Celebrity[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/api/celebrities')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCelebrities(data.celebrities[0].data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return {
    celebrities,
  }
}
