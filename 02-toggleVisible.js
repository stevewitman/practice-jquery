// Define a function named toggleVisible that takes in one argument.
//   div (<div> DOM element)
//
// The function will add the 'visible' class to the div if it does not currently
// have it. It removes the class if it already exists.

// function toggleVisible(div) {
//   if ($(div).hasClass('visible')) {
//     $(div).removeClass('visible')
//   } else {
//     $(div).addClass('visible')
//   }
// }
//
function toggleVisible(div) {
  $(div).toggleClass('visible')
}
