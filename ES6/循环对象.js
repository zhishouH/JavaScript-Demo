let list = [10, 20, 30]
let mystr = '站在巨人的肩膀上'
let mymap = new Map()
mymap.set('JS', 'JavaScript')
mymap.set('PL', 'Perl')
mymap.set('PY', 'Python')

for (let val of list) {
  console.log(val)
}

for (let val of mystr) {
  console.log(val)
}

for (let [key, value] of mymap) {
  console.log(key, value)
}

let it = mymap.values()
let tmp
while (tmp = it.next()) {
  if (tmp.done) break
  // console.log(tem.value, tem.done)
  console.log(tmp)
}