const Ajax = Object.create(null);

const fetch = window.fetch;

const json = (response) => response.json();

Ajax.query = function (requestObj) {

    const body = JSON.stringify(requestObj);

    return fetch("/", {
        "method": "POST",
        "body": body,
        "headers": {
            "Content-Type": "application/json"
        }
    }).then(json); //return a promise to a response object
};

export default Object.freeze(Ajax);


// return Promise.resolve({
//     { "message": my_message_text}
// { "name-collection": "Daisy's Collection"}
// })
    // {"response": my_message_text + "'s Collection"}
// { "input-name": "Daisy"}
// { "name-collection": "Daisy's Collection"}