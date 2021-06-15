
// create game object to call to UI file
const SCC = Object.create(null);

/*  returning element object representing the element
whose id property matches the specified string */

const el = (id) => document.getElementById(id);

const composition = el("composition");
//  User name HTML
const search_ship = el("ship");
const search_captain = el("captain");
const search_crew = el("crew");
//  searching the seas HTML
const fifth_dice = el("image5");
const fourth_dice = el("image4");
const third_dice = el("image3");
//  dice display on screen
const ship_pic = el ("ship-image");
const captain_pic = el ("captain-image");
const crew_pic = el ("crew-image");
// Collection Icon Pictures (left screen)


/* Below is Array that identifies the dice display number and the
dice roll number assigned to it:
id_names = { diceimageposition: dice roll number} */

var id_names = {
  // "image1": [6] ,
  // "image2": [6] ,
  // "image3": [6] ,
  // "image4" : [6] ,
  // "image5" :[6]
  };
console.log(composition.value);

/* update_six takes in a number and a returns an object with the same number of
 names, each assigned wtih a random dice roll */
const update_six = function(num){
  id_names= {};
  console.log(num);
  for (let i=1;i<num+1;i++){
    const random_int = Math.floor(Math.random() * 6) + 1;
    // produces Dice roll from 1 to 6
    id_names["image".concat(i.toString())] = random_int;
    console.log(random_int);
    };
    // assigns a dice roll to a new name "image_num"
  console.log(id_names);
return id_names
// returns an object of image names and dice values
};

/* dice roll takes in a number to be assigned to the
update six function. Redefining id_names allows the
return of the object's values in ascending order */
SCC.diceroll = function(num) {
  console.log(num);
  id_names=update_six(num);
  console.log(Object.values(id_names).sort());
  return Object.values(id_names).sort();
  // returns an array of dice roll numbers in ascending order
};

/* Update number takes each redefined array of ascending dice roll numbers
and reassigns the correct dice roll image to it so client views the
updated roll */
SCC.update_number = function(dicerollNumbers) {
  console.log(dicerollNumbers)
  for (let i=0; i<(dicerollNumbers.length); i++){
    /* for loop is iterated through the new length of the array
    which changes every round */
    document.getElementById("image"+ String(i+1)).setAttribute(
      "src", "dice_images/Dice_"+ String(dicerollNumbers[i]) +".png");
      // images taken from dice image file
  };
// new dice images display on screen
console.log(dicerollNumbers.length);
};

/* The total function takes in the final 2 dice numbers if
user wins, and returns the sum of the roll  */
SCC.total= (array) => {
  if (array.length>2){
    /* if the returned array is greater than 2 dice, the client has lost
    the game as a 4,5 and 6 is required to score
    which are sliced before checking*/
    array = [0,0];
  }
return array.reduce((a,b) => a+b,0);
// returns the 2 dice total
};

/* The three images functions change the HTML and add images to the
webpage. A message is displayed on the screen and the winning dice is
ressasigned as a blue dice with a picture. */

const ship_images = function () {
  search_ship.innerHTML = "FOUND SHIP!";
  console.log("You've found a Ship!");
  fifth_dice.setAttribute("src", "dice_images/blue_six.png");
  // The blue dice do not get reassigned once they are found as the array slices
  ship_pic.setAttribute("src", "dice_images/ship.png");
};

const captain_images = function() {
  search_captain.innerHTML = "FOUND CAPTAIN!";
  console.log("You've found a Captain!");
  fourth_dice.setAttribute("src", "dice_images/blue_five.png");
  captain_pic.setAttribute("src", "dice_images/captain.png");
};

const crew_images = function() {
  search_crew.innerHTML = "FOUND CREW - SET SAIL!!";
  console.log("You've found a Crew!");
  third_dice.setAttribute("src", "dice_images/blue_four.png");
  crew_pic.setAttribute("src", "dice_images/crew.png");
};

/* The filter function take in the array of dice roll numbers from the
diceroll function and checks the length of the dice. It slices the array
1 dice shorter each time a 6,5 and 4 are found at the right lengths.
Six found first, then five and four. */

SCC.filter = function(dice_set) {
    if (dice_set.length==5){
      if (dice_set.includes(6)){
        ship_images();
        // Displays success image and assigns blue six dice
        dice_set.splice(dice_set.indexOf(6),1);
        /* redefines the array as 1 index shorter to reassign
        a new dice re-roll */
      }};
    // Once six is found and length is shorter, checks for fives
      if (dice_set.length==4){
        if (dice_set.includes(5)){
          captain_images();
          // Displays success image and assigns blue five dice
          dice_set.splice(dice_set.indexOf(5),1);
      }
      }
      if (dice_set.length==3){
        if (dice_set.includes(4)){
          crew_images();
          // Displays success image and assigns blue five dice
          dice_set.splice(dice_set.indexOf(4),1);
      }}
      };


export default Object.freeze(SCC);
