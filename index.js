//Adds 'reverse' method to all strings, not just arrays
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}
//Adds 'blank' method to all strings, returns true if string is blank or entirely made up of white-space characters
String.prototype.blank = function () {
  return this.split(/\S+/).length === 1;
}

//returns last item in an array
Array.prototype.last = function () {
  return this[this.length - 1];
}

//Defining a Phrase object
function Phrase(content) {
  this.content = content;

this.processor = function(string) {
  return string.toLowerCase();
}

this.processedContent = function processedContent() {
  return this.processor(this.content);
}

/*
  //Returns content ready for palindrome processing
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }
*/
  //Returns true if palindrome, false if not palindrome
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
    }

  //Returns ALL CAPS version of string, method
  this.louder = function louder() {
    return this.content.toUpperCase();
  }
  //Returns all lowercase version of string
  this.softer = function softer() {
    return this.content.toLowerCase();
  }

}


//Defines a TranslatedPhrase object
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  //Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();


/*Original Palindrome function, not Case-sensitive
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}
//Original louder function, not nested within object
function louder(string) {
  return string.toUpperCase();
}
*/
