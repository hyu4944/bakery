$(document).ready(function(){

    var li = $('.section04_menuImg>li').width();
    var liM = li + 50;





    var i = 0;

    $(".section04_arrow_right").click(function(){
        i++;
        if(i > 3){
            i = 0;
        }
     

        $('.section04_menuImg').animate({
            marginLeft: -liM * i
        })
    })


    $(".section04_arrow_left").click(function(){
        i--;
        if(i < 0){
            i = 1
        }
        console.log(i);

        $('.section04_menuImg').animate({
            marginLeft: -liM * i
        })
    })

    $(window).resize(function(){
        li = $('.section04_menuImg>li').width();
        liM = li + 22.640
    })


    
})