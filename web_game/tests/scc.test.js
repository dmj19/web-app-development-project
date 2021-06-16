import fc from "fast-check";
import Total from "../static/total.js";
import property from "./property.js";


const rand_dice= fc.uint8Array({min: 1, max: 6, minLength: 2, maxLength: 5});
const dice_input= fc.uint8Array({min: 1, max: 6, minLength: 5, maxLength: 5});

// Object.values()

// console.log(Total.total(dice_input));


describe("Ship Captain Crew rules", function () {

    property(
        "maximum score of player cannot be greater than 12",
        [rand_dice],
        function (score_total) {

            var round= Total.total(score_total);

            return (round <= 12);
        }
    );

    it("If no score is entered into total, play isn't detected ", function () {
        if (Total.total(0) !== 0) {
            throw "Play input isn't detected, Try input again";
        }
    });
    // });




    // property(
    //     "roll clicks should always be less than three"
    // )

    // property(
    //     "if dice are in reverse order, the outcome is the same",
    //     [dice_input],
    //     function (input_dice) {
    //         var dice1= input_dice.map(x=>x);
    //         var dice2= input_dice.reverse();

    //         return (dice1.reverse()===dice2);
    //     }
    // );


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