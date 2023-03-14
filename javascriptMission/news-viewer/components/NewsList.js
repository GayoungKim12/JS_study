// do something!

import { makeDOMwithProperties } from "../utils/dom.js"

const newsListContainer = makeDOMwithProperties('div', {
  classList: 'news-list-container',
})
const newsListDOM = makeDOMwithProperties('article', {
  classList: 'news-list',
})

const pageSize = 5
const apiKey = '8772e9f42f2d4ba5927fe27873286b0f'
const dataUri = "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="

let page = 1

const createNewsItem = (item) => {
  const { title, url, urlToImage, content } = item
  const $newsItem = makeDOMwithProperties('section', {
    className: 'news-item',
    innerHTML: `
      <div class="thumbnail">
        <a href="${url}" target="_blank" rel="noopener noreferrer">
          <img
            src="${urlToImage === null ? dataUri : urlToImage}"
            alt="thumbnail" />
        </a>
      </div>
      <div class="contents">
        <h2>
          <a href="${url}" target="_blank" rel="noopener noreferrer">
            ${title}
          </a>
        </h2>
        <p>
          ${content === null ? '' : content}
        </p>
      </div>
    `
  })

  return $newsItem
}

const renderAllNews = (newsList) => {
  newsListDOM.innerHTML = '';
  newsList.forEach((news) => {
    const newsItemDOM = createNewsItem(news)
    newsListDOM.appendChild(newsItemDOM)
  });
}

const getNews = async (url) => {
  const response = await axios({
    method: "get",
    url: url,
  })
  if(response.status !== 200) throw new Error('fetch 에러')
  return response
}

const loadNews = async (apiUrl) => {
  const response = await getNews(apiUrl)
  const newsList = await response.data.articles
  renderAllNews(newsList)
}

const createNewsListDOM = (target, category) => {
  const API_URL = 
    `https://newsapi.org/v2/top-headlines?country=kr&category=${category === 'all' ? '' : category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`
  loadNews(API_URL)
  const $scrollObserver = document.querySelector('.scroll-observer')
  if($scrollObserver !== null) {
    newsListContainer.insertBefore(newsListDOM, $scrollObserver)
  } else {
    newsListContainer.appendChild(newsListDOM)
  }
  target.appendChild(newsListContainer)
}

const createScrollObserver = (container) => {
  const scrollObserver = makeDOMwithProperties('div', {
    className: 'scroll-observer',
  })
  const loadingImg = makeDOMwithProperties('img', {
    src: 'img/ball-triangle.svg',
    alt: 'Loading...',
  })
  scrollObserver.appendChild(loadingImg)
  container.appendChild(scrollObserver)
  return scrollObserver
}

const options = {
  threshold: 1.0,
}

const onScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return
    page++
    console
    console.log(entry)
  })
}, options)

const setScrollObserver = () => {
  let $scrollObserver = document.querySelector('.scroll-observer')
  if($scrollObserver === null) $scrollObserver = createScrollObserver(newsListContainer)
  onScroll.observe($scrollObserver)
}

const NewsList = (target, category) => {
  createNewsListDOM(target, category)
  setScrollObserver()
}

export default NewsList
