require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', error => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json());
app.use('/api', routes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/main.html");
});

app.post("/", async (req, res) => {
    let newData = new Data({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
    });
    newData.save();
    console.log("Successful");
});

app.listen(3000, () => {
    console.log("Server is running on 3000");
});
