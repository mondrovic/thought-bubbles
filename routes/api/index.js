const router = require("express").Router();
const userRoutes = require("./user-routes");

router.use("/users", userRoutes);
// router route thought

module.exports = router;
