const navbarEl = document.getElementById("navbar")
const imageEl = document.querySelector(".image-content")
const paragraphEl = document.querySelector(".paragraph-container")

console.log(navbarEl.offsetHeight)

window.addEventListener("scroll", () => {
  if(window.scrollY > paragraphEl.offsetTop - navbarEl.offsetHeight - 50 ){
    navbarEl.classList.add("active")
  
  } else{
    navbarEl.classList.remove("active")
  }
})
