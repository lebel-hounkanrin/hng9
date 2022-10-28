const express = require("express");
const http = require("http");

const app = express()
const server = http.createServer(app);
app.get("/", (req, res) => {
    res.json({
        "SlackUsername": "Neilphillip",
        "backend": true,
        "age": 22,
        "bio": "My name's Lebel HOUNKANRIN. I'm Tech enthusiast, i'm junior software engineer. I'm a kind of adventurer"
    })
})

app.listen(3000, () => {})