// 图片闪烁效果

// 定义blink函数
function blink() {
  // 获取图片id
  var BigAvatar = document.getElementById("BigAvatar")
  // 条件判断
  if (BigAvatar.style.display == "none") {
    BigAvatar.style.display = "block"
  } else {
    BigAvatar.style.display = "none"
  }
}
// 定时器
setInterval("blink()", 600)