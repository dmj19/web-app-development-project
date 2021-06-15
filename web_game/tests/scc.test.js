import SCC from "../static/scc_game.js";
import fc from "fast-check";
import property from "./property.js";


const final_score= fc.array(fc.func(SCC.total()));

// console.log(SCC.total()); 


describe("Ship Captain Crew rules", function () {

    property(
        "maximum score of player cannot be greater than 12",
        [final_score],
        function (score_total) {
            const round= score_total.flat();

            return (
                (round <= 12)
            );  
        }
    );  

});

    // if dice are in a different order, the outcome is the same 







//     // test length >2 

//     ""
// // }