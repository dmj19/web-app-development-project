import SCC from "../static/scc_game.js";
import fc from "fast-check";
import property from "./property.js";


const final_score= fc.constant(11);
const dice_input= fc.array(Object.values(SCC.update_six(6)));

// console.log(SCC.total());


describe("Ship Captain Crew rules", function () {

    property(
        "maximum score of player cannot be greater than 12",
        [final_score],
        function (score_total) {
            const round= score_total.flat();

            return (round <= 12);
        }
    );

    property(
        "if dice are in reverse order, the outcome is the same",
        [dice_input],
        function (input_dice) {
            const dice1= input_dice.flat();
            const dice2= input_dice.reverse();

            return (dice1===dice2);
        }
    );


    // property(
    //     "two inital dice rolls shouldn't be the same",
    //     [final_score],
    //     function (score_total) {
    //         const round= score_total.flat();

    //         return (
    //             (round <= 12)
    //         );
    //     }
    // );

    // "if dice are in a different order, the outcome is the same"
});
    // if dice are in a different order, the outcome is the same







//     // test length >2

//     ""
// // }