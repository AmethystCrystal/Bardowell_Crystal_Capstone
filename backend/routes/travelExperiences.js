const express = require('express');

const router = express.Router();

// GET all
router.get('/', (req, res) => {
    res.json({msg: 'GET all travel experiences'})
});

// GET one
router.get('/:id', (req, res) => {
    res.json({msg: 'GET one travel experience'})
})

// POST a new one
router.post('/', (req, res) => {
    res.json({msg: 'POST a new travel experience'})
})

// DELETE one
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a travel experience'})
})

// UPDATE one
router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a travel experience'})
})



module.exports = router;
