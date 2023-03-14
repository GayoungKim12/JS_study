// do something!

import { makeDOMwithProperties, appendChildrenList } from "../utils/dom.js"

const categoryList = makeDOMwithProperties('nav', {
  className: 'category-list',
})

const ulDOM = document.createElement('ul')

const allCategory = makeDOMwithProperties('li', {
  id: 'all',
  className: 'category-item active',
  innerText: '전체보기',
})
const businessCategory = makeDOMwithProperties('li', {
  id: 'business',
  className: 'category-item',
  innerText: '비즈니스',
})
const entertainmentCategory = makeDOMwithProperties('li', {
  id: 'entertainment',
  className: 'category-item',
  innerText: '엔터테인먼트',
})
const healthCategory = makeDOMwithProperties('li', {
  id: 'health',
  className: 'category-item',
  innerText: '건강',
})
const scienceCategory = makeDOMwithProperties('li', {
  id: 'science',
  className: 'category-item',
  innerText: '과학',
})
const sportsCategory = makeDOMwithProperties('li', {
  id: 'sports',
  className: 'category-item',
  innerText: '스포츠',
})
const technologyCategory = makeDOMwithProperties('li', {
  id: 'technology',
  className: 'category-item',
  innerText: '기술',
})

const Nav = (target) => {
  target.appendChild(categoryList)
  categoryList.appendChild(ulDOM)
  appendChildrenList(ulDOM, 
    [ 
      allCategory, 
      businessCategory, 
      entertainmentCategory, 
      healthCategory, 
      scienceCategory, 
      sportsCategory,
      technologyCategory
    ])
}

export default Nav

