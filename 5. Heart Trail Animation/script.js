const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove", (event) => {
  const xPosition = event.offsetX;
  const yPosition = event.offsetY;

  let newSpan = document.createElement('span');
  newSpan.style.left = xPosition + "px"
  newSpan.style.top = yPosition + "px"

  const size = Math.random() * 100;

  newSpan.style.width = size + "px";
  newSpan.style.height= size + "px";
  bodyEl.append(newSpan)

 setTimeout(()=>{
    newSpan.remove();
  }, 3000)

});


  function createHeart(){
    let hearts = document.createElement('div');
    hearts.style.left = Math.random() * 100 + "vw"
    hearts.style.animationDuration = Math.random() * 4 + 2 + "s"
    document.body.append(hearts)
    setTimeout(()=>{
      hearts.remove()
    }, 6000)
  }

  setInterval(createHeart, 100)

