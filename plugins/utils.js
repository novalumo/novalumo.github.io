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

const intersectionObserver = () => {

  // Observing Elements
  const elems = document.querySelectorAll('.animate')

  const options = {
    root: null,
    // rootMargin: '-50% 0px', // Center of viewport
    threshold: 0
  }
  
  const observer = new IntersectionObserver((entries) =>
  {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        // Check
        // console.log(entry.target.dataset)

        // Action
        entry.target.classList.add('animated')
      
      }
    })
  
  }, options)

  // Start Observing
  elems.forEach(box => {
    observer.observe(box)
  })

}

export default ({}, inject) => {
  inject('getSiteUrl', getSiteUrl)
  inject('getEnglishDate', getEnglishDate)
  inject('is404', is404)
  inject('intersectionObserver', intersectionObserver)
}