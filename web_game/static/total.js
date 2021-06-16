const Total = Object.create(null);


/* The total function takes in the final 2 dice numbers if
user wins, and returns the sum of the roll  */
Total.total = function (arrray) {
    if (arrray.length > 2) {
      /* if the returned array is greater than 2 dice, the client has lost
      the game as a 4,5 and 6 is required to score
      which are sliced before checking*/
        arrray = [0];
    }
    return arrray.reduce((a, b) => a + b, 0);
  // returns the 2 dice total
};


export default Object.freeze(Total);
