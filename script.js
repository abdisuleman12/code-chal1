$(document).ready(function(){

    counter = 0
//Using jQuery, append a <div> element when you click the button.
    $('#btn').on('click', function (){
     $('body').append("<div></div>") 
    $('div').append('<p> button was clicked</p> ', counter)
    counter++
    
     });
     

});
