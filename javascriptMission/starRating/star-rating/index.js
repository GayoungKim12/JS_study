// do something!
import { makeDOMwithProperties } from "../dom.js";

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

const starsMouseOut = (e) => {
  if(!e.target.classList.contains('bxs-star')) return;
  
  const starIcons = Array.from(e.target.parentNode.childNodes);
  
  starIcons.forEach((starIcon) => {
    starIcon.classList.remove('hovered');
  });
}

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