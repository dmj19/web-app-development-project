// const game_yahtzee = Object.create(null);


// /// Initial Programming Toolkit, From examples

// const identity = (x) => x;

// const map = (map_function) => (array) => array.map(map_function);
// //maps function to each item in array

// const every = (predicate) => (array) => array.every(predicate);
// //applies item to every item in array

// const any = (predicate) => (array) => array.some(predicate);

// const zip = (f) => (arrays) => (arrays).map((args) => f(...args));

// const including = (x) => (array) => array.includes(x);


// const curry_flatmap= (func) => (array) => array.flat_map(func);

// const rest = (array) => array.slice(1, array.length);

// const pipe = (...fs) => (...args) => rest(fs).reduce(
//     (a, f) => f(a),
//     fs[0](...args)
// );
// //Pipe function combines n function //
// //calling each function with the output of the last one//

// const dice_set= []; //empty array to fill with rolls
// const random_int = Math.floor(Math.random() * 6)+1; //generatesroll from 1-6

// const selected_dice_set=[]

// //Dice roll numbers:
// const dice_roll_change = function() {
//     Dice_One_numbers= "dice_images/Dice_"+random_int+".png";
//     Dice_Two_numbers= "dice_images/Dice_"+random_int+".png";
//     Dice_Three_numbers= "dice_images/Dice_"+random_int+".png";
//     Dice_Four_numbers= "dice_images/Dice_"+random_int+".png";
//     Dice_Five_numbers= "dice_images/Dice_"+random_int+".png";
// }

// // const dice_roll = ("ROLLDICEBUTTON") =>  dice_set.push(random_int(6));
// const fill_dice_set= ("ROLLDICEBUTTON"); {
//     for (var i=0; i<(6-dice_set.length); i++) {
//         // dice_roll("ROLLDICEBUTTON")
//         dice_set.push(random_int(6));
//     };
//     return dice_set
// }






// const full_house_counter; {




//SELECTING DICE IMAGES

// var dice_one_images= "image/Dice_"+dice_roll+".png"

// document.querySelector('.img1').setAttribute('src',dice_one_images);


//NOTES OF OLD CODE

//ALT ZIP FUNCTION
// const zip = function (f) {
//     return function ([a,b,c]) {
//         return function ([x,y,z]) {
//             return [f(a,x), f(b,y), f(c, z)]