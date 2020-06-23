require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const connection = require('./config');

app.use(express.json())

connection.connect(err => {
    if (err) {
        console.log(err)
    } else {
        console.log('Succesfully connected to the database')
    }
})

app.get('/trips', (req, res) => {
    connection.query('SELECT * FROM trip', (err, results) => {
        if (err) {
            res.status(400).send(' There was an issue retreiving the trips')
        } else {
            res.status(200).send(results)
        }
    })
})


app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`The app is running at ${port}`)
    }
})