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

// 해당 해의 각 월의 마지막 일 구하기
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

// 달력에 일 채우기
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

// 달력에 요일 생성하기
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

// 해 바꾸기
const changeYear = (time, $year) => {
  const currentYear = Number($year.innerText)
  if(time === 'before') {
    $year.innerText = currentYear - 1
  } else if(time === 'after') {
    $year.innerText = currentYear + 1
  } else {
    return null
  }
}

// 월 바꾸기
const changeMonth = (direction, yearDOM, monthDOM) => {
  const currentMonth = monthDOM.innerText
  const currentMonthIndex = months.indexOf(currentMonth)
  if(direction === 'left') {
    if(currentMonthIndex != 0) {
      monthDOM.innerText = months[currentMonthIndex - 1]
    } else {
      monthDOM.innerText = months[11]
      changeYear('before', yearDOM)
    }
  } else if(direction === 'right') {
    if(currentMonthIndex != 11) {
      monthDOM.innerText = months[currentMonthIndex + 1]
    } else {
      monthDOM.innerText = months[0]
      changeYear('after', yearDOM)
    }
  } else {
    return null
  }
  const month = monthDOM.innerText.slice(0, 3)
  return [ month, yearDOM.innerText ]
}

// 마우스를 올리면 일이 활성화됨
const activeDate = (e) => {
  if(!e.target.classList.contains('date')) return null
  const $activeDOM = get('.date.active')
  const $selectDOM = get('.date.select')
  if($activeDOM !== null) {
    $activeDOM.classList.remove('active')
  }
  if($selectDOM !== null) {
    $selectDOM.classList.remove('select')
  }
  e.target.classList.add('active')
  return e.target.innerText
}

// 고른 년-월-일 <input>에 입력하기
const inputDatePicker = (e, yearDOM, monthDOM) => {
  if(!e.target.classList.contains('date')) return null
  const yearPick = Number(yearDOM.innerText)
  let monthPick = months.indexOf(monthDOM.innerText)+1
  const datePick = Number(e.target.innerText) >= 10 ? Number(e.target.innerText) : `0${Number(e.target.innerText)}`

  if(e.target.classList.contains('current')) {
    monthPick = monthPick >= 10 ? monthPick : `0${monthPick}`
    $datePicker.value = (`${yearPick}-${monthPick}-${datePick}`)
  } else if(e.target.classList.contains('prev')) {
    if(monthPick-1 != 0) {
      monthPick = monthPick-1 < 10 ? `0${monthPick-1}` : monthPick-1
      $datePicker.value = (`${yearPick}-${monthPick}-${datePick}`)
    } else {
      $datePicker.value = (`${yearPick-1}-${12}-${datePick}`)
    }
  } else if(e.target.classList.contains('next')) {
    if(monthPick+1 != 13) {
      monthPick = monthPick+1 < 10 ? `0${monthPick+1}` : monthPick+1
      $datePicker.value = (`${yearPick}-${monthPick}-${datePick}`)
    } else {
      $datePicker.value = (`${yearPick+1}-01-${datePick}`)
    }
  }
}

// 오늘 정보 가져오기
const getTodayInfo = () => {
  const today = Date()
  const todayDate = today.split(' ')
  const yearToday = todayDate[3]
  const monthToday = todayDate[1]
  const dayToday = todayDate[2]

  return [yearToday, monthToday, dayToday]
}

// 오늘이 포함된 해, 월인지 체크하기
export const checkToday = (currentYear, currentMonth, calenderGridDOM) => {
  const [ todayYear, todayMonth, todayDate ] = getTodayInfo()
  if(currentYear ===  todayYear && currentMonth === todayMonth) {
    const daysCurrentMonth = Array.from(calenderGridDOM.querySelectorAll('.current'))
    daysCurrentMonth[Number(todayDate)-1].classList.add('today')
  }
}

// calender-grid 행열 정하기
const setCalenderGrid = (calenderGrid) => {
  calenderGrid.style.display = 'grid'
  calenderGrid.style.gridTemplateRows = `repeat(7, 1fr)`
  calenderGrid.style.gridTemplateColumns = `repeat(${daysWeek.length}, 1fr)`
}

// calender-grid 생성하기
const getCalenderGrid = () => {
  const $calenderGrid = makeDOMwithProperties('div', {
    className: 'calender-grid',
  })
  setCalenderGrid($calenderGrid)

  return $calenderGrid
}

// calender-nav 생성하기
const getCalenderNav = () => {
  const calenderNavDOM = makeDOMwithProperties('div', {
    className: 'calender-nav'
  })
  const leftButtonDOM = makeDOMwithProperties('button', {
    className: 'left-btn',
    innerHTML: `<i class='bx bxs-left-arrow'></i>`
  })
  const monthAndYearDOM = makeDOMwithProperties('div', {
    className: 'month-and-year'
  })
  const monthDOM = makeDOMwithProperties('span', {
    className: 'month',
  })
  const yearDOM = makeDOMwithProperties('span', {
    className: 'year',
  })
  const rightButtonDOM = makeDOMwithProperties('button', {
    className: 'right-btn',
    innerHTML: `<i class='bx bxs-right-arrow'></i>`
  })

  monthAndYearDOM.appendChild(monthDOM)
  monthAndYearDOM.appendChild(yearDOM)

  calenderNavDOM.appendChild(leftButtonDOM)
  calenderNavDOM.appendChild(monthAndYearDOM)
  calenderNavDOM.appendChild(rightButtonDOM)

  return [ calenderNavDOM, leftButtonDOM, rightButtonDOM, yearDOM, monthDOM ]
}

// 달력 생성하기
export const getCalender = () => {
  const $calender = makeDOMwithProperties('div', {
    className: 'calender',
  })

  const [ $calenderNav, $leftButton, $rightButton, $year, $month ] = getCalenderNav()
  $calender.appendChild($calenderNav);
  const $calenderGrid = getCalenderGrid()
  $calender.appendChild($calenderGrid)
  $calenderContainer.appendChild($calender)

  $leftButton.addEventListener('click', () => {
    const [ month, year ] = changeMonth('left', $year, $month)
    getDaysWeek($calenderGrid)
    getDaysDOM($calenderGrid, year, month)
    checkToday(year, month, $calenderGrid)
  })
  $rightButton.addEventListener('click', () => {
    const [ month, year ] = changeMonth('right', $year, $month)
    getDaysWeek($calenderGrid)
    getDaysDOM($calenderGrid, year, month)
    checkToday(year, month, $calenderGrid)
  })
  
  $calenderGrid.addEventListener('mouseover', activeDate)
  $calenderGrid.addEventListener('mouseout', () => {
    const $activeDOM = get('.date.active')
    if($activeDOM !== null) {
      $activeDOM.classList.remove('active')
    }
  })
  
  $calenderGrid.addEventListener('click', (e) => {
    inputDatePicker(e, $year, $month)
    $calenderContainer.style.display = 'none'
  })
}
