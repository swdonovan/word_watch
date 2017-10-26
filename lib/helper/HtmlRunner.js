const $ = require('jquery')
const $topWord = $('.top-word')
const $wordCount = $('.word-count')



class HtmlRunner {
  constructor() {

  }

  static appendTopWord(data) {
    ;
    $topWord.append('<h4> Top Word: ' +
      Object.keys(data.word)[0] +
      " (" +
      data.word[Object.keys(data.word)] +
      ")" +
      '</h4>'
    )
  }

  static appendUniqueWord(data, word) {
    ;
    return $wordCount.append("<p class='unique-word "
      + data[word] +
      "' style='font-size: " +
      data[word] +
      "em'>"  +
      word + '(' + data[word] + ')' +
      "</p>"
    )
  }
}

module.exports = HtmlRunner
