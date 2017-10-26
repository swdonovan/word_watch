const $ = require('jquery')
const Word = require('../lib/model/words')
const $topWord = $('.top-word')
const $wordCount = $('.word-count')
const HtmlRunner = require('../lib/helper/HtmlRunner')

Word.topWord().then((data) => {
  HtmlRunner.appendTopWord(data)
})

$('.text-submission').on('click', 'button', () => {
  text = event.currentTarget.children[1].value
  Word.breakDownText(text).then((data) => {
    for (let word in data) {
      if (data.hasOwnProperty(word)) {
        HtmlRunner.appendUniqueWord(data, word);
      }
    }
  })
})

$('.text-submission').keypress((event) => {
  if (event.which == 13) {
      text = event.currentTarget.children[1].value
      Word.breakDownText(text).then((data) => {
        for (let word in data) {
          if (data.hasOwnProperty(word)) {
            HtmlRunner.appendUniqueWord(data)
        }
      }
    })
  }
})
