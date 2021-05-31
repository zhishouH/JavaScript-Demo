class Player {
  constructor(name, sex) {
    this.name = name
    this.sex = sex
  }
  get age() {
    return this.Age
  }
  set age(val) {
    this.Age = val
  }
}
let player = new Player("梅西", "男")
player.age = 28
console.log(player)
console.log(player.age)