export const CALENDAR_CLASSNAMES = {
  months: 'flex w-full justify-center',
  month: 'block w-full',
  month_grid: 'w-full',
  month_caption: 'relative flex items-center justify-center w-1/2 mx-auto py-2',
  caption_label: 'text-base font-semibold text-center',
  nav: 'absolute inset-x-0 flex justify-between items-center px-2',
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
    'hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200',
  selected: 'bg-primary-500 text-white',
  today: 'ring-1 ring-primary-300',
  outside: 'text-gray-300',
  disabled: 'cursor-not-allowed opacity-60 text-gray-300',
} as const
