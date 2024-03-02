import { useMediaQuery } from 'react-responsive'

export default function useDeviceSize() {
  const isMobile = useMediaQuery({ minWidth: 640 })
  const isTablet = useMediaQuery({ minWidth: 768 })

  return { isMobile, isTablet }
}
