snowball-stemmer.jsx
===========================================

[![Build Status](https://travis-ci.org/shibukawa/snowball-stemmer.jsx.png)](https://travis-ci.org/shibukawa/snowball-stemmer.jsx)

Synopsis
---------------

This is a collection of stemmers for JSX/JS/AMD/Common.js.

Motivation
---------------

Stemming is an important algorithm for implementing search engines. These code are genereated from famous stemming algorithm collection,
[Snowball](http://snowball.tartarus.org/index.php) and the result is completely compatible with it.

* Original: http://snowball.tartarus.org/index.php
* Generator: https://github.com/shibukawa/snowball

Code Example
---------------

### Use from JSX

```js
import "english-stemmer.jsx";

class _Main {
    static function main(argv : string[]) : void
    {
        var stemmer = new EnglishStemmer();
        log stemmer.stemWord("baby"); // babi
    }
}
```

### Use from node.js

```js
var FrenchStemmer = require('snowball-stemmer.jsx/dest/french-stemmer.common.js').FrenchStemmer;
```

### Use from require.js

```js
// use snowball-stemmer.amd.js
define(['german-stemmer.jsx'], function (germanstemmer) {

    var stemmer = new germanstemmer.GermanStemmer();
});
```

### Use via standard JSX function

```html
<script src="spanish-stemmer.js" type="text/javascript"></script>
<script type="text/javascript">
window.onload = function () {
    var SpanishStemmer = JSX.require("lib/spanish-stemmer.js").SpanishStemmer;
    var stemmer = new SpanishStemmer();
});
</script>
```

### Use via global variables

```html
<script src="snowball-stemmer.global.js" type="text/javascript"></script>
<script type="text/javascript">
window.onload = function () {
    var RussianStemmer = new RussianStemmer();
    var stemmer = new RussianStemmer();
});
</script>
```

Installation
---------------

```sh
$ npm install snowball-stemmer.jsx
```

If you want to use this library from other JSX project, install like the following:

```sh
$ npm install snowball-stemmer.jsx --save-dev
```

or add like these lines to your parent project's `package.json`:

```js
   devDependencies: {
       "snowball-stemmer.jsx": "~0.2.0"
   },
   peerDepenencies: {
       "snowball-stemmer.jsx": "~0.2.0"
   }
```

And add `node_modules/snowball-stemmer.jsx/src` as a search path.
You should add to `peerDepenencies` if your product is library.

API Reference
------------------

### Stemmer Classes

This module provides following stemmers:

* `DanishStemmer`
* `DutchStemmer`
* `EnglishStemmer`
* `FinnishStemmer`
* `FrenchStemmer`
* `GermanStemmer`
* `HungarianStemmer`
* `ItalianStemmer`
* `NorwegianStemmer`
* `PorterStemmer`
* `PortugueseStemmer`
* `RomanianStemmer`
* `RussianStemmer`
* `SpanishStemmer`
* `SwedishStemmer`
* `TurkishStemmer`

### Stemmer#stemWord(word : string) : string

Returns stemmed word.

### Stemmer#stemWords(words : string[]) : string[]

Returns multiple stemmed words.

Development
-------------

## JSX

Don't be afraid [JSX](http://jsx.github.io)! If you have an experience of JavaScript, you can learn JSX
quickly.

* Static type system and unified class syntax.
* All variables and methods belong to class.
* JSX includes optimizer. You don't have to write tricky unreadalbe code for speed.
* You can use almost all JavaScript API as you know. Some functions become static class functions. See [reference](http://jsx.github.io/doc/stdlibref.html).

## Setup

To create development environment, call following command:

```sh
$ npm install
```

## Repository

* Repository: git://github.com/shibukawa/snowball-stemmer.jsx.git
* Issues: https://github.com/shibukawa/snowball-stemmer.jsx/issues

## Run Test

```sh
$ grunt test
```

## Build

```sh
$ grunt build
```

## Generate API reference

```sh
$ grunt doc
```

Author
---------

* shibukawa / yoshiki@shibu.jp

License
------------

MIT

Complete license is written in `LICENSE.md`.
