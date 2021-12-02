const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    //actions
    res.render('home.hbs', {layout:false})
});

module.exports = router;