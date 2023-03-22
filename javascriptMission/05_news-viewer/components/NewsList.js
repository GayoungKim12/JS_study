// do something!
import { makeDOMwithProperties } from "../utils/dom.js";

const PAGE_KEY = 'page';
const CATEGORY_KEY = 'category';
const TOTAL_NEWS_KEY = 'total-news-list';
const pageSize = 5;
const apiKey = '8772e9f42f2d4ba5927fe27873286b0f';
const dataUri = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="'

const newsListContainer = makeDOMwithProperties('div', {
  classList: 'news-list-container',
});
const newsListDOM = makeDOMwithProperties('article', {
  classList: 'news-list',
});

// 받은 news정보를 이용해 news-item을 생성하는 함수
const createNewsItem = (item) => {
  const { title, url, urlToImage, content } = item;
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
  });

  return $newsItem;
};

// 생성한 news-item을 news-list에 넣기
const renderAllNews = (newsList) => {
  newsList.forEach((news) => {
    const newsItemDOM = createNewsItem(news);
    newsListDOM.appendChild(newsItemDOM);
  });
};

// axios를 이용해 해당 url에서 news 가져오기
const getNews = async (url) => {
  try {
    const response = await axios({
      method: "get",
      url: url,
    });
    return response;
  } catch(error) {
    console.error(error.message);
  }
};

// getNews 함수를 이용해 받아온 정보에서 뉴스만 빼내 브라우저에 렌더링하기
const loadNews = async (apiUrl) => {
  const response = await getNews(apiUrl);
  const newsList = response.data.articles;
  const totalNews = response.data.totalResults;
  sessionStorage.setItem(TOTAL_NEWS_KEY, totalNews);

  renderAllNews(newsList);
  return totalNews;
};

// news-list 초기화하기
const createNewsListDOM = (target, category) => {
  newsListDOM.innerHTML = '';
  sessionStorage.setItem(CATEGORY_KEY, category);
  sessionStorage.removeItem(PAGE_KEY);
  sessionStorage.removeItem(TOTAL_NEWS_KEY);
  
  let $scrollObserver = document.querySelector('.scroll-observer');
  if(!$scrollObserver) {
    $scrollObserver = createScrollObserver(newsListContainer);
  }
  newsListContainer.insertBefore(newsListDOM, $scrollObserver);

  target.appendChild(newsListContainer);
};

// scroll-observer 생성하기
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

// scroll-observer 제거하기
const removeObserver = () => {
  let $scrollObserver = document.querySelector('.scroll-observer')
  if(!$scrollObserver) return null
  newsListContainer.removeChild($scrollObserver)
}

// news-list에 news-item 추가하기
const addNewsList = () => {
  const category = sessionStorage.getItem(CATEGORY_KEY);
  const totalResultNumber = sessionStorage.getItem(TOTAL_NEWS_KEY) ? Number(sessionStorage.getItem(TOTAL_NEWS_KEY)) : Number.MAX_SAFE_INTEGER;
  const page = sessionStorage.getItem(PAGE_KEY) ? Number(sessionStorage.getItem(PAGE_KEY)) + 1 : 1;

  let $scrollObserver = document.querySelector('.scroll-observer');
  if(!$scrollObserver) {
    $scrollObserver = createScrollObserver(newsListContainer) ;
  }

  if(Math.ceil(totalResultNumber / pageSize) === page) return removeObserver();

  const API_URL = 
    `https://newsapi.org/v2/top-headlines?country=kr&category=${category === 'all' ? '' : category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
  loadNews(API_URL);
  sessionStorage.setItem(PAGE_KEY, page);
  sessionStorage.setItem(CATEGORY_KEY, category);
};

// category가 이전과 동일하면 news-list 초기화, 아니면 news-item 추가
const NewsList = (target, category) => {
  const categoryPrev = sessionStorage.getItem(CATEGORY_KEY);
  if(category == categoryPrev) addNewsList();
  else createNewsListDOM(target, category);
};

export default NewsList;
