const scc_game = Object.create(null);

const second_dice_set ={
    random_int_6: Math.floor(Math.random() * 6)+1,
    random_int_7:Math.floor(Math.random() * 6)+1,
    random_int_8:Math.floor(Math.random() * 6)+1,
    random_int_9:Math.floor(Math.random() * 6)+1,
    random_int_10:Math.floor(Math.random() * 6)+1,
}; 

const Dice_One_numbers= "dice_images/Dice_"+random_int_6+".png";
const Dice_Two_numbers= "dice_images/Dice_"+random_int_7+".png";
const Dice_Three_numbers= "dice_images/Dice_"+random_int_8+".png";
const Dice_Four_numbers= "dice_images/Dice_"+random_int_9+".png";
const Dice_Five_numbers= "dice_images/Dice_"+random_int_10+".png"; 


console.log(second_dice_set);