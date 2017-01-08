$('.segmented-cell').click(function(){
  if(!($(this).attr('selected')=='selected')){
    $(".segmented-cell[selected='selected']").removeAttr('selected');
    $(this).attr('selected','selected');
  }
});

$('.diary-card').click(function(){
  $('body').on('scroll touchmove mousewheel', function(e) {
     e.preventDefault();
     e.stopPropagation();
     return false;
  });
  $('.modal-container').removeAttr('display');
});

$('.modal-cancel').click(function() {
  $('body').off('scroll touchmove mousewheel');
  $('.modal-container').attr('display','none');
});
