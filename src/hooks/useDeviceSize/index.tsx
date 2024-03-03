import useMedia from 'use-media'

export default function useDeviceSize() {
  const isDesktop = useMedia({ minWidth: 1024 })
  const isTablet = useMedia({ minWidth: 768 })
  const isMobile = useMedia({ minWidth: 640 })

  return { isDesktop, isTablet, isMobile }
}
