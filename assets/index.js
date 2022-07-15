$(window).on('load', function () {
  $('#page').delay(100).css('opacity', '1');

  $(".edf-select").on("click touchstart" ,function () {
    const nameLevel = this.id.replaceAll('_',' ')
    const capitalize = nameLevel.slice(0,1).toUpperCase() + nameLevel.slice(1)

    $(this).addClass('active').siblings().removeClass("active")
    $('.edfImgLevel').attr('src',`assets/images/unidades/plantas/${this.id}.png`)
    $(".edfLevelUrl").attr('href',`assets/images/unidades/plantas/${this.id}.png`)
    if (this.id == "planta_baja") {
      $("#nameLevel span").text("Planta Baja")
    } else {
      $("#nameLevel span").text(capitalize)
    }

  })

   $(".linkTo").click(function (e) {
    e.preventDefault()
    $("header .collapse.show").removeClass("show")
    const url = $(this).attr("href")
    const header = $("header").height()
    if (!url.includes("html")) {
      const section = $(url.slice(1)).offset().top;
      window.scrollTo({top: section - header,behavior: "smooth"});
    } else{
      window.location = url
    }
  })

});

let offset

if (screen.width > 768){
  offset = 200
} else {
  offset = 0
}

new WOW({offset:offset, scrollContainer: null}).init()

$(".edfLevelUrl").fancybox({
  overlay : {
    closeClick : true,
  }
});

$('header').load('components/header.html')
$('footer').load('components/footer.html')

// ------------------------------Locations-----------------------------
$(".list .ubicacion3_item").click(function(){
  let type = $(this).data("type")
  $(`.${type}`).addClass("active").siblings().removeClass("active")
  $(this).addClass("selector").siblings().removeClass("selector")
 });

$(".mybtn").click(function(){
  $(".ubicacion3_right div").addClass("active").siblings().removeClass("selector")
});
//----------------------------------------My-Chart-----------------------------
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Vendido', 'No Vendido'],
        datasets: [{
            label: ['80%','20%'],
            backgroundColor: ['#E15344','#cecece'],
            borderColor: '#CDAC7D',
            borderWidth: 0,
            data: [80,20],
        }]
    },
    // Configuration options go here
    options: {
      cutoutPercentage: 65,
      tooltips: false,
        legend: {
            display: false,
        }
    }
});
//----------------------Animations-Typologies----------------------------
$(window).scroll(function () {
  animations_tipologies_text()
  tipologies_imgA("#tipologias .tipologias_imgA1", "Monoambientes")
  tipologies_imgA("#tipologias .tipologias_imgA2", "1 Dormitorio")
  tipologies_imgA("#tipologias .tipologias_imgA3", "2 Dormitorios")
})

function animations_tipologies_text(){
  const container = $('#tipologias')
  const heightElement = $(container).height()
  const heightTop = $(container).offset().top;
  const scroll = $(window).scrollTop();
  if (scroll>heightTop && scroll<(heightTop + (heightElement / 1.5 ))) {
    $('.tipologias_text').css('position', 'fixed')
    if (scroll > heightTop + (heightElement / 3)) {
      $(".tipologias_text").css({"top": "auto", "bottom": "0" })
    } else {
      $(".tipologias_text").css({"top": "0", "bottom": "auto" })
    }
  } else {
    $('.tipologias_text').css('position', 'absolute')
  }
}
function tipologies_imgA(section, text){
  const container = $(section);
  const heightTop = $(container).offset().top;
  const scroll = $(window).scrollTop();
  const heightElem = container.height();
  const move = heightTop - scroll
  if ((scroll > heightTop) && (scroll < (heightElem + heightTop))) {
    $(section).css({
      "background-attachment": "fixed",
      "background-position-y": move * .15,
    })
  } else {
    $(section).css({
      "background-attachment": "unset",
      "background-position-y": 0,
    })
  }
  if ((scroll > (heightTop - (heightElem / 2))) && (scroll < (heightTop + (heightElem / 2)))) {
    if ($(".titleTextTypology .display-5").text() != text) {
      $(".titleTextTypology .display-5").fadeOut().promise().done(function () {
        setTimeout(() => {
          $(".titleTextTypology .display-5").text(text).show()
        }, 50);
      })
    }
  }
}
// ------------------------------My Modal----------------------------
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
// ----------Swipper Modal-----------------
const swiperpopup = new Swiper('.swiper-popup', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// ----------Swipper Mobile Modal-----------------
const swipermobile = new Swiper('.swiper-mpopup', {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// ------------------------------Units Gallery-----------------------------
const galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 20,
  loop: true,
  slidesPerView: 7,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
const galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});
//-------------------------------- fancyBox-Amenities2----------------------------------

$('[data-fancybox="gallery"]').fancybox({
  animationEffect: "fade",
  arrows: true,
  infobar: false,
  buttons: ["zoom", "close"]
});
//-------------------------------- Swipper-Amenities----------------------------------
var bamenities = new Swiper('.swiper-amenities', {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ------------------------------Gallery-Advance-----------------------------
if (screen.width > 768){
  $("#lightgallery").lightGallery();
  const items =  $('#lightgallery a').length;
  const imgInit = 8
  const ImgMore = 4
  $('#lightgallery a:lt('+imgInit+')').show();
  if(imgInit >= items) {
    $('.btnMore').hide()
  }
  function seeMore() {
    let visibleItems = $('#lightgallery a:visible').length + ImgMore
    $('#lightgallery a:lt('+visibleItems+')').fadeIn(800);
    if(visibleItems >= items) {
      $('.btnMore').hide();
    }
  }
}
  if (screen.width < 768) {
    $("#gallery").addClass("swiper")
    $("#lightgallery").addClass("swiper-wrapper")
    $(".kids").addClass("swiper-slide")
      const mygallery = new Swiper(".swiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      })
  }
//---------------------------------Form-------------------------------
function dataSubmited(data) {
  const requestOptions = {
    method: 'POST',
    body: data,
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
  };
  fetch("https://www.infocasas.com.py/proyectos/torre-firenze-asuncion?&formulario=1&json=1", requestOptions)
  .then((json) => {
    setTimeout(()=>{
      if (json.status === 200) {
        $('#formSuccess').fadeIn();
      } else {
        $('#formError').fadeIn();
      }
      $('#formSending').hide();
    }, 2000)
  })
  .catch(error => {
    console.log('error', error);
    setTimeout(() => {
      $('#formSending').hide();
      $('#formError').fadeIn();
    }, 2000)
  });
}

function submited() {
 'use strict'
  const form = document.querySelector('#contactForm')
  const data = JSON.stringify({
    nombre: form.name.value,
    apellido: "",
    email: form.email.value,
    telefono: form.phone.value,
    tel: form.phone.value,
    source: 2,
    utm_source: "web_cliente",
    utm_medium: "austin",
    extra: form.consult.value,
    InfoLeads: 1,
    IDflow_execution: 4315
  })
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }else{
    dataSubmited(data)
    setTimeout(()=>{
      $(form).fadeOut();
      $('#formSending').fadeIn();
    },300)
  }
  form.classList.add('was-validated')
}

//-----------------------------Detect element in viewport-------------------------------
// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '360',
    width: '640',
    videoId: 'KgNBfc_Xf6s',
    playerVars: {
      playlist: 'KgNBfc_Xf6s',
      iv_load_policy: 3,
      enablejsapi: 1,
      disablekb: 1,
      autoplay: 0,
      controls: 0,
      showinfo: 0,
      origin: 'https://www.youtube.com',
      rel: 0,
      loop: 1,
      wmode: "transparent"
    },
    events: {
      onReady: function(event) {
          event.target.mute().setLoop(!0);
      }
    }
  });

  function playVideo() {
    player.playVideo();
  };

  function pauseVideo() {
    player.pauseVideo();
  };

  $('#player')
    .on("mouseenter", function() {
      $(this).addClass('active-video')
      playVideo()
    })
    .on("mouseleave", function() {
      $(this).removeClass('active-video')
      pauseVideo()
    })



  /*function isInViewportPlayer(){

    var contentScroll = $(document).scrollTop();
    var wndHeight = $(window).height();

    var playerTop = $('#player').offset().top;
    var playerHeight = $('#player').outerHeight();

    // If player block on screen
    if( playerTop <= contentScroll + wndHeight - (playerHeight/1.5) && playerTop + playerHeight >= contentScroll - (playerHeight/1.5) ){
      $('#player').addClass('active-video')
      playVideo()
    } else {
      pauseVideo()
      $('#player').removeClass('active-video')
    }
    $('#player')
  }

  $(window).scroll(function () {
    isInViewportPlayer()
  });*/
}







