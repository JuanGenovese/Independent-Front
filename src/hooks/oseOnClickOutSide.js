import { useEffect } from "react"

export const useOnClickOutSide = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => {
      const el = ref?.current
      if (!el || el.contains((e?.target) || null)) {
        return
      }
      handler(e)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)
    }

  }, [ref, handler])
}