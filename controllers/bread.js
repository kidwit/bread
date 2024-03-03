const router = require('express').Router()
const Bread = require('../models/bread')

router.get('/', (req, res) => {
    res.send('bread')
})

// GET retreive bread by index
router.get('/:index', (req, res) => {
    const { index } = req.params
    res.send(Bread[index])
})

module.exports = router