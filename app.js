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
        this.render()
      console.log(game.prevGuesses)
      }
       
  },

  getGuess: function() {
    let guess = null;
    
    while (guess < this.smallestNum || guess > this.biggestNum) {
      guess = parseInt(prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`,));
    }
    //deal with NaN from non-number guess
  return guess
  },

  render: function() {
    let result = null;
    if (this.prevGuesses[this.prevGuesses.length-1] > this.secretNum) {
      result = `Your guess is too high. Previous guesses: ${this.prevGuesses.join("and")}`
    
    } else if (this.prevGuesses[this.prevGuesses.length-1] < this.secretNum) {
    result = (`Your guess is too low. Previous guesses: ${this.prevGuesses.join("and")}`)
    } else {
    result = (`Congrats! You guessed the number in ${this.prevGuesses.length} attempts!`) 
    }
    alert(result)
  }
  
}


game.play()

