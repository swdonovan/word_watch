const $ = require('jquery')
const Word = require('../lib/model/words')
const $topWord = $('.top-word')
const $textSubmission = $('.text-submission')

document.addEventListener("DOMContentLoaded", () => {
  Word.topWord().then((data) => {
    $topWord.append('<h4> Top Word: ' +
      Object.keys(data.word)[0] +
      " (" +
      data.word[Object.keys(data.word)] +
      ")" +
      '</h4>'
    )
  })

  $($textSubmission).on('click', 'button', () => {
    debugger;
  })
})
