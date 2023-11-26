const express = require("express");
const Reciver = require("./auth.schema")

const app = express.Router();


app.get("/", async (req, res) => {
    try {
        let u = await Reciver.find({}, { password: 0 })
        res.send(u)
    } catch (er) {
        res.status(404).send(er.message)
    }
})
app.post("/login", async (req, res) => {
    let { email, password } = req.body;

    try {
        let u = await Reciver.findOne({ email, password })

        if (!u) {
            return res.status(401).send("Authentication Failed")
        }

        res.send({
            token: `${u.email}_#_${u.password}`, reciver: u
        })
    } catch (e) {
        res.status(404).send(e.message)
    }
})

app.post("/signup", async (req, res) => {
    let { email } = req.body;

    try {
        let u = await Reciver.findOne({ email })

        if (u) {
            return res.status(404).send("Reciver already exist")

        }
        else {
            let rec = await Reciver.create({ ...req.body })
            res.send([{ token: `${rec.email}_#_${rec.password}` }, { rec }])
        }
    } catch (e) {
        res.status(404).send(e.message)
    }
})




module.exports = app;