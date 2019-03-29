This is a sample NPM module created in "Learn Enough Javascript to be Dangerous" by Michael Hartl.

The module can be used as follows:

  $ npm install --global glarkin-palindrome
  $ vim test.js
  let Phrase = require("glarkin-palindrome");
  let napoleansLament = new Phrase("Able was I, ere I saw Elba.");
  console.log(napoleansLament.palindrome());
  $ node test.js
  true
