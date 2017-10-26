const $ = require('jquery')
const Word = require('../lib/model/words')
const $topWord = $('.top-word')
const $wordCount = $('.word-count')
const HtmlRunner = require('../lib/helper/HtmlRunner')
const WordRunner = require('../lib/WordsRunner')

document.addEventListener("DOMContentLoaded", () => {
  WordsRunner();
})
