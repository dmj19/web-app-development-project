import Ajax from "./ajax.js";
import SCC from "./scc_game.js";
import Total from "./total.js";


// create UI object to call from main file
// create Game object to separate from pure functions
const UI = Object.create(null);
const Game= Object.create(null);

/*  returning element object representing the element
whose id property matches the specified string */
const el = (id) => document.getElementById(id);

const roll_button = el("roll-button");
// roll button commences the game
const name_collection = el("name-collection");
const composition = el("composition");
const roll_info = el("space");
const roll_count = el("roll-count");


/* init function is called from the main file to load once
HTML has been loaded (DOM Content Loaded) */
UI.init = function () {
    var roll_clicks = 0;
    // roll is counted to determine end of turn

    /* Waiting Keypress returns a promise that upon key press of
    R, the event listener is removed. This allowd the async function
    to be utilised  */
    function waitingKeypress() {
        return new Promise((resolve) => {
          document.addEventListener("keydown", onKeyHandler);
          function onKeyHandler(e) {
            if (e.keyCode === 82) {
              document.removeEventListener("keydown", onKeyHandler);
              resolve();
            }
          }
        });
    }
    /* re-roll check takes in the dice roll from the user and
    checks which roll the player is on. It then pauses and
    listend for a keypress of R before commencing the game  */

    async function re_roll_check(player) {
        button_heading_count(player);
        /* roll count is checked and rolls left for the
        player are displayed on screen*/
        console.log("waiting keypress..");
        await waitingKeypress();
        console.log(player);
        console.log(player.length);
        Game.play_game(player);
        console.log("good job!");
    };

     /* Play Game runs through one dice-roll of game play. It then returns
     the adapted dice roll of the play once the roll has been completed (see
    SCC_game file for definitions of functions) */
    Game.play_game= function(player) {
        console.log(player);
        roll_clicks += 1;
        // adds a roll count
        roll_info.innerHTML = "Press R to Re-roll";
        player = SCC.diceroll(player.length);
        /* produces a randomised dice roll assigned to the dice images
        with the number of dice required for the round */
        console.log(player);
        SCC.update_number(player);
        SCC.filter(player);
        console.log(player);

        if (player.length==2){
          Game.end_turn(player);
         // game ends when 4,5 and 6 are found so dice left are two
        }
        re_roll_check(player);
    return player;
    };



    roll_button.onclick = function () {
        roll_clicks = 0;
        button_heading_count(player);
        var player = new Array(5);
          // roll_clicks += 1;
          // button_heading_count();
        console.log(composition.value);

        Ajax.query({
            "message": composition.value
        }).then(function (responseObj) {

            name_collection.innerHTML = (responseObj.message);
        });
        Game.play_game(player);
    };



    const button_heading_count = function (player) {
        if (roll_clicks === (0)) {
            roll_count.innerHTML = "3 rolls left";
        }
        if (roll_clicks === (1)) {
            roll_count.innerHTML = "2 rolls left";
        }
        if (roll_clicks === (2)) {
            roll_count.innerHTML = "1 roll left";
        }
        if (roll_clicks === (3)) {
            roll_count.innerHTML = "End of Turn";
            Game.end_turn(player);
        }
    };

    Game.end_turn= function(player) {
        console.log ("Your Score is "+ Total.total(player))
        if (player.length==2); {
            roll_info.innerHTML = (
            "Your Score is "+ String(Total.total(player))+
            ", Click to Play again");
            roll_count.innerHTML = "End of Turn";
        };
    }

    Game.roll_counter= function(roll_clicks) {
        return roll_clicks
    }
};

export default Object.freeze(UI,Game);
