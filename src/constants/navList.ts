export const HEADER_DESKTOP_NAV_LISTS = [
  { name: '강의 목록', path: '/courses' },
  { name: '스터디 그룹', path: '/study-group' },
  { name: '구인 공고', path: '/recruitment' },
]

export const HEADER_MOBILE_NAV_LISTS = [
  { name: '강의', path: '/courses' },
  { name: '그룹', path: '/study-group' },
  { name: '공고', path: '/recruitment' },
  { name: '내정보', path: '/my-page' },
]

export const FOOTER_NAV_LISTS = [
  {
    title: '서비스',
    list: HEADER_DESKTOP_NAV_LISTS,
  },
  {
    title: '지원',
    list: [
      { name: '고객센터', path: '/' },
      { name: 'FAQ', path: '/' },
      { name: '개인정보처리방침', path: '/' },
    ],
  },
]
