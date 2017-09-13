$(document).ready(function(){

    var win = $(window).width();
    if (win >= 820) { 
        $(".mobil").hide();
        $(".ejMobil").show();
     }
    if (win <= 820) {  
        $(".ejMobil").hide();
        $(".mobil").show(); 
    }
    $(window).resize(function(){
        var win = $(window).width();
        if (win >= 820) { 
            $(".mobil").hide();
            $(".ejMobil").show();
         }
        if (win <= 820) {  
            $(".ejMobil").hide();
            $(".mobil").show(); 
        }
    });
});
