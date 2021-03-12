// 跑马灯颜色走动

// 获取元素节点的文本
var text = document.getElementById('text').innerText
var i = 0
var speed = 10
function changColor() {
  var str = text.substring(0, i)
  str += "<font color = 'red'>" + text.charAt(i) + "</font>"
  str += text.substring(i + 1, text.length)
  if (i++ == text.length) {
    i = 0
  }
  document.getElementById('text').innerHTML = str
}

// 定时器
setInterval('changColor()', 1000 / speed)