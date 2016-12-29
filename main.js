// Mouse Follows Mouse
//
// Google and find a picture of a mouse. Create a webpage using, HTML and javascript/jQuery, where the position of the mouse-picture matches the poisition of the mouse pointer.
// Bonus
//
// Two possible extensions for you.
// Rather than snap into place, have mouse-picture move over time towards the location of the the mouse-pointer.
// Rotate the mouse-picture so it faces the mouse pointer it is moving towards.
$(document).mousemove(function(e){
    $("#mouse").css({left:e.pageX, top:e.pageY});
});
//jQuery normalizes the .pageX and .pageY properties so that they can be used in all browsers. These properties provide the X and Y coordinates of the mouse pointer relative to the top-left corner of the document.
//optimize mouse move -> drains the browser
//As the .mousemove() method is just a shorthand for .on( "mousemove", handler ), detaching is possible using .off( "mousemove" ).
