const Router = require("express").Router();

const { where } = require("sequelize");
const { project, team } = require("../db/models");

Router.get("/", async (req, res) => {
  console.log(req.body);

  try {
    console.log(req.session.user_id);
    const data = await project.findByPk(req.session.user_id);
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

Router.get("/getAllProjects", async (req, res) => {
  try {
    const data = await project.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

Router.get("/getUserProjects/:user_id", async (req, res) => {
  const user_id = req.params.user_id;
  try {
    const owner = await project.findOne({ where: { owner_id: user_id } });
    const projectIds = await team.findAll({
      attributes: ["project_id"],
      where: { user_id },
    });
    const working = await Promise.all(
      projectIds.map(async (projectId) => {
        return await project.findByPk(projectId.dataValues.project_id);
      })
    );
    res.status(200).json({ owner, working });
  } catch (err) {
    res.status(500).json(err);
  }
});

Router.delete("/logOut", async (req, res) => {
  try {
    req.session.destroy(() => {
      res.clearCookie("user_id").json("ok");
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

Router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await project.findAll({ where: { id: id } });
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

Router.post("/login", async (req, res) => {
  const { login, password } = req.body;
  try {
    try {
      const currentUser = await project.findOne({ where: { login } });
      // console.log(currentUser);
      const isMatch = await comparePassword({
        possiblePassword: password,
        hashedPassword: currentUser.password,
      });
      if (!currentUser || !isMatch) {
        return res.status(401).send("invalid password or login").json();
      } else {
        req.session.user_id = currentUser.id;
        // console.log(req.session);

        res.json(currentUser);
      }
    } catch (error) {
      return res.status(401).send("invalid password or login").json();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

Router.post("/create", async (req, res) => {
  const { title, description, gitLink, img } = req.body;
  const owner_id = req.session.user_id;
  console.log(title, description, gitLink, img, owner_id);

  try {
    const data = await project.create({
      title,
      description,
      owner_id,
      gitLink,
      img,
    });
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

Router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await project.destroy({
      where: { id },
    });
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = Router;
