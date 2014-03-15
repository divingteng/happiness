$(".happiness").css("background", "url(images/earth/Happiness_On.png) no-repeat");

$(".happiness").click(function() {
  $("#earth").css("background", "url(images/earth/happiness.jpg) no-repeat");
});
$(".gdp").click(function() {
  $("#earth").css("background", "url(images/earth/GDP.jpg) no-repeat");
});
$(".healthy").click(function() {
  $("#earth").css("background", "url(images/earth/health.jpg) no-repeat");
});
$(".freedom").click(function() {
  $("#earth").css("background", "url(images/earth/freedom.jpg) no-repeat");
});
$(".generosity").click(function() {
  $("#earth").css("background", "url(images/earth/generosity.jpg) no-repeat");
});
$(".social").click(function() {
  $("#earth").css("background", "url(images/earth/social_support.jpg) no-repeat");
});
$(".corruption").click(function() {
  $("#earth").css("background", "url(images/earth/corruption.jpg) no-repeat");
});

// hourse
$(".city").click(function(e) {
  $(".line").removeClass("active");
  $(".number").removeClass("visible");

  var name = ".line." + $(e.target).attr("class").split(" ")[1];
  var targetLine = $(name);
  targetLine.addClass("active");
  targetLine.children().addClass("visible");
});
