const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
    //action
    res.render('home.hbs', {title: 'Browse'})
});

router.get('/create', (req, res) => {
    res.render('create.hbs', {title: 'Create'})
});

module.exports = router;

