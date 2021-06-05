

const random_int_6= Math.floor(Math.random() * 6)+1;
const random_int_7=Math.floor(Math.random() * 6)+1;
const random_int_8=Math.floor(Math.random() * 6)+1;
const random_int_9=Math.floor(Math.random() * 6)+1;
const random_int_10=Math.floor(Math.random() * 6)+1; 


const second_dice_set =[ 
    random_int_6, 
    random_int_7,
    random_int_8,
    random_int_9,
    random_int_10]

var dice_One_numbers= "dice_images/Dice_"+random_int_6+".png";
var dice_Two_numbers= "dice_images/Dice_"+random_int_7+".png";
var dice_Three_numbers= "dice_images/Dice_"+random_int_8+".png";
var dice_Four_numbers= "dice_images/Dice_"+random_int_9+".png";
var dice_Five_numbers= "dice_images/Dice_"+random_int_10+".png"; 







// function change_dice();{
//     document.getElementById("image1").src = dice_One_numbers;
//   }

document.querySelector(".img1").setAttribute("src", dice_One_numbers); 
document.querySelector(".img2").setAttribute("src", dice_Two_numbers); 
document.querySelector(".img3").setAttribute("src", dice_Three_numbers); 
document.querySelector(".img4").setAttribute("src", dice_Four_numbers); 
document.querySelector(".img5").setAttribute("src", dice_Five_numbers); 








// const scc_game = Object.create(null);
// var random_int_6= Math.floor(Math.random() * 6)+1;
// var random_int_7=Math.floor(Math.random() * 6)+1;
// var random_int_8=Math.floor(Math.random() * 6)+1;
// var random_int_9=Math.floor(Math.random() * 6)+1;
// var random_int_10=Math.floor(Math.random() * 6)+1; 



// var dice_One_numbers= "dice_images/Dice_"+random_int_6+".png";
// var dice_Two_numbers= "dice_images/Dice_"+random_int_7+".png";
// var dice_Three_numbers= "dice_images/Dice_"+random_int_8+".png";
// var dice_Four_numbers= "dice_images/Dice_"+random_int_9+".png";
// var dice_Five_numbers= "dice_images/Dice_"+random_int_10+".png"; 

// document.querySelector(".img1").setAttribute("src", dice_One_numbers); 
// document.querySelector(".img2").setAttribute("src", dice_Two_numbers); 



// console.log(second_dice_set);