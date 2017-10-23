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

    debugger;
    return new Promise((resolve, reject) => {
      for (var i = 0; i < words.length; i++) {
        if (uniqueWords[words[i]] == undefined) {
          uniqueWords[words[i]] = 1
        } else {
          uniqueWords[words[i]]++
        }
      }
    })
  }
}

module.exports = Word
