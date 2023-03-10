(function ($) {
    "use strict"; jQuery('.mean-menu').meanmenu({ meanScreenWidth: "991" }); $(window).on('scroll', function () {
        if ($(this).scrollTop() > 120) { $('.navbar-area').addClass("is-sticky"); }
        else { $('.navbar-area').removeClass("is-sticky"); }
    }); $('.close-btn').on('click', function () { $('.search-overlay').fadeOut(); $('.search-btn').show(); $('.close-btn').removeClass('active'); }); $('.search-btn').on('click', function () { $(this).hide(); $('.search-overlay').fadeIn(); $('.close-btn').addClass('active'); }); $('.popup-youtube').magnificPopup({ disableOn: 320, type: 'iframe', mainClass: 'mfp-fade', removalDelay: 160, preloader: false, fixedContentPos: false }); $('.input-counter').each(function () {
        var spinner = jQuery(this), input = spinner.find('input[type="text"]'), btnUp = spinner.find('.plus-btn'), btnDown = spinner.find('.minus-btn'), min = input.attr('min'), max = input.attr('max'); btnUp.on('click', function () {
            var oldValue = parseFloat(input.val()); if (oldValue >= max) { var newVal = oldValue; } else { var newVal = oldValue + 1; }
            spinner.find("input").val(newVal); spinner.find("input").trigger("change");
        }); btnDown.on('click', function () {
            var oldValue = parseFloat(input.val()); if (oldValue <= min) { var newVal = oldValue; } else { var newVal = oldValue - 1; }
            spinner.find("input").val(newVal); spinner.find("input").trigger("change");
        });
    }); $('.feedback-slides').owlCarousel({ loop: true, nav: true, dots: true, autoHeight: true, autoplayHoverPause: true, autoplay: true, mouseDrag: true, animateOut: 'fadeOut', items: 1, navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"], }); (function ($) { $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current'); $('.tab ul.tabs li a').on('click', function (g) { var tab = $(this).closest('.tab'), index = $(this).closest('li').index(); tab.find('ul.tabs > li').removeClass('current'); $(this).closest('li').addClass('current'); tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp(); tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown(); g.preventDefault(); }); })(jQuery); $('select').niceSelect(); (function ($) { $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current'); $('.tab ul.tabs li a').on('click', function (g) { var tab = $(this).closest('.tab'), index = $(this).closest('li').index(); tab.find('ul.tabs > li').removeClass('current'); $(this).closest('li').addClass('current'); tab.find('.tab-content').find('div.tabs-item').not('div.tabs-item:eq(' + index + ')').slideUp(); tab.find('.tab-content').find('div.tabs-item:eq(' + index + ')').slideDown(); g.preventDefault(); }); })(jQuery); function makeTimer() {
        var endTime = new Date("September 30,  2021 17:00:00 PDT"); var endTime = (Date.parse(endTime)) / 1000; var now = new Date(); var now = (Date.parse(now) / 1000); var timeLeft = endTime - now; var days = Math.floor(timeLeft / 86400); var hours = Math.floor((timeLeft - (days * 86400)) / 3600); var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60); var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60))); if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        $("#days").html(days + "<span>Days</span>"); $("#hours").html(hours + "<span>Hours</span>"); $("#minutes").html(minutes + "<span>Minutes</span>"); $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function () { makeTimer(); }, 1000); $(function () { $('.accordion').find('.accordion-title').on('click', function () { $(this).toggleClass('active'); $(this).next().slideToggle('fast'); $('.accordion-content').not($(this).next()).slideUp('fast'); $('.accordion-title').not($(this)).removeClass('active'); }); }); $(function () { $(window).on('scroll', function () { var scrolled = $(window).scrollTop(); if (scrolled > 300) $('.go-top').addClass('active'); if (scrolled < 300) $('.go-top').removeClass('active'); }); $('.go-top').on('click', function () { $("html, body").animate({ scrollTop: "0" }, 500); }); }); $('.odometer').appear(function (e) { var odo = $(".odometer"); odo.each(function () { var countNumber = $(this).attr("data-count"); $(this).html(countNumber); }); }); $('.projects-slides').owlCarousel({ loop: true, nav: true, dots: false, autoplayHoverPause: true, autoplay: true, mouseDrag: true, margin: 30, navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"], responsive: { 0: { items: 1, }, 576: { items: 2, }, 768: { items: 2, }, 1024: { items: 3, }, 1200: { items: 4, } } }); $('.testimonials-slides').owlCarousel({ loop: true, nav: false, dots: true, autoHeight: true, autoplayHoverPause: true, autoplay: true, mouseDrag: true, animateOut: 'fadeOut', items: 1, navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"], }); $('.partner-slides').owlCarousel({ loop: true, nav: false, dots: false, autoplayHoverPause: true, autoplay: true, mouseDrag: true, navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"], responsive: { 0: { items: 2, }, 576: { items: 3, }, 768: { items: 4, }, 1024: { items: 4, }, 1200: { items: 5, } } }); $('.home-slides').owlCarousel({ loop: true, nav: true, dots: false, autoplayHoverPause: true, autoplay: true, mouseDrag: true, animateOut: 'fadeOut', animateIn: 'fadeIn', items: 1, navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"] }); $(".home-slides").on("translate.owl.carousel", function () { $(".main-banner-content h1").removeClass("animated fadeInUp").css("opacity", "0"); $(".main-banner-content p").removeClass("animated fadeInDown").css("opacity", "0"); $(".home-slides .btn-box").removeClass("animated fadeInDown").css("opacity", "0"); }); $(".home-slides").on("translated.owl.carousel", function () { $(".main-banner-content h1").addClass("animated fadeInUp").css("opacity", "1"); $(".main-banner-content p").addClass("animated fadeInDown").css("opacity", "1"); $(".main-banner-content .btn-box").addClass("animated fadeInDown").css("opacity", "1"); }); $(window).on('load', function () { if ($(".wow").length) { var wow = new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 20, mobile: true, live: true, }); wow.init(); } }); $(window).on('load', function () { $('.preloader').addClass('preloader-deactivate'); });


    var positive = '<i class="fas fa-smile"></i>';
    var negative = '<i class="fas fa-angry"></i>';
    var neutral = '<i class="fas fa-meh"></i>';


    function resultHelper(data){
        var res = '<p class="r">';
        for( const x in data['nsfw']){
            if(data['nsfw'][x] == 'NOTSAFE'){
                res += '<span class="text-danger">'+ x +'</span> ';
            }else{
                res += x + ' ';
            }
        }
        res +='</p>';
        return res;
    }

    $('#submit-btn').click(function(e){
        e.preventDefault();
        var data = $('#input-text').val();
        
        if(data){
            $('#submit-btn').html('<i class="fa fa-spinner fa-spin"></i>Run It');
            $.ajax(
                {url : 'https://sudoai.tn/' + data,
                type : 'POST',
                crossDomain : true
                }

            ).done(function(d){
                $('#input-text').val("");
                $('#submit-btn').text('Run It');

                console.log(d);

                if(d['sa'] == 'Positiv'){
                    $('#result-sudoai').html(positive + resultHelper(d));
                }
                if(d['sa'] == 'Negative'){
                    $('#result-sudoai').html(negative + resultHelper(d));
                }
                if(d['sa'] == 'Neutral'){
                    $('#result-sudoai').html(neutral + resultHelper(d));
                }
                
            });
        }
        
    });
}(jQuery));