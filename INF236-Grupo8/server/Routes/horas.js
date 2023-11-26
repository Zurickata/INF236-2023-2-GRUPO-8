const { Router } = require('express');
const router = Router();

const { getHs, getH, createH, updateH, deleteH } = require('../Controllers/c_horas.js');

router.route("/")
    .get(getHs)
    .get(getH)
router.route("/:id")
    .get(getHs)
    .get(getH)
    .post(createH)
    .put(updateH)
    .delete(deleteH);

module.exports = router;