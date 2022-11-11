
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets  

    });



    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }


});
    
$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
    id = $(this).attr("id"),
    name = $(this).attr("name");
  var template = '<div class="' + classes + '">';
  template +=
    '<span class="custom-select-trigger">' +
    $(this).attr("placeholder") +
    "</span>";
  template += '<div class="custom-options">';
  $(this).find("option").each(function() {
    template +=
      '<span class="custom-option ' +
      $(this).attr("class") +
      '" data-value="' +
      $(this).attr("value") +
      '">' +
      $(this).html() +
      "</span>";
  });
  template += "</div></div>";

  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(
  function() {
    $(this).parents(".custom-options").addClass("option-hover");
  },
  function() {
    $(this).parents(".custom-options").removeClass("option-hover");
  }
);
$(".custom-select-trigger").on("click", function() {
  $("html").one("click", function() {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this)
    .parents(".custom-select-wrapper")
    .find("select")
    .val($(this).data("value"));
  $(this)
    .parents(".custom-options")
    .find(".custom-option")
    .removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this)
    .parents(".custom-select")
    .find(".custom-select-trigger")
    .text($(this).text());
});


$(".custom-select-trigger").on("click", function() {  

  if($('#potencial').next().hasClass( "opened" ))
    {        

     if($('#potencial1').next().hasClass( "opened" )) 
       {         
         console.log('trying to close drop 2');
         $('#potencial1').next().removeClass('opened');
         
         if($('#potencial').next().hasClass( "opened" ))
           {
           $('#potencial').next().removeClass('opened');

           }        
         
       }
       
     
    }
  else
    
    {
      console.log('does not has class');
          console.log($('#potencial1').next().attr('class')); 
      
          
    }
});

  })(window.jQuery);


  window.addEventListener('load',()=>{
    // $('.navbar-icon').click(()=>{
      // $('.navbar-icon').css({"height": "60px !important", "font-size": "200%","position":"absolute"});
      // console.log($('.navbar-icon').height());
    // })
    localStorage.setItem('theme','light');
    darklightthemeF()
  })

  function darklightthemeF(){
    let date = new Date(); 
    let hh = date.getHours(); 

    let themeColor = localStorage.getItem('theme');
    console.log(hh);
    if (hh>=19) {
      document.documentElement.style.setProperty('--dark-color', '#ffffff');
      document.documentElement.style.setProperty('--section-bg-color', '#000000');
      document.documentElement.style.setProperty('--white-color', '#000000');
    }else{
      
      document.documentElement.style.setProperty('--dark-color', '#000000');
      document.documentElement.style.setProperty('--section-bg-color', '#ffffff');
      document.documentElement.style.setProperty('--white-color', '#ffffff');
    }
    
  }

function darklighttheme(){
let themeColor = localStorage.getItem('theme');

if (themeColor==='light') {
  
  document.documentElement.style.setProperty('--dark-color', '#ffffff');
  document.documentElement.style.setProperty('--section-bg-color', '#000000');
  document.documentElement.style.setProperty('--white-color', '#000000');
  themeColor = localStorage.setItem('theme','dark')

}else if(themeColor==='dark'){

  document.documentElement.style.setProperty('--dark-color', '#000000');
  document.documentElement.style.setProperty('--section-bg-color', '#ffffff');
  document.documentElement.style.setProperty('--white-color', '#ffffff');
  themeColor = localStorage.setItem('theme','light')

}

}


