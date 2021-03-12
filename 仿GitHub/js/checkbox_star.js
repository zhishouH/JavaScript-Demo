// 复选框效果

// 获取复选框的id
var star1 = document.getElementById("star1")
star1.onclick = function () {
  if (star1.checked) {
    alert("确定为Vue.js这个仓库点赞吗?")
  } else {
    alert("取消为Vue.js这个仓库点赞吗?")
  }
}

var star2 = document.getElementById("star2")
star2.onclick = function () {
  if (star2.checked) {
    alert("确定为javascript这个仓库点赞?")
  } else {
    alert("取消为javascript这个仓库点赞?")
  }
}
var star3 = document.getElementById("star3")
star3.onclick = function () {
  if (star3.checked) {
    alert("确定为HTML-CSS这个仓库点赞?")
  } else {
    alert("取消为HTML-CSS这个仓库点赞?")
  }
}
var star4 = document.getElementById("star4")
star4.onclick = function () {
  if (star4.checked) {
    alert("确定为CSS3这个仓库点赞?")
  } else {
    alert("取消为CSS3这个仓库点赞?")
  }
}
var star5 = document.getElementById("star5")
star5.onclick = function () {
  if (star5.checked) {
    alert("确定为Java这个仓库点赞?")
  } else {
    alert("取消为Java这个仓库点赞?")
  }
}