import fc from "fast-check";
import property from "./property.js";
import serverfunction from "../serverfunction.js";

const name= fc.string();

describe("Ship Captain Crew rules", function () {

    property(
        "length of string should be extended by the same amount each time",
        [name],
        function (name) {

            var extended_string= serverfunction.nameappend(name);

            if (name.length + 9 === extended_string.length) {
                return true;
            }
            else {
                return false;
            }
        }
    );

});

