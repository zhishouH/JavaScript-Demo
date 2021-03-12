// 二级菜单效果

// 展示
function show(obj) {
  var menu = obj.getElementsByTagName("ul")
  menu[0].style.display = "block"
}

// 隐藏
function hide(obj) {
  var menu = obj.getElementsByTagName("ul")
  menu[0].style.display = "none"
}