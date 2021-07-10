$(function() {

  $('.header-menu-item-sp > a').on('click', function() {
    $('#overlay').fadeOut()
    document.getElementById('sp_menu').classList.remove('active')
    document.body.style['overflow-y'] = 'auto'
  })
  
})

// Enter
let input = []
code = [38,38,40,40,37,39,37,39,66,65]

$(window).keyup(function(e){
input.push(e.keyCode)

if (input.toString().indexOf(code) >= 0)
  {
    window.location.href = '/recruit/' // Coming soon
  }
})