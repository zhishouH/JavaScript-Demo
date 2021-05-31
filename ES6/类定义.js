class Player {
  constructor(name, sex) {
    this.name = name
    this.sex = sex
  }
  show() {
    console.log(`${this.name}的性别是${this.sex}`)
  }
  static info() {
    console.log("这是一个球员类，你可以使用它建立自己的球员。")
  }
}

let player = new Player("梅西", "男")
console.log(player.name, player.sex)
player.show()
Player.info()