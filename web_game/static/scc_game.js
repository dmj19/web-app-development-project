const SCC = Object.create(null);

var id_names = {
  // "image1": [6] ,
  // "image2": [6] ,
  // "image3": [6] ,
  // "image4" : [6] ,
  // "image5" :[6]
  };

const update_six = function(num){
  for (let i=1;i<num+1;i++){
    const random_int = Math.floor(Math.random() * 6) + 1;
    id_names["image".concat(i.toString())] = random_int;
    };
  console.log(id_names);
return id_names
};

const diceroll = function(num) {
  const id_names=update_six(num);
return Object.values(id_names);
};

const update_number = function(dicerollNumbers) {
  console.log(dicerollNumbers)
  for (let i=0; i<(dicerollNumbers.length); i++){
    document.getElementById("image"+ String(i+1)).setAttribute(
      "src", "dice_images/Dice_"+ String(dicerollNumbers[i]) +".png");
  };
  console.log(dicerollNumbers.length);
  // for (let i=(dicerollNumbers.length); i<=6; i++) {
  //   console.log(dicerollNumbers.length);
  //   document.getElementById("image"+ String(i)).setAttribute(
  //     "src", "dice_images/Found.png");
  // };
};

const total= (array) => {
    return array.reduce((a,b) => a+b,0);
};

const ship_images = function () {
  document.getElementById("ship").innerHTML = "FOUND SHIP!";
  console.log("You've found a Ship!");
  document.getElementById("image5").setAttribute("src", "dice_images/Found.png");
};

const captain_images = function() {
  document.getElementById("captain").innerHTML = "FOUND CAPTAIN!";
  console.log("You've found a Captain!");
  document.getElementById("image4").setAttribute("src", "dice_images/Found.png");
};

const crew_images = function() {
  console.log("You've found a Crew!");
  document.getElementById("crew").innerHTML = "FOUND CREW - SET SAIL!!";
  document.getElementById("image3").setAttribute("src", "dice_images/Found.png");
};

const filter = function(dice_set_2) {
    if (dice_set_2.length==5){
      if (dice_set_2.includes(6)){
        ship_images();
        dice_set_2.splice(dice_set_2.indexOf(6),1);
      }};
      if (dice_set_2.length==4){
        if (dice_set_2.includes(5)){
          captain_images();
          dice_set_2.splice(dice_set_2.indexOf(5),1);
      }
      }
      if (dice_set_2.length==3){
        if (dice_set_2.includes(4)){
          crew_images();
          dice_set_2.splice(dice_set_2.indexOf(4),1);
      }}
      };

var player = new Array(5);

SCC.play_game= function() {
  for (let i=1;i<4;i++){
    if (player.length==2){
      console.log("Would you like to keep your dice or reroll?");
      // if yes then break here
    };
    player =diceroll(player.length);
    // console.log(player);
    update_number(player);
    filter(player);
    console.log(player);
  };
  if (player.length ==2) {
      total(player)
      console.log ("Your Score is "+ total(player))
  };
  if (player.length>2) {
      console.log ("Bad Luck, No Score, Roll Again?")
  };
};

export default Object.freeze(SCC);

// // // SCC.first_roll_check = function(initial_dice_set) {
// // //     const second_dice_set = [initial_dice_set.find(element=>
// element==6)];
// // //     if second_dice_set = undefined; {
// // //         console.log("Roll Again")
// // //     };
// // //     else {
// // //         console.log("You've found a captain!")
// // //         second_dice_set= [6]
// // //     };
// // // };

// // // SCC.filled_second_set = function(second_dice_set) {
// // //     var random_int= Math.floor(Math.random() * 6)+1;
// // //     for (var i=1; i<=(6-second_dice_set.length); i++) {
// // //         append_dice_set["random_int_" + i] == random_int;
// // //     };
// // // };


// // // "random_int_1": 1 ,
// // // "random_int_2": 1 ,
// // // "random_int_3": 1 ,
// // // "random_int_4": 1 ,
// // // "random_int_5": 1


// // // Object.keys(dice_set).forEach(
// // //     values => values== random_int
// // // );


// // // var dice_One_numbers= "dice_images/Dice_"+random_int_6+".png";
// // // var dice_Two_numbers= "dice_images/Dice_"+random_int_7+".png";
// // // var dice_Three_numbers= "dice_images/Dice_"+random_int_8+".png";
// // // var dice_Four_numbers= "dice_images/Dice_"+random_int_9+".png";
// // // var dice_Five_numbers= "dice_images/Dice_"+random_int_10+".png";


// // // function change_dice();{

// // // }

// // document.querySelector(".img1").setAttribute("src", dice_One_numbers);
// // document.querySelector(".img2").setAttribute("src", dice_Two_numbers);
// // document.querySelector(".img3").setAttribute("src", dice_Three_numbers);
// // document.querySelector(".img4").setAttribute("src", dice_Four_numbers);
// // document.querySelector(".img5").setAttribute("src", dice_Five_numbers);








// // const scc_game = Object.create(null);
// // var random_int_6= Math.floor(Math.random() * 6)+1;
// // var random_int_7=Math.floor(Math.random() * 6)+1;
// // var random_int_8=Math.floor(Math.random() * 6)+1;
// // var random_int_9=Math.floor(Math.random() * 6)+1;
// // var random_int_10=Math.floor(Math.random() * 6)+1;



// // var dice_One_numbers= "dice_images/Dice_"+random_int_6+".png";
// // var dice_Two_numbers= "dice_images/Dice_"+random_int_7+".png";
// // var dice_Three_numbers= "dice_images/Dice_"+random_int_8+".png";
// // var dice_Four_numbers= "dice_images/Dice_"+random_int_9+".png";
// // var dice_Five_numbers= "dice_images/Dice_"+random_int_10+".png";

// // document.querySelector(".img1").setAttribute("src", dice_One_numbers);
// // document.querySelector(".img2").setAttribute("src", dice_Two_numbers);



// // console.log(second_dice_set);