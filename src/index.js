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
    Word.breakDownText(text).then((data) => {
      let counter = 0
      for (var word in data) {
        if (data.hasOwnProperty(word)) {
          $wordCount.append("<p class='unique-word "
          + data[word] +
          "' style='font-size: " +
          data[word] +
          "em'>"  +
            word + '(' + data[word] + ')' +
            "</p>"
          )
        }
      }
    })
  })

  $('.text-submission').keypress((event) => {
    if (event.which == 13) {
      debugger;
        text = event.currentTarget.children[1].value
        Word.breakDownText(text).then((data) => {
          let counter = 0
          for (var word in data) {
            if (data.hasOwnProperty(word)) {
              $wordCount.append("<p class='unique-word "
              + data[word] +
              "' style='font-size: " +
              data[word] +
              "em'>"  +
              word + '(' + data[word] + ')' +
              "</p>"
            )
          }
        }
      })
    }
  })
})
