import useWindowSize, { IWindowSize } from '@hooks/useWindowSize'
import TestRenderer from 'react-test-renderer'
import { cleanup, renderHook } from '@testing-library/react'

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
      global.innerWidth = newSize.width
      global.innerHeight = newSize.height
      global.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toMatchObject(newSize)
  })

  it.skip('should change as often as when window size changes', () => {
    const { result } = renderHook(() => useWindowSize())
    const initialChanges = result.all.length
    const changeTimes = 7
    for (let index = 1; index <= changeTimes; index += 1) {
      act(() => {
        global.innerWidth += index
        global.innerHeight += index
        global.dispatchEvent(new Event('resize'))
      })
    }
    expect(result.all.length).toBe(initialChanges + changeTimes)
  })

  it('should remove window handler as when hook was destroyed', () => {
    const map = {}
    window.removeEventListener = jest.fn((event, cb) => {
      map[event] = cb
    })

    renderHook(() => useWindowSize())

    act(() => {
      cleanup()
    })

    expect(map).toHaveProperty('resize')
  })
})
