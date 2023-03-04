// do something!

const get = (target) => document.querySelector(target)

const NAV_STATE_KEY = 'nav-state'
const $body = get('body')
const $nav = get('.container nav')
const $navButton = get('.container .toggle')

// 이전의 nav상태 가져오기
const getNavState = () => {
  const prevNavState = localStorage.getItem(NAV_STATE_KEY) || 0
  let navState = null
  if(prevNavState === 'open' || prevNavState === 0) {
    navState = true
  } else{
    navState = false
  }
  return navState
}

// 로컬 스토리지에 nav상태 저장
const saveNavState = (navState) => {
  localStorage.setItem(NAV_STATE_KEY, navState)
}

// nav와 body 세팅
const setNavBody = () => {
  const navState = getNavState()
  if(navState && !$nav.classList.contains('active')) {
    $nav.classList.add('active')
  } else if(!navState && $nav.classList.contains('active')) {
    $nav.classList.remove('active')
  }
  $body.style.visibility = 'visible'
}

// body transition 활성화
const bodyTransition = () =>{
  if(!$body.classList.contains('preload')) return
  $body.classList.remove('preload')
}

// button 클릭 시 nav 활성화/비활성화, nav 상태 저장
const navToggleEvent = () => {
  $nav.classList.toggle('active')
  let navState = null
  if($nav.classList.contains('active')) {
    navState = 'open'
  } else {
    navState = 'close'
  }
  saveNavState(navState)
}

const init = () => {
  setNavBody()
  window.addEventListener('load', bodyTransition)
  $navButton.addEventListener('click', navToggleEvent)
}

init()
