// do something!
import * as index from "./components/index.js";

const $root = document.querySelector('#root')

// 전역 상태에서 카테고리 관리하는 함수
const categoryObj = { category: null }

// 옵저버 패턴을 생성하는 함수
const createObjectObserver = (target, callback) => {
	const proxy = new Proxy(target, {
		set(obj, prop, value) {
			if (value !== obj[prop]) {
				obj[prop] = value
				callback(value)
			}
			return true
		}
	})
	return proxy
}

// 활성화된 카테고리 변경하는 함수
const activeChange = (e) => {
  if(!e.target.classList.contains('category-item')) return null;
  const $activeCategory = document.querySelector('.active')
  $activeCategory.classList.remove('active')
  e.target.classList.add('active')
}

// 로더가 보이면 다음 페이지를 렌더링
const onScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      index.NewsList($root, categoryObserver.category)
    }
  })
}, { threshold: 1.0 })

// onScroll이 무엇을 관찰할지 세팅
const setScrollObserver = (scrollObserverDOM) => {
  onScroll.observe(scrollObserverDOM)
}

// 카테고리가 바뀌면 news-list를 다시 렌더링
const categoryTrans = () => {
  index.NewsList($root, categoryObserver.category)
  const $loader = document.querySelector('.scroll-observer')
  setScrollObserver($loader)
}

// category 객체를 관찰하는 옵저버 생성
const categoryObserver = createObjectObserver(categoryObj, categoryTrans)

const init = () => {
  sessionStorage.removeItem('category')
  index.Nav($root)

  const $categoryList = document.querySelector('.category-list')
  categoryObserver.category = 'all'
  
  $categoryList.addEventListener('click', (e) => {
    activeChange(e)
    categoryObserver.category = e.target.id
  })
}

init()