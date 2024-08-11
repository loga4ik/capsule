const express = require("express");
const userRouter = require("./routes/user.routes");

const router = express.Router();

router.use("/user", userRouter);

module.exports = router;