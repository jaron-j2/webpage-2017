$(document).ready(function() {

  $('.carousel').carousel("pause")

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
});


