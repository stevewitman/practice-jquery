"use strict";
// Define a function named createTable that takes one argument.
//   data (array of arrays)
//
// The function must return a <table> DOM element that matches the structure of
// the input data. The first element in the data array is the <thead> data, the
// last element is the <tfoot> data, and the remaining elements form the <tbody>
// data. For example, given the following input:
//    [
//      ['a', 'b', 'c'],
//      ['d', 'e', 'f'],
//      ['g', 'h', 'i'],
//      ['j', 'k', 'l']
//    ]
//
// the function returns
//
// <table>
//   <thead>
//     <tr>
//       <th>a</th>
//       <th>b</th>
//       <th>c</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>d</td>
//       <td>e</td>
//       <td>f</td>
//     </tr>
//     <tr>
//       <td>g</td>
//       <td>h</td>
//       <td>i</td>
//     </tr>
//   </tbody>
//   <tfoot>
//     <tr>
//       <td>j</td>
//       <td>k</td>
//       <td>l</td>
//     </tr>
//   </tfoot>
// </table>
//
// TIP: Assume that data array has at least three elements.
// TIP: Assume that the elements of the data array are equal in length.

function createTable(data) {
  function get_row_head(table, row_data) {
    var row = document.createElement("tr");
    for (var j=0; j<row_data.length; j++) {
      var th = document.createElement("th");
      $(th).html(row_data[j]);
      $(row).append(th);
    }
    return row;
  }
  function get_row(table, row_data) {
    var row = document.createElement("tr");
    for (var j=0; j<row_data.length; j++) {
      var td = document.createElement("td");
      $(td).html(row_data[j]);
      $(row).append(td);
    }
    return row;
  }
  var table = document.createElement("table");
  $(table).append("<thead></thead>");
  $(table).children("thead").append(get_row_head(table, data[0]));
  $(table).append("<tbody></tbody>");
  for (var i = 1; i < data.length-1; i++) {
    $(table).children("tbody").append(get_row(table, data[i]));
  }
  $(table).append("<tfoot></tfoot>");
  $(table).children("tfoot").append(get_row(table, data[data.length-1]));
  return table;
}
