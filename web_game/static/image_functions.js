const Image = Object.create(null);

/*  returning element object representing the element
whose id property matches the specified string */

const el = (id) => document.getElementById(id);


const search_ship = el("ship");
const search_captain = el("captain");
const search_crew = el("crew");
//  searching the seas HTML
const fifth_dice = el("image5");
const fourth_dice = el("image4");
const third_dice = el("image3");
//  dice display on screen
const ship_pic = el("ship-image");
const captain_pic = el("captain-image");
const crew_pic = el("crew-image");
// Collection Icon Pictures (left screen)

/* The three images functions change the HTML and add images to the
webpage. A message is displayed on the screen and the winning dice is
ressasigned as a blue dice with a picture. */

Image.ship_images = function () {
    search_ship.innerHTML = "FOUND SHIP!";
    console.log("You've found a Ship!");
    fifth_dice.setAttribute("src", "dice_images/blue_six.png");
    // The blue dice don't get reassigned once they are found as array slices
    ship_pic.setAttribute("src", "dice_images/ship.png");
};

Image.captain_images = function () {
    search_captain.innerHTML = "FOUND CAPTAIN!";
    console.log("You've found a Captain!");
    fourth_dice.setAttribute("src", "dice_images/blue_five.png");
    captain_pic.setAttribute("src", "dice_images/captain.png");
};

Image.crew_images = function () {
    search_crew.innerHTML = "FOUND CREW - SET SAIL!!";
    console.log("You've found a Crew!");
    third_dice.setAttribute("src", "dice_images/blue_four.png");
    crew_pic.setAttribute("src", "dice_images/crew.png");
};


export default Object.freeze(Image);