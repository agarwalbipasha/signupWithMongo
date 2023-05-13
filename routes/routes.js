const express = require('express');
const router = express.Router();
const Data = require('../models/model');

router.post('/', async(req, res) => {
    const data = new Data({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
    
});

router.get('/getAll', async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message }).pretty();
    }
});

router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Data.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Data.findByIdAndUpdate(id, updatedData, options);
        res.send(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Data.findByIdAndDelete(id);
        res.send('Document with ${result.fname} has been deleted...');
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;