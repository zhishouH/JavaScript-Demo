function* myGenerator() {
  yield '我'
  yield '是'
  yield '黄'
  yield '智'
  yield '守'
}

for (let val of myGenerator()) {
  console.log(val)
}

function* countdown(begin) {
  while (begin > 0) {
    yield begin--
  }
}

for (let tmp of countdown(5)) {
  console.log(tmp)
}