import { useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'

export const useOutsideClick = onOutsideClick => {
  const ref = useRef()

  const handleOutsideClick = useCallback(
    e => {
      if (!ref?.current?.contains(e.target)) {
        onOutsideClick()
      }
    },
    [onOutsideClick]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick, false)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick, false)
    }
  }, [handleOutsideClick])

  return ref
}

useOutsideClick.propTypes = {
  onOutsideClick: PropTypes.func.isRequired
}
