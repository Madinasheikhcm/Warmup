// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.


function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

function makeGame(upperbound){
	var object = {};
	
  object.upper=upperbound;
  object.rand=randInt(this.upper)
  object.counter=0;
return object;
}

  	guessMyNumber= function(n){
  		this.counter++;
	    if (this.n > this.upper) {
	      return "Out of bounds! Please try a number between 0 and " + this.upperbound + ".";
	    } else if this.n === this.rand) {
	      return "You guessed my number!";
	    }
	    return this."Nope! That wasn't it!";
  	}
  	giveUp = function(){
    	return this.rand;
  	}
  	numOfGuesses:function(){
    	return this.counter;
  	}
  }
