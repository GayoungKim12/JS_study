import { makeDOMwithProperties } from './utils/dom.js'

const get = (target) => document.querySelector(target);

const $calenderContainer = get('.calender-container')
const $datePicker = get('.date-picker')
const daysWeek = [ 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT' ]
const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]

// 년, 월, 일 가져오기
export const getDaysInfo = () => {
  let year, month, day
  if($datePicker.value === '') {
    const date = Date();
    const todayDate = date.split(' ')
    year = todayDate[3]
    month = todayDate[1]
    day = todayDate[2]
  } else {
    const pickDate = $datePicker.value.split('-')
    year = pickDate[0]
    month = months[pickDate[1]-1].slice(0, 3)
    day = pickDate[2]
  }
  return [ year, month, day ]
}

// 해당 해의 각 월의 일
const getMonthAndLastDay = (year, month) => {
  let date = []
  switch(month) {
    case 'Jan': date = [ '01', '31' ]
      break;
    case 'Feb': date = [ '02', year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? '29' : '28' ]
      break;
    case 'Mar': date = [ '03', '31' ]
      break;
    case 'Apr': date = [ '04', '30' ]
      break;
    case 'May': date = [ '05', '31' ]
      break;
    case 'Jun': date = [ '06', '30' ]
      break;
    case 'Jul': date = [ '07', '31' ]
      break;
    case 'Aug': date = [ '08', '31' ]
      break;
    case 'Sep': date = [ '09', '30' ]
      break;
    case 'Oct': date = [ '10', '31' ]
      break;
    case 'Nov': date = [ '11', '30' ]
      break;
    case 'Dec': date = [ '12', '31' ]
      break;
  }
  return date
}

// 해당 해, 월 1일의 요일 구하기
const getDayOfWeek = (year, month) => {
  const monthNumber = getMonthAndLastDay(Number(year), month)[0]
  const date = new Date(`${year}-${monthNumber}-01`)
  const dayOfWeek = date.getDay()
  return dayOfWeek
}

// 해당 월의 1일이 되기 전 채우기
// 이전 달의 마지막 일 알기
export const getDaysDOM = (target, year, month) => {
  const monthNumber = getMonthAndLastDay(Number(year), month)[0]
  const lastDayOfMonth = getMonthAndLastDay(Number(year), month)[1]
  const beforeMonth = Number(monthNumber)-2 >= 0 ? months[Number(monthNumber)-2].slice(0, 3) : months[11].slice(0, 3)
  const lastDayBeforeMonth = getMonthAndLastDay(Number(year), beforeMonth)[1]
  const firstDay = getDayOfWeek(year, month)
  const afterDays = 42 - Number(lastDayOfMonth) - firstDay
  let date = lastDayBeforeMonth - firstDay + 1

  for(let i = 0; i < firstDay; i++) {
    const dayDOM = makeDOMwithProperties('span', {
      innerText: date,
      className: 'date prev',
    })
    target.appendChild(dayDOM)
    date++
  }
  for(let i = 1; i <= lastDayOfMonth; i++) {
    const dayDOM = makeDOMwithProperties('span', {
      innerText: i,
      className: 'date current',
    })
    target.appendChild(dayDOM)
  }
  for(let i = 1; i <= afterDays; i++) {
    const dayDOM = makeDOMwithProperties('span', {
      innerText: i,
      className: 'date next',
    })
    target.appendChild(dayDOM)
  }
}

export const getDaysWeek = (target) => {
  target.innerText = ''
  daysWeek.forEach((dayWeek) => {
    const dayWeekDOM = makeDOMwithProperties('span', {
      innerText: dayWeek,
      className: 'week',
    })
    target.appendChild(dayWeekDOM)
  })
}

const setCalenderGrid = (calenderGrid) => {
  calenderGrid.style.display = 'grid'
  calenderGrid.style.gridTemplateRows = `repeat(7, 1fr)`
  calenderGrid.style.gridTemplateColumns = `repeat(${daysWeek.length}, 1fr)`
}

const getCalenderGrid = () => {
  const $calenderGrid = makeDOMwithProperties('div', {
    className: 'calender-grid',
  })
  setCalenderGrid($calenderGrid)

  return $calenderGrid
}

const getCalenderNav = () => {

  const $calenderNav = makeDOMwithProperties('div', {
    className: 'calender-nav'
  })
  const $leftButton = makeDOMwithProperties('button', {
    className: 'left-btn',
    innerHTML: `<i class='bx bxs-left-arrow'></i>`
  })
  const $monthAndYear = makeDOMwithProperties('div', {
    className: 'month-and-year'
  })
  const $month = makeDOMwithProperties('span', {
    className: 'month',
  })
  const $year = makeDOMwithProperties('span', {
    className: 'year',
  })
  const $rightButton = makeDOMwithProperties('button', {
    className: 'right-btn',
    innerHTML: `<i class='bx bxs-right-arrow'></i>`
  })

  $monthAndYear.appendChild($month)
  $monthAndYear.appendChild($year)

  $calenderNav.appendChild($leftButton)
  $calenderNav.appendChild($monthAndYear)
  $calenderNav.appendChild($rightButton)

  return $calenderNav
}

export const getCalender = () => {
  const $calender = makeDOMwithProperties('div', {
    className: 'calender',
  })
  const $calenderNav = getCalenderNav()
  $calender.appendChild($calenderNav);
  const $calenderGrid = getCalenderGrid()
  $calender.appendChild($calenderGrid)
  $calenderContainer.appendChild($calender)
}