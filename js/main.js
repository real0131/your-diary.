$('.segmented-cell').click(function(){
  if(!($(this).attr('selected')=='selected')){
    $(".segmented-cell[selected='selected']").removeAttr('selected');
    $(this).attr('selected','selected');
  }
});
