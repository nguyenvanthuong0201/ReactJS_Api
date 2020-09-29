$(document).ready(function () {
  $(".icon").hide();
  $(window).scroll(function () {
    var vitri = $("body,html").scrollTop();
    if(vitri > 100){
        $(".icon").addClass("onTop");
        $(".icon").show();

    }
    else{
        $(".icon").removeClass("onTop");
        $(".icon").hide();
    }
  });
  $(".icon").click(function () {
    $("html,body").animate({scrollTop:0},500)
});
});
