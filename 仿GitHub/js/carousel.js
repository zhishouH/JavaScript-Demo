// 图片切换效果

// 获取四个按钮节点
var pre = document.getElementById("pre")
var next = document.getElementById("next")
var start = document.getElementById("start")
var stop = document.getElementById("stop")

// 获取图片节点
var carouselPic = document.getElementById("carouselPic")

// 定义数组存放图片
var imgArr = ["images/lb (1).jpg", "images/lb (2).jpg", "images/lb (3).jpg", "images/lb (4).jpg", "images/lb (5).jpg",
  "images/lb (6).jpg", "images/lb (7).jpg", "images/lb (8).jpg", "images/lb (9).jpg"]
var index = 0
var timer

pre.onclick = function () {
  index--
  if (index < 0) {
    index = imgArr.length - 1
  }
  carouselPic.src = imgArr[index]
}

next.onclick = function () {
  index++
  if (index > imgArr.length - 1) {
    index = 0
  }
  carouselPic.src = imgArr[index]
}

start.onclick = function () {
  clearInterval(timer)
  timer = setInterval(function () {
    index++
    if (index > imgArr.length - 1) {
      index = 0
    }
    carouselPic.src = imgArr[index]
  }, 2000)
}

stop.onclick = function () {
  clearInterval(timer)
}