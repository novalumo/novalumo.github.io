$(function() {

    $('.btn-open').on('click', function() {
      $('#overlay').fadeIn();
    });
    
    $('.close-btn').on('click', function() {
      $('#overlay').fadeOut();
    });
  
    $('#overlay').on('click', function() {
      $('#overlay').fadeOut();
      sp_menu.classList.remove('active');
      body.style['overflow-y'] = 'auto';
    });

    $('.header-menu-item-sp > a').on('click', function() {
      $('#overlay').fadeOut();
      sp_menu.classList.remove('active');
      body.style['overflow-y'] = 'auto';
    });
  
  });
  
  let sp_menu = document.getElementById('sp_menu');
  let body    = document.body;
  
  function openSmartMenu() {
    sp_menu.classList.toggle('active');
    body.style['overflow-y'] = 'hidden';
  }
  
  function closeSmartMenu() {
    sp_menu.classList.remove('active');
    body.style['overflow-y'] = 'auto';
  }
  
  // Enter
  let input = [];
  code = [38,38,40,40,37,39,37,39,66,65];
  
  $(window).keyup(function(e){
  input.push(e.keyCode);
  
  if (input.toString().indexOf(code) >= 0)
    {
      window.location.href = '/recruit/'; // Coming soon
    }
  });