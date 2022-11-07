$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    //show back to top
    if(scrolling >300){
        $('.down-top').fadeIn();
    }
    else{
        $('.down-top').fadeOut();
    }
    //fiexd menu 
    if(scrolling > 200){
        $('.navigation-part').addClass("menu-fixed");
    }
    else{
        $('.navigation-part').removeClass("menu-fixed");
    }
})