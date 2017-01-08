//segmented-cell click event (change page-view)
$('.segmented-cell').click(function(){
  if(!($(this).attr('selected')=='selected')){
    $(".segmented-cell[selected='selected']").removeAttr('selected');
    $(this).attr('selected','selected');
  }
});

//diary-card click event (open modal)
$('.diary-card').click(function(){
  $('body').on('scroll touchmove mousewheel', function(e) {
     e.preventDefault();
     e.stopPropagation();
     return false;
  });
  $('.modal-container').removeAttr('display');
});

//cancel button(in modal) click event (close modal)
$('.modal-cancel').click(function() {
  $('body').off('scroll touchmove mousewheel');
  $('.modal-container').attr('display','none');
});

//android back button event (close modal)
$('document').bind('keydown',function(event){
  if (event.keyCode == 27) {
    $('body').off('scroll touchmove mousewheel');
    $('.modal-container').attr('display','none');
    event.preventDefault();
  }
});

//get diary-card Entries
$('.tool-entries').html($('.diary-card').length+" Entries");

//swipe function
$('.page-view').on('swiperight',function(){
  if ($(this) == $('.page-view:nth-child(1)')) {
    //not paging
  }
  //지금의 nht-child값을 가지고와서 -1
});

$('page-view').on('swipeleft',function(){
  if ($(this) == $('.page-view:nth-last-child(1)')) {
    //not paging
  }
    //지금의 nht-child값을 가지고와서 +1
});
