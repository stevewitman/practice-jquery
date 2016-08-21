// Define a function named checkAll that takes in one argument
//   checkbox (<input type="checkbox"> DOM element).
//
// The function will check all of its sibling checkboxes if the input checkbox
// is checked.

function checkAll(checkbox) {
  if ($(checkbox).prop('checked')) {
    $(checkbox).siblings().prop('checked', true);
  }
}
