const imgContainer = document.getElementById('imgContainer')

const imgList = document.querySelectorAll('#imgContainer img')

let index = imgList.length;

function execute(){
  index++;

  if(index > imgList.length -1){
    index = 0
  }

  imgContainer.style.transform = `translateX(${-index * 500}px)`
}

setInterval(execute, 2000)