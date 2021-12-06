const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    //action
    res.render('about.hbs', {title: 'About'})
});

module.exports = router;