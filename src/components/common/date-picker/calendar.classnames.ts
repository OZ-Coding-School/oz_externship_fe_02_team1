export const CALENDAR_CLASSNAMES = {
  months: 'flex w-full justify-center',
  month: 'block w-full',
  month_grid: 'w-full',
  month_caption: 'relative flex items-center justify-center w-1/2 mx-auto py-2',
  caption_label: 'text-base font-semibold text-center hidden',
  nav: 'absolute top-2 inset-x-0 flex justify-between items-center px-2',
  nav_button:
    'inline-flex h-8 w-8 items-center justify-center rounded-lg text-gray-600 ' +
    'hover:bg-gray-100 hover:text-gray-900 focus:outline-none',
  table: 'table-fixed w-full border-collapse text-base mt-2',
  head_row: 'grid grid-cols-7',
  head_cell: 'text-center text-[13px] font-medium text-gray-500',
  row: 'grid grid-cols-7',
  cell: 'text-center align-middle h-12',
  day: 'p-0 text-center',
  day_button:
    'mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full text-sm ' +
    'hover:text-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200',
  selected: 'bg-primary-500 text-white',
  today: 'ring-1 ring-primary-300',
  outside: 'text-gray-300',
  disabled: 'cursor-not-allowed opacity-60 text-gray-300',

  dropdown:
    'appearance-none rounded-md border border-gray-200 bg-white ' +
    'px-3 py-1.5 pr-8 text-sm shadow-sm ' +
    'hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-200',
  dropdown_month: 'w-28', // 월 셀렉트 폭
  dropdown_year: 'w-24', // 연도 셀렉트 폭
} as const
