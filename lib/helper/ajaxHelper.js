const $ = require('jquery')
const API = require('../config/api-url')


class AjaxHelper {
  constructor() {
  }

  static getTopWord() {
    return $.get(API + "top_word")
  }

  static addWord(inputWord) {
    return $.ajax({
      type: "POST",
      url: (API + "words"),
      dataType: "json",
      data: {word: { value: inputWord }},
    });
  }
}

module.exports = AjaxHelper
