import useWindowSize, { IWindowSize } from '@hooks/useWindowSize'

export const DESKTOP_MIN_WIDTH = 640

const useIsMobile = (): boolean => {
  const windowSize: IWindowSize = useWindowSize()

  return windowSize.width < DESKTOP_MIN_WIDTH
}

export default useIsMobile
