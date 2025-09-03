let _lockCount = 0 // 중첩 모달 대비 카운터

// 모달이 열릴 때 있으면 좋은 유틸성이라 해서 작성.
function getOrCreateRoot() {
  let el = document.getElementById('modal-root')
  if (!el) {
    el = document.createElement('div')
    el.id = 'modal-root'
    document.body.appendChild(el)
  }
  return el
}

// 스크롤 잠금 & 스크롤바 폭만큼 padding 보정
function lockScroll() {
  _lockCount++
  if (_lockCount === 1) {
    const gap = window.innerWidth - document.documentElement.clientWidth
    document.documentElement.style.overflow = 'hidden'
    if (gap) {
      document.documentElement.style.paddingRight = `${gap}px`
    }
  }
}

// 카운터 0이면 복원
function unlockScroll() {
  _lockCount = Math.max(0, _lockCount - 1)
  if (_lockCount === 0) {
    document.documentElement.style.overflow = ''
    document.documentElement.style.paddingRight = ''
  }
}
export default {
  getOrCreateRoot,
  lockScroll,
  unlockScroll,
}
