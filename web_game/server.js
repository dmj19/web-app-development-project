import express from "express";
import serverfunction from "./serverfunction.js";

const port = 8080;
const app = express();

app.use("/", express.static("web_game/static"));

app.use("/", express.json());
app.post("/", function (req, res) {
    const request_object = req.body;
    console.log("sver speaking:" + request_object);
    let mes = serverfunction.nameappend(request_object.message);

    res.json({
        "message": mes
    });
});


app.listen(port, function () {
    console.log(`Listening on port ${port} – http://localhost:${port}`);
});

