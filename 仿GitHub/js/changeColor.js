// 更改背景颜色效果

// 定义两个背景颜色变量
var color1 = "#fff"
var color2 = "#000"
// 获取按钮edit的id
var edit = document.getElementById('edit')

function changeColor(index) {
  // 改变背景颜色
  document.body.style.backgroundColor = index
  // 改变按钮edit的颜色
  if (index == color1) {
    edit.style.backgroundColor = "#F5F5F5"
  } else {
    edit.style.backgroundColor = "#000"
  }
} 