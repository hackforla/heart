import { useEffect, useState } from 'react'

export const useWindowScroll = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  useEffect(() => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(coords.x, coords.y)
    }
  }, [coords])

  return [setCoords]
}
