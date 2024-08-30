const Router = require("express").Router();

const { where } = require("sequelize");
const { team } = require("../db/models");

Router.get("/", async (req, res) => {
  try {
    const data = await team.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

Router.post("/create", async (req, res) => {
  const { user_id, project_id } = req.body;

  try {
    const data = await team.create({ user_id, project_id });

    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

Router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await team.destroy({
      where: { id },
    });
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

Router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await team.findAll({ where: { id: id } });
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
