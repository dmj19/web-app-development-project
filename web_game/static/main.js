import SCC from "../../scc_game.js";

// const Clicking = Object.create(null);

const roll_button = document.getElementById("roll-button");
const roll_count = document.getElementById("roll-count");
const dice_btn1 = document.getElementById("btn_1");
const dice_btn2 = document.getElementById("btn_2");
const dice_btn3 = document.getElementById("btn_3");
const dice_btn4 = document.getElementById("btn_4");
const dice_btn5 = document.getElementById("btn_5");


var roll_clicks = 0;

roll_button.onclick = function () {
    // document.getElementById("image1").src = SCC.dice_One_numbers;
    // document.getElementById("image2").src = SCC.dice_Two_numbers;
    // document.getElementById("image3").src = SCC.dice_Three_numbers;
    // document.getElementById("image4").src = SCC.dice_Four_numbers;
    // document.getElementById("image5").src = SCC.dice_Five_numbers;
    button_heading_count();
    roll_clicks += 1;
};

dice_btn1.onclick = function () {
    console.log("CLICKED IT");
};
dice_btn2.onclick = function () {
    console.log("CLICKED 2");
};

dice_btn3.onclick = function () {
    console.log("CLICKED 3");
};

dice_btn4.onclick = function () {
    console.log("CLICKED 4");
};
dice_btn5.onclick = function () {
    console.log("CLICKED 5");
};

// var border_select = function(){
//     for (var i = 0; i <= 5; i++) {
//         dice_btn[i].addEventListener("click", function() {
//         this.dice.add(".test_skill")
//         });
//     };
//     console.log("CHECKING");
// };


var button_heading_count = function () {
    if ((SCC.roll_clicks % 3 === 0) || SCC.roll_clicks === (0)) {
        SCC.roll_count.innerHTML = "3 rolls left";
    }
    if ((SCC.roll_clicks % 3 === 1) || SCC.roll_clicks === (1)) {
        roll_count.innerHTML = "2 rolls left";
    }
    if ((SCC.roll_clicks % 3 === 2) || SCC.roll_clicks === (2)) {
        SCC.roll_count.innerHTML = "1 roll left";
    }
};

//changing dice on click



// counting click number of dice selected

// var clicks = 0;

// onClick= () => {
//     one_clicks +=1;
//     two_clicks += 1;
//     three_clicks += 1;
//     four_clicks += 1;
//     five_clicks +=1;
//     dice_btn1.innerHTML = one_clicks;
//     dice_btn2.innerHTML = two_clicks;
//     dice_btn3.innerHTML = three_clicks;
//     dice_btn4.innerHTML = four_clicks;
//     dice_btn5.innerHTML = five_clicks;
// return stored_clicks[one_clicks,two_clicks,three_clicks,four_clicks,
//five_clicks]
// };

// SCC.storeClicks=(number) => {
//     if (number%2 !=0 || number!=0) {
//         Yahtzee.selected_dice_set.push(number)
//     };
//     return selected_dice_set
// };




// Yahtzee.highlight_function=(dice_btn1) => {
//     document.getElementById("A").style.border = "1px solid black";
//     console.log("tried colour change");
// };


// const highlight_function = () => {
//     var element = document.getElementById("btn_2");
//     element.classList.toggle("mystyle");
