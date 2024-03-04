import useWindowSize, { IWindowSize } from '@hooks/useWindowSize'

export const DESKTOP_MIN_WIDTH = 1024

const useIsDesktop = (): boolean => {
  const windowSize: IWindowSize = useWindowSize()

  return (windowSize.width as number) > DESKTOP_MIN_WIDTH
}

export default useIsDesktop
