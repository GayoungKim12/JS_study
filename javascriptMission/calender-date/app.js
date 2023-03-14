import { getCalender, getDaysDOM, getDaysWeek, getDaysInfo } from "./getCalender.js";

const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const $calenderContainer = get('.calender-container')
const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]

getCalender()

const $datePicker = get('.date-picker')
const $leftButton = get('.left-btn')
const $rightButton = get('.right-btn')
const $calenderGrid = get('.calender-grid')
const $month = get('.month')
const $year = get('.year')
const innerCalender = Array.from(getAll('.calender *'))

const changeYear = (time) => {
  const currentYear = Number($year.innerText)
  if(time === 'before') {
    $year.innerText = currentYear - 1
  } else if(time === 'after') {
    $year.innerText = currentYear + 1
  } else {
    return null
  }
}

const changeMonth = (direction) => {
  const currentMonth = $month.innerText
  const currentMonthIndex = months.indexOf(currentMonth)
  if(direction === 'left') {
    if(currentMonthIndex != 0) {
      $month.innerText = months[currentMonthIndex - 1]
    } else {
      $month.innerText = months[11]
      changeYear('before')
    }
  } else if(direction === 'right') {
    if(currentMonthIndex != 11) {
      $month.innerText = months[currentMonthIndex + 1]
    } else {
      $month.innerText = months[0]
      changeYear('after')
    }
  } else {
    return null
  }
  const month = $month.innerText.slice(0, 3)
  return [ month, $year.innerText ]
}

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

const inputDatePicker = (e) => {
  if(!e.target.classList.contains('date')) return null
  const yearPick = Number($year.innerText)
  let monthPick = months.indexOf($month.innerText)+1
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

const pickCalenderRender = (pickYear, pickMonth) => {
  $year.innerText = pickYear
  const monthIndex = months.findIndex((el) => {
    return el.slice(0, 3) === pickMonth
  })
  $month.innerText = months[monthIndex]
}

const getTodayInfo = () => {
  const today = Date()
  const todayDate = today.split(' ')
  const yearToday = todayDate[3]
  const monthToday = todayDate[1]
  const dayToday = todayDate[2]

  return [yearToday, monthToday, dayToday]
}

const pickedDate = (pickDay) => {
  const daysCurrentMonth = Array.from($calenderGrid.querySelectorAll('.current'))
  daysCurrentMonth[pickDay-1].classList.add('select')
}

const checkToday = (currentYear, currentMonth) => {
  const [ todayYear, todayMonth, todayDate ] = getTodayInfo()
  if(currentYear ===  todayYear && currentMonth === todayMonth) {
    const daysCurrentMonth = Array.from($calenderGrid.querySelectorAll('.current'))
    daysCurrentMonth[Number(todayDate)-1].classList.add('today')
  }
}

const init = () => {
  $leftButton.addEventListener('click', () => {
    const [ month, year ] = changeMonth('left')
    getDaysWeek($calenderGrid)
    getDaysDOM($calenderGrid, year, month)
    checkToday(year, month)
    })
  $rightButton.addEventListener('click', () => {
    const [ month, year ] = changeMonth('right')
    getDaysWeek($calenderGrid)
    getDaysDOM($calenderGrid, year, month)
    checkToday(year, month)
  })

  $calenderGrid.addEventListener('mouseover', activeDate)
  $calenderGrid.addEventListener('mouseout', () => {
  const $activeDOM = get('.date.active')
    if($activeDOM !== null) {
      $activeDOM.classList.remove('active')
    }
  })

  $calenderGrid.addEventListener('click', (e) => {
    inputDatePicker(e)
    $calenderContainer.style.display = 'none'
  })

  $datePicker.addEventListener('focus', () => {
    const [ year, month, date ] = getDaysInfo()
    pickCalenderRender(year, month)
    getDaysWeek($calenderGrid)
    getDaysDOM($calenderGrid, year, month)
    if($datePicker.value !== '') pickedDate(date)
    checkToday(year, month)
    $calenderContainer.style.display = 'block'
  })
  $datePicker.addEventListener('blur', () => {
    window.addEventListener('click', (e) => {
      if(innerCalender.includes(e.target) || e.target === $datePicker) return null
      $calenderContainer.style.display = 'none'
    })
  })
}

init()