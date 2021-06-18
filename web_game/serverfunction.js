const serverfunction = Object.create(null);

/* Server function is facilitating the Ajax query to the
server through supplying the pure function to append a
string next to the uder's input. This is called through the
server as a promise */

serverfunction.nameappend = function (name) {
    let new_name = name.toString().concat("'s score:");
    return new_name;
};


console.log(serverfunction.nameappend("daisy "));

export default Object.freeze(serverfunction);