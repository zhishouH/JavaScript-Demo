// 选项卡效果

// 获取节点
var tabList = document.getElementById("tab-list")  // 获取tab-list
var aLis = tabList.getElementsByTagName("li")  // 获取tab-list下的li
var tDiv = document.getElementById("tDiv")  // 获取选项卡的id
var contents = tDiv.getElementsByTagName("div")  // 获取选项卡下面的子div

for (var i = 0; i < aLis.length; i++) {
  aLis[i].index = i
  aLis[i].onclick = function () {
    for (var j = 0; j < aLis.length; j++) {
      aLis[j].className = ''
    }
    this.className = "tab-active"

    for (var j = 0; j < contents.length; j++) {
      contents[j].className = "tab-content tab-content-hide"
    }
    contents[this.index].className = "tab-content tab-content-show"
  }
}