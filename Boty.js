// ==UserScript==
// @name         Yandex Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  For yandex
// @author       Vladislav Petrov
// @match        https://yandex.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let keywords = ["список самых популярных русских шрифтов", "шрифт для печати, публикации, веб-разработки", "Helvetica, пожалуй, самый известный шрифт на планете"];
let keyword = keywords[getRandom(0, keywords.length)];
let links = document.links;
let yandexInput = document.getElementById("uniq16565284595181");

let btn = document.getElementsByClassName("websearch-button__text mini-suggest__button-text")[0];

if (btn !== undefined) {
   yandexInput.value = keyword;
   btn.click();
}else{
for (let i = 0; i < links.length; i++) {
if (links[i].href.includes("uspeh-woman.com")) console.log("Нашел строку " + links[i]);
}
}
function getRandom (min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}


