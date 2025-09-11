/// <reference types="vite/client" />

import type { FC, SVGProps } from 'react'

declare module '*.svg' {
  export const ReactComponent: FC<SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module '*.svg?react' {
  export const ReactComponent: FC<SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
