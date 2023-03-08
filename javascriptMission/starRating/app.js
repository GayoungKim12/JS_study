import { makeDOMwithProperties } from './dom.js';
import StarRating from './star-rating/index.js';

const $containers = [...document.querySelectorAll('.star-rating')];
const $currentRatings = document.querySelectorAll('.current-rating > span');
const $head = document.querySelector('head');
const $script = document.querySelector('script');

const styleStarRating = makeDOMwithProperties('link', {
  href: 'star-rating/theme.css',
  rel: 'stylesheet',
});
$head.insertBefore(styleStarRating, $script);

$containers.forEach(($container, i) => {
  // star-rating 컨테이너 요소의 참조를 StarRating 함수에 전달해 star 요소들로 구성된 star-rating 요소를 동적 생성한다.
  StarRating($container);

  // 이벤트 'rating-change'를 캐치해 화면에 표시한다.
  $container.addEventListener('click', (e) => {
    if(!e.target.classList.contains('bxs-star')) return;

    const lastStarId = e.target.dataset.score.split('-')[1];

    const ratingChange = new CustomEvent('rating-change', {
      detail: lastStarId,
    })
    $container.dispatchEvent(ratingChange);
  })

  $container.addEventListener('rating-change', e => {
    const rating = e.detail;
    $currentRatings[i].textContent = rating;
  });
});