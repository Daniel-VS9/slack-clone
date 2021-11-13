const express = require('express')
const router = express.Router()

const Channel = require('../models/Channel')

router.get('/all', async (req, res) => {
    const channels = await Channel.find()
    res.json(channels)
})

router.post('/add', async (req, res) => {
    const {name, description} = req.body;

    try {
        const newChannel = new Channel({name, description});
        await newChannel.save();
        res.sendStatus(201);
    } catch (err) {
        res.sendStatus(500)
    }

})

module.exports = router;