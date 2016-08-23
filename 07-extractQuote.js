// Write a function named extractQuote that takes in one argument.
//   article (<article> DOM element)
//
// Assume the article contains a paragraph. For example:
//
//    <article>
//      <p>Neale Donald Walsch once said, "Life begins at the end of your
//      comfort zone." This is really important.</p>
//    </article>
//
// The function must check the paragraph for double quotes ("), extract it out,
// add it to the text of a <blockquote> element, and then replace the paragraph
// with that blockquote. For example, given the  above input, it must change the
// article as following:
//
//    <article>
//      <blockquote>"Life begins at the end of your comfort zone."</blockquote>
//    </article>
//
// No changes should be made if there's no quote.
//
// TIP: Assume that if there's an opening double quote, there's a closing
// double quote as well.

function extractQuote(article) {
  var text = $(article).children('p').text();
  if (text.indexOf("\"") > -1) {
    var start = text.indexOf("\"");
    var end = text.lastIndexOf("\"");
    var quote = text.slice(start, end+1);
    $(article).children('p').remove();
    $(article).append($('<blockquote></blockquote>').text(quote))
  }

}
