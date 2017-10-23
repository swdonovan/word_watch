const $ = require('jquery')
const Word = require('../lib/model/words')
const $topWord = $('.top-word')
const $wordCount = $('.word-count')

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

  $('.text-submission').on('click', 'button', () => {
    text = event.currentTarget.children[1].value
    debugger;
    Word.breakDownText(text).then((data) => {
    })
  })
})
