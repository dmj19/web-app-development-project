import Yahtzee from "./game_yahtzee.js";

const roll_button = document.getElementById("roll-button");
const roll_count= document.getElementById("roll-count");
const dice_btn1= document.getElementById("btn_1");
const dice_btn2= document.getElementById("btn_2");
const dice_btn3= document.getElementById("btn_3");
const dice_btn4= document.getElementById("btn_4");
const dice_btn5= document.getElementById("btn_5");

roll_button.onclick = function() {
    console.log("Clicked the button");
};

Yahtzee.button_heading_count =() => {
    if ((roll_number % 3 ==0) || roll_number==(0)); {
        document.querySelector('h5').innerHTML= '3 rolls left'
    };
    if ((roll_number % 3 ==1) || roll_number==(1)); {
        document.querySelector('h5').innerHTML= '2 rolls left'
    };
    if ((roll_number % 3 ==2) || roll_number==(2)); {
        document.querySelector('h5').innerHTML= '1 roll left'
    };
return roll_count
};

//changing dice on click 

dice_btn1.onclick = function(){ 
    console.log("CLICKED IT")
}


// counting click number of dice selected 

var clicks = 0;

Yahtzee.onClick= () => {
    one_clicks +=1;
    two_clicks += 1;
    three_clicks += 1;
    four_clicks += 1;
    five_clicks +=1;
    dice_btn1.innerHTML = one_clicks;
    dice_btn2.innerHTML = two_clicks;
    dice_btn3.innerHTML = three_clicks;
    dice_btn4.innerHTML = four_clicks;
    dice_btn5.innerHTML = five_clicks;
return stored_clicks[one_clicks,two_clicks,three_clicks,four_clicks,five_clicks]
};

Yahtzee.storeClicks=number) => {
    if (number%2 !=0 || number!=0) {
        Yahtzee.selected_dice_set.push(number)
    };
    return selected_dice_set
};




// Yahtzee.highlight_function=(dice_btn1) => {
//     document.getElementById("A").style.border = "1px solid black";
//     console.log("tried colour change");
// };


// const highlight_function = () => {
//     var element = document.getElementById("btn_2");
//     element.classList.toggle("mystyle");
