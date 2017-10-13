$(document).ready(function(){
    
        $(".sideBar").hide();
        resizeForMobile();
        resizeSetMarginTopBar();
        sizeMobilButton();
        imgSlidesFunction();
        stopSlideShow();
        appendCSSTopList();
        appendJSTopList();
        addListernerToElements();
        
       
    
        $(window).resize(function () {
            resizeForMobile();
            resizeSetMarginTopBar();
            sizeMobilButton();
            
        });
        
    
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
    var slideTimer = 2500;
    var interval;
    
    function imgSlidesFunction() {
        var i;
        var slides = document.getElementsByClassName("imgSlides");
    
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
          slides[i].style.height = "100%";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1} 
        slides[slideIndex-1].style.display = "block"; 
    }
    
    interval = setInterval(imgSlidesFunction, slideTimer);
    
    function stopSlideShow(){
        var stopButton = document.getElementById("stopButton");
        stopButton.addEventListener("click", function (){
            clearInterval(interval);
        });
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
    */
    
    function appendJSTopList(){
        var url = "https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&created:>=";
        var indexOfArray = 0;
        var count = 0;
        var resultItems = []
        $.ajax({
            url: url+stringLastWeek,/*yyyy-mm-dd */
            success: function (data){
                var items = data.items;
                for (var i = 0; i < items.length && (i < 5) ; i++) {
                    $(document.getElementById("teamJS")).append("<p> Namn: " + "<a href='"+items[i].html_url+"'>"+  items[i].name  +"</a>"+ ", Stars: " + items[i].stargazers_count + ", Owner: " +"<a href='"+items[i].owner.html_url+"'>"+  items[i].owner.login + "</a>"+"</p>" + "<br>")
                };
            },
            complete: function () {
                return;
            }
        }); 
    }
    
    
    function appendCSSTopList() {
        
        var url = "https://api.github.com/search/repositories?q=language:css&sort=stars&order=desc&created:>=";
        var indexOfArray = 0;
        var count = 0;
        var resultItems = []
        $.ajax({
            url: url+stringLastWeek,/*yyyy-mm-dd */
            success: function (data){
                var items = data.items;
                for (var i = 0; i < items.length && (i < 5) ; i++) {
                    $(document.getElementById("teamCSS")).append("<p> Namn: " + "<a href='"+items[i].html_url+"'>"+  items[i].name  +"</a>"+ ", Stars: " + items[i].stargazers_count + ", Owner: " +"<a href='"+items[i].owner.html_url+"'>"+  items[i].owner.login + "</a>"+"</p>" + "<br>")
                };
            },
            complete: function () {
                return;
            }
        }); 
    }
    
    
    function validate(element, regex) {
        var value = element.value;
    
        var isValid = regex.test(value);
    
        element.style.backgroundColor = isValid ? "green" : "red";
        
    };
    
    function addListernerToElements(){
    
        var fnameElement = document.getElementById("fname");
        var lnameElement = document.getElementById("lname");
        var epostElement = document.getElementById("epost");
        var pnumberElement = document.getElementById("pnumber");
        var subjectElement = document.getElementById("subject");
    
            fnameElement.addEventListener("keyup", function(){
            validate(fnameElement, /[a-z]{2,15}/);
        });
    
        lnameElement.addEventListener("keyup", function(){
            validate(lnameElement, /[a-z]{2,15}/);
        });
        epostElement.addEventListener("keyup", function(){
            validate(epostElement, /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/);
        });
        pnumberElement.addEventListener("keyup", function(){
            validate(pnumberElement, /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/);
        });
        subjectElement.addEventListener("keyup", function(){
            validate(subjectElement, /[a-z]{3,15}/);
        });
    
    };