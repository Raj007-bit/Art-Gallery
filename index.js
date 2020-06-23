$(".scrollToTop").fadeOut();
$(".alert").hide();
 $(".btn-lg").click(function(){
  $(".alert").slideToggle();
});
$(".price").hide();

$(".team-caption").hide();
$(".team-img1").on("mouseover", function(){
    $(".team-caption").slideDown();
});
$("#footer").on("mouseover", function(){
    $(".team-caption").slideUp();
});

var noOfButton= $(".Buy").length;
  for( var i=0;i<noOfButton;i++){
  $(".Buy")[i].addEventListener("click",function (){
  $(".price").slideToggle();
})};




    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() >100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
