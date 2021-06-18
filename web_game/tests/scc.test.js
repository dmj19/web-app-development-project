import fc from "fast-check";
import Total from "../static/total.js";
import property from "./property.js";


const rand_dice= fc.uint8Array({min: 1, max: 6, minLength: 2, maxLength: 5});

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
        if (Total.total([0]) !== 0) {
            throw "Play input isn't detected, Try input again";
        }
    });

});



