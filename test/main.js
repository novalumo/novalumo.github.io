const toBk = () => {
  document.getElementById('main').style.backgroundColor = 'grey'
}

const toBl = () => {
  document.getElementById('main').style.backgroundColor = 'lightblue'
}

window.onload = () => {
  startObserve()
}

function startObserve () {
  // 見えている量が閾値を上回るか下回ったときに呼ばれる
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio === 1) {
        // 100%見えなくなったとき
        toBk()
      } else if (! entry.isIntersecting) {
        // 見えている領域が20%を下回ったとき
        toBl()
      }
    })
  }

  const option = {
    // 20%と100％の閾値
    threshold: [0.2, 1.0]
  }

  const observer = new IntersectionObserver(callback, option)

  const target = document.querySelector('#target')
  observer.observe(target)
}