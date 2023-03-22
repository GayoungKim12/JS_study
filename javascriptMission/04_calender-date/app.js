import { getCalender, getDaysDOM, getDaysWeek, getDaysInfo, checkToday } from "./getCalender.js";

const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const $calenderContainer = get('.calender-container');
const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

// 선택한 년, 월 정보 가져오기
const pickCalenderRender = (pickYear, pickMonth, yearDOM, monthDOM) => {
  yearDOM.innerText = pickYear;
  const monthIndex = months.findIndex((el) => {
    return el.slice(0, 3) === pickMonth;
  });
  monthDOM.innerText = months[monthIndex];
};

// 선택된 날짜에 select 표시하기
const pickedDate = (pickDay, calenderGridDOM) => {
  const daysCurrentMonth = Array.from(calenderGridDOM.querySelectorAll('.current'));
  daysCurrentMonth[pickDay-1].classList.add('select');
};

const init = () => {
  getCalender();
  
  const $datePicker = get('.date-picker');
  const $calenderGrid = get('.calender-grid');
  const $month = get('.month');
  const $year = get('.year');
  
  $datePicker.addEventListener('focus', () => {
    const [ year, month, date ] = getDaysInfo();
    pickCalenderRender(year, month, $year, $month);
    getDaysWeek($calenderGrid);
    getDaysDOM($calenderGrid, year, month);
    if($datePicker.value !== '') pickedDate(date, $calenderGrid);
    checkToday(year, month, $calenderGrid);
    $calenderContainer.style.display = 'block';
  });
  window.addEventListener('click', (e) => {
    const innerCalender = Array.from(getAll('.calender *'));
    if(innerCalender.includes(e.target) || e.target === $datePicker) return null;
    $calenderContainer.style.display = 'none';
  });
};

init();