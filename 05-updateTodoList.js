// Define a function named updateTodoList that takes one argument.
//   todoList (<ul> DOM element)
//
// The function must iterate over its list items (<li>) and do the following:
//   * Remove items from the list if its text starts with "COMPLETED"
//   * Applies the "important" CSS class if its text starts with "URGENT".
//     TIP: Applying a CSS class means adding on top of what's already there.
//   * Make no change otherwise.

function updateTodoList(todoList) {
  $(todoList).children("li:contains('COMPLETED')").remove();
  $(todoList).children("li:contains('URGENT')").addClass('important');
}
