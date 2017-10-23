const $ = require('jquery')
const Word = require('../lib/model/words')
const $topWord = $('.top-word')

document.addEventListener("DOMContentLoaded", () => {
  Word.topWord().then((data) => {
    debugger;
    $topWord.append('<h4> Top Word:' + Object.keys(data.word)[0] + '</h4>')
  })
})
