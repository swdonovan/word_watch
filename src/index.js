const $ = require('jquery')
const Word = require('../lib/models/words')
const $topWord = $('.top-word')
document.addEventListener("DOMContentLoaded", () => {
  Word.topWord.then((data) => {
    debugger;
    #topWord.append('<p> Top Word')
  }
})
