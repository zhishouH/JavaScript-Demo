var box = document.getElementById("box");
//绑定鼠标移动事件
document.onmousemove = function (event) {
  /*获取到鼠标的坐标 */
  var left = event.clientX;
  var top = event.clientY;
  //设置div的偏移量
  box.style.left = left + (-20) + "px";
  box.style.top = top + (-20) + "px";
}