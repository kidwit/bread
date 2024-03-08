const router = require('express').Router()
const Bread = require('../models/bread')

router.get('/', (req, res) => {
    res.render('index', {
        breads: Bread
    }) 
})

router.get('/new',(req,res) => {
    res.render('new')
})

// GET retreive bread by index
router.get('/:index', (req, res) => {
    const { index } = req.params // new
    res.render('show', {
        bread: Bread[index],
        index
    })
})



// CREATE
router.post('/', (req, res) => {
    if (!req.body.image) req.body.image = 'https://houseofnasheats.com/wp-content/uploads/2022/02/French-Bread-1.jpg'
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.push(req.body)
    res.redirect('/bread')
})

router.get('/:index/edit', (req, res) => {
    const { index } = req.params
    res.render('edit', {
        bread: Bread[index],
        index
    })
})

//PUT update bread
router.put('/:index', (req, res) => {
    const { index } = req.params
    if (!req.body.image) req.body.image = 'https://houseofnasheats.com/wp-content/uploads/2022/02/French-Bread-1.jpg'
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread[index] = req.body
    res.redirect(`/bread/${index}`)
})

// DELETE bread
router.delete('/:index', (req, res) => {
    const { index } = req.params
    Bread.splice(index, 1)
    res.redirect('/bread')
})

module.exports = router