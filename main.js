

function screenSize () {
    var sizeX = $(window).width();
}

function ifScreenMobil() {
    var sizeX = $(window).width();
    if( sizeX >890) {
        $("mobil").hide();
        $("ejMobil").show();
    }
    else {
        $("ejMobil").hide();
        $("mobil").show();

    }
}