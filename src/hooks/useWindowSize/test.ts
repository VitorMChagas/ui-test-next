import useWindowSize, { IWindowSize } from '@hooks/useWindowSize'
import TestRenderer from 'react-test-renderer'
import { renderHook } from '@testing-library/react'

const { act } = TestRenderer

describe('useWindowSize hook', () => {
  it('should return width and height when you instantiate hook', () => {
    const { result } = renderHook(() => useWindowSize())

    expect(result.current).toHaveProperty('width')
    expect(result.current).toHaveProperty('height')
  })

  it('should change window size value on hook when window size changed', () => {
    const { result } = renderHook(() => useWindowSize())
    const newSize: IWindowSize = {
      width: 1100,
      height: 900,
    }

    act(() => {
      if (global) {
        ;(global.innerWidth as number | undefined) = newSize.width
        ;(global.innerWidth as number | undefined) = newSize.height
      }

      global.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toMatchObject(newSize)
  })
})
