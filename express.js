const express = require("express");

const app = express()

app.get("/", (req, res) => {
    res.send("hello");
})

app.get("/users", (req, res) => {
    if (!req.query.userId) return res.status(405).send("405")
    res.send("users" + req.query.userId);
})

app.listen(3030, function () {
    console.log("runned successfully");
})