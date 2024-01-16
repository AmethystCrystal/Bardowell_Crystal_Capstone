const express = require('express');

const router = express.Router();

// GET all
router.get('/', (req, res) => {
    res.json({msg: 'GET all testRoutes'})
});

// GET one
router.get('/:id', (req, res) => {
    res.json({msg: 'GET one testRoute'})
})

// POST a new one
router.post('/', (req, res) => {
    res.json({msg: 'POST a new testRoute'})
})

// DELETE one
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a testRoute'})
})

// UPDATE one
router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a testRoute'})
})



module.exports = router;
