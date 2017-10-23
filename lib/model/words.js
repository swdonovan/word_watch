const $ = require('jquery')
const API = require('../config/api-url')

class Word {
  constructor() {
  }

  static topWord() {
    return $.get(API + "top_word")
  }
}

module.exports = Word
