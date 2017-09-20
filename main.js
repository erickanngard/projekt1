$(document).ready(function(){

    $(".sideBar").hide();
    resizeForMobile();
    resizeSetMarginTopBar();
    sizeMobilButton();
    imgSlidesFunction();
    initialize ();
   

    $(window).resize(function () {
        resizeForMobile();
        resizeSetMarginTopBar();
        sizeMobilButton();
        
    });
    
    /*https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll*/ 
});
$("a").on('click', function(event) {
            if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 500, function(){ 
                window.location.hash = hash;
              });
            } 
          });

function mobilMenyClicked(){
    $(".sideBar").animate({
        opacity: "toggle"
    },100);
}  

function resizeForMobile() {
    var win = $(window).width();
    if (win >= 820) { 
        $(".mobil").hide();
        $(".ejMobil").show();
        $(".sideBar").hide();
        $(".teamCard").width("27%");
        $(".textform").width("30%");
    }
    if (win <= 820) {  
        $(".ejMobil").hide();
        $(".mobil").show();
        $(".teamCard").width("94%");
        $(".textform").width("72%"); 
    }
}

function resizeSetMarginTopBar(){

    var marginTopBar = $(".topBar").outerHeight(true);
    document.getElementById("sideBardiv").style.marginTop = marginTopBar;

}

function sizeMobilButton(){
    var buttonHeight = $("#mobilMeny").outerHeight(true);
    document.getElementById("mobilMeny").style.width = buttonHeight;
}

/* Bild spel nedan */
var slideIndex = 0;

function imgSlidesFunction(n) {
  var i;
  var slides = document.getElementsByClassName("imgSlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(imgSlidesFunction, 3000);
}

function stopSlideShow(){
    clearTimeout(slideIndex);
}

function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng (59.254276, 15.24923),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }   