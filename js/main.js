var calendarIndex = 2;

//segmented-cell click event (change page-view)
$('.segmented-cell').click(function(){
  if(!($(this).attr('selected')=='selected')){
    $(".segmented-cell[selected='selected']").removeAttr('selected');
    $(this).attr('selected','selected');
    segmented_paging($(this));
  }
});

//segmented-control paging
function segmented_paging(target){
  //TODO:add animation
  $(".page-view[display='show']").removeAttr('display');
  $('.page-view:nth-child('+(target.index()+1)+')').attr('display','show');
  if ((target.index()+1)==calendarIndex) {
    stopScroll();
  }else {
    startScroll();
  }
}

function stopScroll(){
  $('body').on('scroll touchmove mousewheel', function(e) {
     e.preventDefault();
     e.stopPropagation();
     return false;
  });
}

function startScroll(){
  $('body').off('scroll touchmove mousewheel');
}

//diary-card click event (open modal)
$('.diary-card').click(function(){
  $('body').css('overflow-y','hidden');
  $('.modal-container').removeAttr('display');
});

//cancel button(in modal) click event (close modal)
$('.modal-cancel').click(function() {
  $('body').css('overflow-y','initial'); //change overflow property default (to visible)
  $('.modal-container').attr('display','none');
});

//get diary-card Entries
$('.tool-entries').html($('.diary-card').length+" Entries");

/*//android back button event (close modal)
$('document').bind('keydown',function(event){
  if (event.keyCode == 27) {
    $('body').off('scroll touchmove mousewheel');
    $('.modal-container').attr('display','none');
    event.preventDefault();
  }
});*/

/*//swipe function
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
});*/

//set calendar date(to today)
function setCalendar(){

}

//set color theme (taki: #67b5e6, mitsuha: #)
function setColorTheme(){

}
