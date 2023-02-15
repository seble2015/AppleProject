
$(document).ready(function () {
  $(".footer-links-wrapper h3").on("click", function () {
    if ($(window).width() <= 768) {
      $(this).next("ul").slideToggle();
      $(this).toggleClass("expanded");
    }
  });
  $(window).on ("resize", function(){
  location.reload()
  })
});

















































// Features on mobile size devices:
// ● Each of the five columns collapse to a single column. Make these columns collapse to
// a single column.
// ● All the sub-links under each <h3> are hidden. Hide these sub-links
// ● There is also a newly added "+" sign on the right side of each <h3> to trigger the
// expansion of the sub-links upon onclick event. Add the added "+" sign on the right
// side of each <h3>. (Hint: everything up to this point can be achieved without using
// any JavaScript at all. Bootstrap and CSS would be enough to achieve these).
// ● When users click on the "+" sign, the hidden sub-links under the respective <h3>
// slide down and show. Then the "+" sign changes to the "x" sign. (Hint: Use jQuery to
// implement the following feature)
// ● When users click on the "+" sign, the sub-links slide up and get hidden. Note: this
// interactivity only happens on mobile size devices. (Hint: Use jQuery to implement
// the following feature)


//  $("h3").on("click", function () {
//    if ($(window).innerWidth() <= 768) {
//      if ($(this).next(".footer-links-wrapper ul").fadeToggle()) {
//        $(this).toggleClass("expanded");
//      }
//    }
//  });



























// $("row footer-links-wrapper");javascript

// $(document).ready(function() {
//   $('h3').on('click', function() {
//     if ($(window).width() <= 768) {
//       $(this).next(".footer-links-wrapper ul").slideToggle();
//       $(this).text() === "\f107"
//       if ($(this).children(':first').text() === "+") {
//         $(this).children(':first').text("x");
//       } else {
//         $(this).children(':first').text("+");
//       }
//     }
//   });
// });

// $(document).ready(function() {
//   $('h3').on('click', function() {
//     if ($(window).width() <= 768) {
//       $(this).next(".footer-links-wrapper ul").slideToggle();
//       $(this).text() === "\f107"
//       if ($(this).children(':first').text() === "+") {
//         $(this).children(':first').text("x");
//       } else {
//         $(this).children(':first').text("+");
//       }
//     }
//   });
// });








// $("h3").on("click", function () {
//   if ($(window).width() <= 768) {
//     $(this).next(".footer-links-wrapper ul").slideToggle();
//   }else{
//     $("h3").classList.add(".footer-links-wrapper h3.expanded:after")
//   }
// });

// $(document).ready(function () {
//   $("h3").on("click", function () {
//     if ($(window).width() <= 768) {
//       $(this).next(".footer-links-wrapper ul").slideToggle();
//       $(this).slideToggle();
//       $(this).toggleClass("expanded");
//     }
//   });
// });



// $(document).ready(function () {...}: This line wraps the entire code inside a function that runs when the document is ready.

// $("h3").on("click", function () {...}: This line sets up an event handler for a click event on all elements with the tag "h3". When a "h3" element is clicked, the function inside the curly braces will be executed.

// if ($(window).width() <= 768) {...}: This line checks the width of the window. If the width of the window is less than or equal to 768 pixels, the code inside the if statement will run.

// $(this).next(".footer-links-wrapper ul").slideToggle(): This line uses the jQuery next() method to find the next sibling element with the class "footer-links-wrapper ul" and toggle its visibility by sliding it up or down using the slideToggle() method.

// $(this).toggleClass("expanded"): This line uses the jQuery toggleClass() method to toggle the class "expanded" on the clicked "h3" element.

// }: This is the closing curly brace for the if statement.

// });: This is the closing curly brace for the event handler.