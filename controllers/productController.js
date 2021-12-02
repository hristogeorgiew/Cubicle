const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
    //action
    res.render('home.hbs', { layout: false })
});

router.get('/create', (req, res) => {
    res.render('create.hbs', { layout: false })
});

module.exports = router;

