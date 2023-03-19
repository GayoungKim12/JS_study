// do something!
import { makeDOMwithProperties } from "../utils/dom.js";

// 설정한 별 개수만큼 별 생성하기
const setStarRatingContainer = (container) => {
  const starNumber = container.dataset.maxRating;
  let count = 0;
  let icons = '';

  while(count < starNumber) {
    icons += `<i class='bx bxs-star' data-score='star-${count+1}'></i>`;
    count++;
  }
  
  const starRatingContainer = makeDOMwithProperties('div', {
    className: 'star-rating-container',
    innerHTML: icons
  })
  container.appendChild(starRatingContainer);

  return starRatingContainer;
}

// 별 위에 마우스를 올리면 첫번째 별부터 마우스를 올린 별까지 hovered 클래스 포함하게 만들기
const starsMouseOver = (e) => {
  if(!e.target.classList.contains('bxs-star')) return;

  const starIcons = Array.from(e.target.parentNode.childNodes);
  let lastStarId = e.target.dataset.score.split('-')[1];
  
  starIcons.forEach((starIcon) => {
    const starId = starIcon.dataset.score.split('-')[1];

    if (starId <= lastStarId) {
      if(!starIcon.classList.contains('hovered')) {
        starIcon.classList.add('hovered');
      }
    } else {
      starIcon.classList.remove('hovered');
    }
  });
}

// 마우스가 별점 공간에서 나가면 hovered 클래스가 포함된 별들 hovered 클래스 제거하기
const starsMouseOut = (e) => {
  if(!e.target.classList.contains('bxs-star')) return;
  
  const starIcons = Array.from(e.target.parentNode.childNodes);
  
  starIcons.forEach((starIcon) => {
    starIcon.classList.remove('hovered');
  });
}

// 마우스로 별을 클릭하면 첫번째 별부터 마우스를 올린 별까지 select 클래스 포함하게 만들기
const starsClick = (e) => {
  if(!e.target.classList.contains('bxs-star')) return;
  
  const starIcons = Array.from(e.target.parentNode.childNodes);
  const lastStarId = e.target.dataset.score.split('-')[1];
  
  starIcons.forEach((starIcon) => {
    const starId = starIcon.dataset.score.split('-')[1];

    if (starId <= lastStarId) {
      starIcon.classList = 'bx bxs-star selected';
    } else {
      starIcon.classList = 'bx bxs-star';
    }
  })
}

const StarRating = (container) => {
  setStarRatingContainer(container);
  container.addEventListener('mouseover', starsMouseOver);
  container.addEventListener('mouseout', starsMouseOut);
  container.addEventListener('click', starsClick);
}

export default StarRating;