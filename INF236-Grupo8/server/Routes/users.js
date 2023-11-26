const { Router } = require('express');
const router = Router();

const { getUs, getU, createU, updateU } = require('../Controllers/c_users.js');

router.route("/")
    .get(getUs)
    .get(getU)
    .post(createU);
router.route("/:id")
    .post(createU)
    .put(updateU);


module.exports = router;