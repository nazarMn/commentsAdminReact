 const express = require('express');
 const path = require('path');
 const cors = require('cors');
 const app = express();
 const port = process.env.PORT || 3000;
 const mongoose = require('mongoose');


 mongoose.connect('mongodb://localhost:27017/feedback', {

 }).then(() => {
    console.log('Connected to MongoDB');
 })
 const Feedback = mongoose.model('Feedback', {
    name: String,
    feedback: String,
    rating: Number,
 });


 app.use(express.static(path.join(__dirname, '../dist')));
 app.use(express.static('public'));
 app.use(cors());
 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));

 app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
 });


 app.post('/feedback', (req, res) => {
    console.log(req.body);
    const feedback = new Feedback(req.body);
    feedback.save().then(() => {
        res.sendStatus('200');
    }).catch((err) => {
        console.log(err);
        res.status(500);
    });
    
 });

 app.listen(port, () => console.log(`Example app listening on port ${port}!`));