import SCC from "../../scc_game.js";

// const Clicking = Object.create(null);

const roll_button = document.getElementById("roll-button");
const roll_count = document.getElementById("roll-count");


var roll_clicks = 0;

roll_button.onclick = function () {
    button_heading_count();
    roll_clicks += 1;
};



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
