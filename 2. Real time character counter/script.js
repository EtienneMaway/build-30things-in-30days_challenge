const textareaEl = document.getElementById('textarea')

const totalCharacters = document.getElementById("total")
const remainingCharacters = document.getElementById("remaining")


textareaEl.addEventListener("keyup", () => {
  updateCounter()
})

// updateCounter()

function updateCounter(){
  totalCharacters.innerText = textareaEl.value.length;
  remainingCharacters.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}