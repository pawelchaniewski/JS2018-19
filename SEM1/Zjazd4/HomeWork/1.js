String.prototype.reverse = function() {
  return [...this].reverse().join(""); //remember to set empty separator for join() method!
};

// This WON'T WORK! (see: iffe and context)
// String.prototype.reverse = () => [...this].reverse().join();

console.log("mój stringi".reverse());
