var PorterStemmer = require('./porter-stemmer.common.js').PorterStemmer;

var stemmer = new PorterStemmer();
console.log(stemmer.stemWord("baby"));
