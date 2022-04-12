$(window).on('load', function () {
  $('body').css('opacity', '1');

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

   $("header .nav-link").click(function (e) {
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
            label: ['50%','50%'],
            backgroundColor: ['#E15344','#cecece'],
            borderColor: '#CDAC7D',
            borderWidth: 0,
            data: [50,50],
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
