import Ajax from "./ajax.js";
import SCC from "./scc_game.js";


const UI = Object.create(null);
const Game= Object.create(null);

const el = (id) => document.getElementById(id);

const roll_button = el("roll-button");
const name_collection = el("name-collection");
const composition = el("composition");
const roll_info = el("space");
const roll_count = el("roll-count");



UI.init = function () {
    var roll_clicks = 0;

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

    async function re_roll_check(player) {
        button_heading_count(player);
        console.log("waiting keypress..");
        await waitingKeypress();
        console.log(player);
        console.log(player.length);
        Game.play_game(player);
        console.log("good job!");
    };


    Game.play_game= function(player) {
        console.log(player);
        roll_clicks += 1;
        roll_info.innerHTML = "Press R to Re-roll";
        player = SCC.diceroll(player.length);
        console.log(player);
        SCC.update_number(player);
        SCC.filter(player);
        console.log(player);

        if (player.length==2){
          Game.end_turn(player);
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
        console.log ("Your Score is "+ SCC.total(player))
        if (player.length==2); {
            roll_info.innerHTML = (
            "Your Score is "+ String(SCC.total(player))+
            ", Click to Play again");
            roll_count.innerHTML = "End of Turn";
        };

    }
};

export default Object.freeze(UI,Game);