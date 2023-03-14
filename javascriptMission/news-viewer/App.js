// do something!
import * as index from "./components/index.js";

const $root = document.querySelector('#root')

let categoryItem

const activeChange = (e) => {
  if(!e.target.classList.contains('category-item')) return null;
  const $activeCategory = document.querySelector('.active')
  $activeCategory.classList.remove('active')
  e.target.classList.add('active')
}

const init = () => {
  index.Nav($root)
  window.addEventListener('DOMContentLoaded', () => {
    categoryItem = 'all'
    index.NewsList($root, categoryItem)
  })
  const $categoryList = document.querySelector('.category-list')
  $categoryList.addEventListener('click', (e) => {
    activeChange(e)
    categoryItem = e.target.id
    index.NewsList($root, categoryItem)
  })
}

init()