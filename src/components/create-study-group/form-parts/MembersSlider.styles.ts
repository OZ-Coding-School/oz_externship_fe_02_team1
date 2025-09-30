export const SLIDER_BASE_STYLE = 'w-full appearance-none focus:outline-none'

export const SLIDER_TRACK_STYLE =
  '[&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-200 ' +
  '[&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-gray-200'

export const SLIDER_THUMB_STYLE =
  // thumb h-5 vs track h-2 → mt = -(20-8)/2 = -6
  '[&::-webkit-slider-thumb]:bg-[#007BFF] [&::-webkit-slider-thumb]:mt-[-4px] [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 ' +
  '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow ' +
  '[&::-moz-range-thumb]:bg-primary-500 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5' +
  '[&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow'
