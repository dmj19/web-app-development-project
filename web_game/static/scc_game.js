import Image from "./image_functions.js";

// create SCC_game object to call to UI file
const SCC = Object.create(null);

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

/* update_six takes in a number and a returns an object with the same number of
 names, each assigned wtih a random dice roll */
SCC.update_six = function(num){
  id_names= {};
  for (let i=1;i<num+1;i++){
    const random_int = Math.floor(Math.random() * 6) + 1;
    // produces Dice roll from 1 to 6
    id_names["image".concat(i.toString())] = random_int;
    };
    // assigns a dice roll to a new name "image_num"
return id_names
// returns an object of image names and dice values
};

/* dice roll takes in a number to be assigned to the
update six function. Redefining id_names allows the
return of the object's values in ascending order */
SCC.diceroll = function(num) {
  id_names=SCC.update_six(num);
  return Object.values(id_names).sort();
  // returns an array of dice roll numbers in ascending order
};

/* Update number takes each redefined array of ascending dice roll numbers
and reassigns the correct dice roll image to it so client views the
updated roll */
SCC.update_number = function(dicerollNumbers) {
  for (let i=0; i<(dicerollNumbers.length); i++){
    /* for loop is iterated through the new length of the array
    which changes every round */
    document.getElementById("image"+ String(i+1)).setAttribute(
      "src", "dice_images/Dice_"+ String(dicerollNumbers[i]) +".png");
      // images taken from dice image file
  };
// new dice images display on screen
};


/* The filter function take in the array of dice roll numbers from the
diceroll function and checks the length of the dice. It slices the array
1 dice shorter each time a 6,5 and 4 are found at the right lengths.
Six found first, then five and four. */

SCC.filter = function(dice_set) {
    if (dice_set.length==5){
      if (dice_set.includes(6)){
        Image.ship_images();
        // Displays success image and assigns blue six dice
        dice_set.splice(dice_set.indexOf(6),1);
        /* redefines the array as 1 index shorter to reassign
        a new dice re-roll */
      }};
    // Once six is found and length is shorter, checks for fives
      if (dice_set.length==4){
        if (dice_set.includes(5)){
          Image.captain_images();
          // Displays success image and assigns blue five dice
          dice_set.splice(dice_set.indexOf(5),1);
      }
      }
      if (dice_set.length==3){
        if (dice_set.includes(4)){
          Image.crew_images();
          // Displays success image and assigns blue five dice
          dice_set.splice(dice_set.indexOf(4),1);
      }}
      };


export default Object.freeze(SCC);
