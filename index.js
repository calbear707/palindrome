//Export Phrase object so that it can be used in other files
module.exports = Phrase;

//Adds 'reverse' method to all strings, not just arrays
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

/*/Adds 'leters' method to all strings
String.prototype.letters = function() {
  return
}
*/

//Defining a Phrase object
function Phrase(content) {
  this.content = content;

  //Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  //Returns the letters in the content.
  this.letters = function letters() {
  return (this.content.match(/[a-z]/gi) || []).join("");
}

  //Returns true if palindrome, false if not palindrome
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
    }
}
