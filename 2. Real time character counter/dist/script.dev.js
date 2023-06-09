"use strict";

var textareaEl = document.getElementById('textarea');
var totalCharacters = document.getElementById("total");
var remainingCharacters = document.getElementById("remaining");
textareaEl.addEventListener("keyup", function () {
  updateCounter();
});
updateCounter();

function updateCounter() {
  totalCharacters.innerText = textareaEl.value.length;
  remainingCharacters.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}