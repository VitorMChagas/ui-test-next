import { useState, useEffect } from 'react'

export interface IWindowSize {
  width?: number
  height?: number
}

const useWindowSize = (): IWindowSize => {
  const initialSize: IWindowSize = {
    width: undefined,
    height: undefined,
  }

  const [windowSize, setWindowSize] = useState(initialSize)

  // Handler to call on window resize
  const handleResize = () => {
    // Set window width/height to state

    const newWindowSize: IWindowSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    setWindowSize(newWindowSize)
  }

  useEffect(() => {
    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}

export default useWindowSize
