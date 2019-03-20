
// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
		var x = "";
		for (var i = 0; i < n; i++ ) {
		     x = x + s
		}
		return x;
	}