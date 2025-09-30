function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max)
}

function roundToStep(n: number, step: number) {
  const inv = Math.round(n / step)
  return inv * step
}

/** 배열 평균을 0.5 단위로 반올림 */
function averageToHalfStep(values: number[]) {
  if (!values.length) return 0
  const avg = values.reduce((a, b) => a + b, 0) / values.length
  return roundToStep(avg, 0.5)
}

/** 아이콘 px → Tailwind h/w 클래스 (필요 시 케이스 추가) */
const sizeToHWClass = (px: number | undefined) => {
  switch (px) {
    case 16:
      return 'h-4 w-4'
    case 20:
      return 'h-5 w-5'
    case 24:
    default:
      return 'h-6 w-6'
    case 28:
      return 'h-7 w-7'
    case 32:
      return 'h-8 w-8'
  }
}

/** 10%단위 퍼센트를 매핑 */
const WIDTH_10_CLASS: Record<number, string> = {
  0: 'w-0',
  10: 'w-[10%]',
  20: 'w-[20%]',
  30: 'w-[30%]',
  40: 'w-[40%]',
  50: 'w-1/2',
  60: 'w-[60%]',
  70: 'w-[70%]',
  80: 'w-[80%]',
  90: 'w-[90%]',
  100: 'w-full',
}

function percentStep10(value: number, startIndex: number) {
  const lower = startIndex - 1
  if (value <= lower) return 0
  if (value >= startIndex) return 100
  const raw = (value - lower) * 100
  return clamp(Math.round(raw / 10) * 10, 0, 100)
}

const ratingUtils = {
  clamp,
  roundToStep,
  averageToHalfStep,
  sizeToHWClass,
  WIDTH_10_CLASS,
  percentStep10,
}

export default ratingUtils
