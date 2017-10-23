const $ = require('jquery')
const API = require('../config/api-url')

class Word {
  constructor() {
  }

  static topWord() {
    return $.get(API + "top_word")
  }

  static breakDownText(text) {
    let words = new Array
    words = text.split(' ')
    let uniqueWords = new Object

    return new Promise((resolve, reject) => {
      for (var i = 0; i < words.length; i++) {
        this.addWordApi(words[i])
        if (uniqueWords[words[i]] == undefined) {
          uniqueWords[words[i]] = 1
        } else {
          uniqueWords[words[i]]++
        }
      }
      resolve(uniqueWords)
    })
  }

  static addWordApi(inputWord) {
    return $.ajax({
      type: "POST",
      url: (API + "words"),
      dataType: "json",
      data: {word: { value: inputWord }},
    });
  }
}

module.exports = Word
