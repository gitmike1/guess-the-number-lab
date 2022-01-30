const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  },

  getGuess: function(guessedNum) {
    let guess = Number(window.prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`, " ")); 
    let num = parseInt(guess)
    if (num >= this.smallestNum && num <= this.biggestNum) {
      return num
    } else {
      return NaN
    }
  }
}
// console.log(game.getGuess())

console.log(game.getGuess())