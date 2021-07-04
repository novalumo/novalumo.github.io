const getSiteUrl = () => {
  return 'https://www.novalumo.llc'
}

const getEnglishDate = (val) => {
  let date = new Date(val)
  if (date.toString() !== 'Invalid Date')
  {
    const list = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    let month = date.getMonth()
    let month_english = list[month]

    let day  = date.getDate()
    let year = date.getFullYear()

    return month_english + ' ' + day + ', ' + year
  }

  return ''
}

const is404 = (url) => {
  let xhr
  xhr = new XMLHttpRequest()
  xhr.open('HEAD', url, false)
  xhr.send(null)

  return xhr.status
}

export default ({}, inject) => {
  inject('getSiteUrl', getSiteUrl)
  inject('getEnglishDate', getEnglishDate)
  inject('is404', is404)
}