const express = require("express");
const userRouter = require("./routes/user.routes");
const projectRouter = require("./routes/project.routes");
const teamRouter = require("./routes/team.routes");

const router = express.Router();

router.use("/user", userRouter);
router.use("/project", projectRouter);
router.use("/team", teamRouter);

module.exports = router;