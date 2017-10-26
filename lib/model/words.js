const $ = require('jquery')
const API = require('../config/api-url')
const Ajax = require('../helper/ajaxHelper')

class Word {
  constructor() {
  }

  static topWord() {
    return Ajax.getTopWord()
  }

  static breakDownText(text) {
    let words = []
    words = text.split(' ')
    let uniqueWords = {}

    // Promise is here so the previous event listener waits and make it wait
    // for the completion of this object
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
    return Ajax.addWord(inputWord)
  }
}

module.exports = Word
