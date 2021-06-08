
import SCC from "./scc_game.js";

const roll_button = document.getElementById("roll-button");
const roll_count = document.getElementById("roll-count");
const trial_title = document.getElementById("trial");

var roll_clicks = 0;

roll_button.onclick = function () {
    roll_clicks += 1;
    button_heading_count();
    console.log("CLICKED");
    trial_title.innerHTML = "TRIAL";
    SCC.play_game();
};

const button_heading_count = function () {
    if ((roll_clicks % 3 === 0) || roll_clicks === (0)) {
        roll_count.innerHTML = "3 rolls left";
    }
    if ((roll_clicks % 3 === 1) || roll_clicks === (1)) {
        roll_count.innerHTML = "2 rolls left";
    }
    if ((roll_clicks % 3 === 2) || roll_clicks === (2)) {
        roll_count.innerHTML = "1 roll left";
    }
};





// const roll_button = document.getElementById("roll-button");
// const roll_count = document.getElementById("roll-count");
// const trial_title= document.getElementById("trial");

// var roll_clicks = 0;

// roll_button.onclick = function () {
//     button_heading_count();
//     roll_clicks += 1;
//     trial_title.innerHTML = "TRIAL";
// };

// var button_heading_count = function () {
//     if ((roll_clicks % 3 === 0) || SCC.roll_clicks === (0)) {
//         roll_count.innerHTML = "3 rolls left";
//     }
//     if ((roll_clicks % 3 === 1) || SCC.roll_clicks === (1)) {
//         roll_count.innerHTML = "2 rolls left";
//     }
//     if ((roll_clicks % 3 === 2) || SCC.roll_clicks === (2)) {
//         roll_count.innerHTML = "1 roll left";
//     }
// };


//changing dice on click



// SCC.storeClicks=(number) => {
//     if (number%2 !=0 || number!=0) {
//         Yahtzee.selected_dice_set.push(number)
//     };
//     return selected_dice_set
// };



// const highlight_function = () => {
//     var element = document.getElementById("btn_2");
//     element.classList.toggle("mystyle");
