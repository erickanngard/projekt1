$(document).ready(function(){

    $(".sideBar").hide();

    resizeForMobile();
    resizeSetMarginTopBar();
   

    $(window).resize(function () {
        resizeForMobile();
        resizeSetMarginTopBar();
        

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

function resizeSetMarginTopBar(){

    var marginTopBar = $(".topBar").outerHeight(true);
    document.getElementById("sideBardiv").style.marginTop = marginTopBar;

}

/*function setSizeButton(){
    var hightButton = $(".buttonStyle").outerHeight(true);
    document.getElementsByClassName("buttonStyle").style.minWidth = hightButton;
}*/

function isVisible(){
    $(element).is(":visible");
}

/*function resizeSetMarginTobilStart(){
    
        var marginStartImg = $(".TobilStart").outerHeight(true);
        document.getElementById(".hanoProfil").style.marginTop = marginStartImg;
        alert(marginStartImg);
    
}*/