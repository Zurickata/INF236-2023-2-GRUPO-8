const { Router } = require('express');
const router = Router();

router.route("/")
    .get((req, res) => res.send('Calendario'));

//router.route("/:id")
//    .get()
//    .put()
//    .post()
//    .delete()


module.exports = router;