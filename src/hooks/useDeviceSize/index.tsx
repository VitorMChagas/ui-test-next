import { useMediaQuery } from 'react-responsive'

export default function useDeviceSize() {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const isMobile = useMediaQuery({ minWidth: 640 })
  const isTablet = useMediaQuery({ minWidth: 768 })

  return { isDesktop, isMobile, isTablet }
}
