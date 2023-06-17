const imgContainer = document.getElementById('imgContainer');

const img = document.querySelector('img')

imgContainer.addEventListener("mousemove", (e) => {
  let x = e.clientX - e.target.offsetLeft
  let y = e.clientY - e.target.offsetTop

  img.style.transformOrigin = `${x}px ${y}px`
  img.style.transform = "scale(2)"
})

imgContainer.addEventListener("mouseleave", () => {
  img.style.transform = "scale(1)"
})


