const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    let num = null
      while (num !== this.secretNum) {
        let num = this.getGuess()
      this.prevGuesses.push(num)
      console.log(game.prevGuesses)
      }
  },

  getGuess: function() {
    let guess = parseInt(prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`,)); 
    //console.log(typeof guess)
    //let num = parseInt(guess)
    //console.log(typeof num)
    while (guess < this.smallestNum || guess > this.biggestNum) {
      guess = parseInt(prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`,));
    }
    //deal with NaN from non-number guess
  return guess
  console.log("validInput")
  }
}
 //console.log(game.getGuess())
game.play()
