// Define a function named hasClass that takes in two arguments.
//   element   (Any DOM element)
//   className (String)
//
// The function will return true if the element has the specified className CSS
// class applied.

function hasClass(ele, className) {
  return $(ele).hasClass(className);
}
