//  DOM 만들고 속성을 넣는 함수
const makeDOMwithProperties = (domType, propertyMap) => {
  const dom = document.createElement(domType);
  Object.keys(propertyMap).forEach((key) => {
    dom[key] = propertyMap[key];
  });
  return dom;
};

// 시침, 분침, 초침을 생성하는 함수
const setHands = (analogClock) => {
  const units = ['hour', 'minute', 'second'];
  units.forEach((unit) => {
    const handDOM = makeDOMwithProperties('div', {
      className: `hand ${unit}`
    });
    analogClock.appendChild(handDOM);
  });
};

// 시간 바를 생성하는 함수
const setTimebars = (analogClock) => {
  for(let i = 1; i <= 12; i += 1) {
    const timeDOM = makeDOMwithProperties('div', {
      className : `time time${i}`,
      innerHTML: '|'
    });
    analogClock.appendChild(timeDOM);
  }
};

// 아날로그 시계 구성하는 함수
const setAnalogClock = (container) => {
  setHands(container);
  setTimebars(container);
};

// 현재 시간 가져오는 함수
const getTime = () => {
  const date = new Date().toString();
  const time = date.split(' ')[4].split(':'); // -> [hour, minute, second]
  return time;
};

// 시침, 분침, 초침 세팅하기
const settingHands = (container) => {
  const time = getTime();

  const hoursNow = Number(time[0]) > 12 ? Number(time[0]) - 12 : Number(time[0]);
  const minutesNow = Number(time[1]);
  const secondsNow = Number(time[2]);
  
  const hourDOM = container.querySelector('.hand.hour');
  const minuteDOM = container.querySelector('.hand.minute');
  const secondDOM = container.querySelector('.hand.second');

  hourDOM.style.setProperty('--deg', `${hoursNow * 30 + minutesNow / 2}`);
  minuteDOM.style.setProperty('--deg', `${minutesNow * 6}`);
  secondDOM.style.setProperty('--deg', `${secondsNow * 6}`);
};

const AnalogClock = $container => {
  // do something!
  setAnalogClock($container);
  setInterval(() => {
    settingHands($container)
  }, 500);
};

export default AnalogClock;
