$(document).ready(function(){

    $(".sideBar").hide();

    resizeForMobile();
    resizeSetMarginTopBar();
    sizeMobilButton();
   

    $(window).resize(function () {
        resizeForMobile();
        resizeSetMarginTopBar();
        sizeMobilButton();
        

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
    /*https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll*/ 
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
        $(".textform").width("50%");
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

fgrfwfew