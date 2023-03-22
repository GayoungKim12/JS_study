// do something!
import { makeDOMwithProperties } from "../utils/dom.js";

const categorys = [
  {
    id: 'all',
    className: 'category-item active',
    innerText: '전체보기',
  },
  {
    id: 'business',
    className: 'category-item',
    innerText: '비즈니스',
  },
  {
    id: 'entertainment',
    className: 'category-item',
    innerText: '엔터테인먼트',
  },
  {
    id: 'health',
    className: 'category-item',
    innerText: '건강',
  },
  {
    id: 'science',
    className: 'category-item',
    innerText: '과학',
  },
  {
    id: 'sports',
    className: 'category-item',
    innerText: '스포츠',
  },
  {
    id: 'technology',
    className: 'category-item',
    innerText: '기술',
  },
];

const categoryList = makeDOMwithProperties('nav', {
  className: 'category-list',
});
const ulDOM = document.createElement('ul');

// category-nav를 생성하기
const Nav = (target) => {
  target.appendChild(categoryList);
  categoryList.appendChild(ulDOM);
  categorys.forEach((category) => {
    const categoryDOM = makeDOMwithProperties('li', category);
    ulDOM.appendChild(categoryDOM);
  });
};

export default Nav;

