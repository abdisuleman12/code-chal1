$(document).ready(function(){

    
//Using jQuery, append a <div> element when you click the button.
    var counter = 0;
    $('#btn').on('click', function (){
        counter ++;
     $('.container').append('<div>' + '<p>' + counter + '</p>' + '<button id = "swapButton" > Swap </button>' + '<button id = "deleteButton" > Delete </button>' + '</div>')    
     });
     
 $('.container').on('click', '#deleteButton', function () {
    $(this).parent().remove();
 });

  $('.container').on('click', '#swapButton', function () {
    $(this).parent().css('background-color', 'yellow')
      
  });



 });
