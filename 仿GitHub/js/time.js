// 倒计时效果

var now = document.getElementById("now");
var countdown = document.getElementById("countdown")
function fill(i) {
  if (i < 10) {
    return "0" + i;
  }
  return i;
}
function nowTime() {
  setTimeout("nowTime()", 1000)
  var nowtime = new Date;
  var year = nowtime.getFullYear()
  var month = nowtime.getMonth() + 1;
  var date = nowtime.getDate()
  var day = nowtime.getDay();
  var week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
  var hours = fill(nowtime.getHours());
  var min = fill(nowtime.getMinutes());
  var sec = fill(nowtime.getSeconds())
  now.innerHTML = year + "年" + month + "月" + date + "日" + "&nbsp&nbsp&nbsp" + week[day] + "&nbsp&nbsp&nbsp" + hours + "时" + min + "分" + sec + "秒"
}
setTimeout("nowTime()", 0)

function Countdown() {
  setTimeout("Countdown()", 1000)
  var nowtime = new Date();
  var plan = new Date("2021/12/31")
  var lefttime = plan - nowtime;
  var day = Math.floor(lefttime / (1000 * 60 * 60 * 24))
  var hours = Math.floor(lefttime / (1000 * 60 * 60) % 24)
  var min = Math.floor(lefttime / (1000 * 60) % 60)
  var sec = Math.floor(lefttime / (1000) % 60)
  countdown.innerHTML = "距离2021/12/31" + "&nbsp&nbsp&nbsp" + "还剩" + day + "天" + hours + "小时" + min + "分钟" + sec + "秒"
}
setTimeout("Countdown()", 0)