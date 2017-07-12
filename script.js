$(document).ready(function() {

  $('.carousel').carousel('pause');

  $("#expandSkill").click(function(){
    $("#moreSkill").slideToggle("slow");
  });

  $("#expandSkill").on({
    'click': function() {
     var src = ($(this).attr('src') === 'img/expand-icon.png')
     ? 'img/collapse-icon.png'
     : 'img/expand-icon.png'
     $(this).attr('src', src);
    }
  });

  $("#expandMarket").click(function(){
    $(".more-market").slideToggle(1500);
  });

  $("#expandMarket").on({
    'click': function() {
     var src = ($(this).attr('src') === '../img/expand-icon.png')
     ? '../img/collapse-icon.png'
     : '../img/expand-icon.png'
     $(this).attr('src', src);
   }
  });

  $("#expandDesign").click(function(){
    $(".more-design").slideToggle(1000);
  });

  $("#expandDesign").on({
    'click': function() {
     var src = ($(this).attr('src') === '../img/expand-icon.png')
     ? '../img/collapse-icon.png'
     : '../img/expand-icon.png'
     $(this).attr('src', src);
    }
  });
});


