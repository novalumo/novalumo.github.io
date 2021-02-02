/* ----- Menu Actions ----- */
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
  
  });
  
  var sp_menu = document.getElementById('sp_menu');
  var body    = document.body;
  
  function openSmartMenu() {
    sp_menu.classList.toggle('active');
    body.style['overflow-y'] = 'hidden';
  }
  
  function closeSmartMenu() {
    sp_menu.classList.remove('active');
    body.style['overflow-y'] = 'auto';
  }
  
  /* ----- GSAP ----- */
  //TweenMax.fromTo('body', 1, {opacity:'0'}, {opacity:'1'});
  
  //TweenMax.from( '#btn', 1, { left: "200px", ease:"power1.out" } );
  
  //TweenMax.from( '#btn', 1, { left: "200px", ease:"elastic.out(1, 0.3)" } );
  
  /*
  gsap.to('.gsapSlideIn', {
    delay: 1,
    duration: 1.5,
    y: -10,
    opacity: 1,
    ease: "power2.out",
    // 複数要素を扱うプロパティ
    stagger: {
      from: "start",
      amount: 0.8
    }
  });
  */
  
  /* ----- Enter ----- */
  var input = [];
  code = [38,38,40,40,37,39,37,39,66,65]; // THIS IS A VERY FAMOUS COMMAND:)
  
  $(window).keyup(function(e){
  input.push(e.keyCode);
  
  if (input.toString().indexOf(code) >= 0)
    {
      alert("Awesome!!");
      window.location.href = "/recruit/";
    }
  });