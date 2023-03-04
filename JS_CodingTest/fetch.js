const industrys = [
  {
    logo: 'naver',
    color: 'green',
  },
  {
    logo: 'kakao',
    color: 'yellow',
  },
  {
    logo: 'line',
    color: 'green',
  },
  {
    logo: 'coupang',
    color: 'red',
  },
  {
    logo: 'baemin',
    color: 'mint',
  },
  {
    logo: 'carot',
    color: 'orange',
  },
]

industrys.forEach((industry) => {
  const { logo, color } = industry
  console.log(`${logo}의 대표 색상은 ${color}입니다`)
})

