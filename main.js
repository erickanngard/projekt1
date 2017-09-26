$(document).ready(function(){

    $(".sideBar").hide();
    resizeForMobile();
    resizeSetMarginTopBar();
    sizeMobilButton();
    imgSlidesFunction();
    initialize();
    /*appendCSSTopList();
    appendJSTopList();*/
    
   

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
    }
    if (win <= 820) {  
        $(".ejMobil").hide();
        $(".mobil").show();
        $(".teamCard").width("94%");
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

/*
function ajaxHanoGet(){

    var i;
    $.ajax('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc', {
        success: (data) => {
            $(document)alert("<p>" + item.full_name + "</p>":any)
            /*
            data.items.for(i = 0; i < 5; i++ ){
                function (item) {
                    $(document)
                }
            }

        },
        error: (err) => {
            /* gör något vid error 
        }

    });
}
/*

function ajaxGet(){
    $.ajax({
        url: "https://api.github.com/search/repositories?q=javascript,+sort=stars&order=desc"
    }).done(function (data){
        data.items.for(var index = 0; index < 5; index++) {
            (function (item) {
            $(document.body).append("<p>" + item.full_name + "</p>")
            });
        };

    })
}*/
function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng (59.254276, 15.24923),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-body"),
            mapOptions);
}   


var lastWeek = new Date();
lastWeek.setDate(lastWeek.getDate() - 7);
var stringLastWeek = lastWeek.toISOString().slice(0,10);

/*
function ajaxGet(url){
    var indexOfArray = 0;
    var count = 0;
    var resultItems = []
    console.log(stringLastWeek);
    $.ajax({
        url: url+stringLastWeek,/*yyyy-mm-dd *//*
        success: function (data){
            var items = data.items;
            for (var i = 0; i < items.length && (i < 5) ; i++) {
                resultItems.push(items[i])
                console.log(items[i])
            };
            console.log("Length of resultItems = " + resultItems.length + ". Content = " + resultItems)
            //return resultItems;
        },
        complete: function () {
            return resultItems;
        }
    }); 
}

/*asynkront gör att de inte funkar i forloopen*/
/*
function appendJSTopList(){
    var list = ajaxGet("https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&created:>=")
    for (var i = 0; i < list.length; i++){
        $(document.getElementById("teamJS")).append("<p> Namn: " + list[i].name + ", Stars: " + list[i].stargazers_count + ", Owner: " + list[i].owner.login + "</p>" + "<br>");
        
    }
}

function appendCSSTopList() {
    ajaxGet("https://api.github.com/search/repositories?q=language:css&sort=stars&order=desc&created:>=", function (list){
        console.log(list);
        for (var i = 0; i < list.length; i++){
            $(document.getElementById("teamCSS")).append("<p> Namn: " + list[i].name + ", Stars: " + list[i].stargazers_count + ", Owner: " + list[i].owner.login + "</p>" + "<br>");
            
        }
    })
    
}
*/