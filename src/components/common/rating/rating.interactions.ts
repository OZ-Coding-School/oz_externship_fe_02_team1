import { useCallback } from 'react'

import { ratingUtils } from '@components'

interface UseRatingInteractionsOptions {
  value: number
  max: number
  interactiveStep: 0.5 | 1
  readOnly: boolean
  onChange?: (value: number) => void
}

const useRatingInteractions = ({
  value,
  max,
  interactiveStep,
  readOnly,
  onChange,
}: UseRatingInteractionsOptions) => {
  const { clamp } = ratingUtils

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (readOnly || !onChange) return
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        e.preventDefault()
        onChange(clamp(Math.round((value + interactiveStep) * 2) / 2, 0, max))
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        e.preventDefault()
        onChange(clamp(Math.round((value - interactiveStep) * 2) / 2, 0, max))
      } else if (e.key === 'Home') {
        e.preventDefault()
        onChange(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        onChange(max)
      }
    },
    [readOnly, onChange, value, interactiveStep, max, clamp]
  )

  const handlePointerDown =
    (baseIndex: number) => (e: React.PointerEvent<HTMLButtonElement>) => {
      if (readOnly || !onChange) return
      const rect = e.currentTarget.getBoundingClientRect()
      const ratio = (e.clientX - rect.left) / rect.width
      const frac = interactiveStep === 1 ? 1 : ratio < 0.5 ? 0.5 : 1
      const next = clamp(baseIndex + frac, 0, max)
      onChange(next)
    }

  return { handleKeyDown, handlePointerDown }
}

export default useRatingInteractions
