const serverfunction = Object.create(null);

serverfunction.nameappend = function (name) {
    let new_name = name.toString().concat(" score:");
    return new_name;
};


console.log(serverfunction.nameappend("daisy "))

export default Object.freeze(serverfunction);