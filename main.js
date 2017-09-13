$(document).ready(function(){

    $(".sideBar").hide();

    resizeForMobile();

    $(window).resize(function () {
        resizeForMobile();
    });
    
    
      
    
});

function mobilMenyClicked(){
    $(".sideBar").show();

    /*$("#mobilMeny").toggle(
        function(){
            $("#sideBardiv").css("left", "0px");
        },
        function(){
            $("#sideBardiv").css("left", "200px");
        }
    );*/
}  

function resizeForMobile() {
    var win = $(window).width();
    if (win >= 820) { 
        $(".mobil").hide();
        $(".ejMobil").show();
        $(".sideBar").hide();
    }
    if (win <= 820) {  
        $(".ejMobil").hide();
        $(".mobil").show(); 
    }
}