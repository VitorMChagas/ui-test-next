import useIsMobile, { DESKTOP_MIN_WIDTH } from '@hooks/useIsMobile'
import TestRenderer from 'react-test-renderer'
import { renderHook } from '@testing-library/react'

const { act } = TestRenderer

describe('useIsMobile', () => {
  it('should return false for minimum desktop window width', () => {
    const { result } = renderHook(() => useIsMobile())
    act(() => {
      global.innerWidth = DESKTOP_MIN_WIDTH
      global.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toBeFalsy()
  })

  it('should return true for minimum desktop window width', () => {
    const { result } = renderHook(() => useIsMobile())
    act(() => {
      global.innerWidth = DESKTOP_MIN_WIDTH - 1
      global.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toBeTruthy()
  })
})
