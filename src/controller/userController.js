import db from "../models/index";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);
const User = db.User;

const index = async (req, res) => {
  const users = await User.findAll();

  return res.render("user/index.ejs", { users });
};

const create = async (req, res) => {
  const hashPassword = bcrypt.hashSync(req.body.password, salt);
  const email = req.body.email;
  const username = req.body.username;

  try {
    const user = await db.User.create({
      email: email,
      password: hashPassword,
      username: username,
    });
    // console.log(">>> new user: ", user);

    return res.redirect("/user");
  } catch (e) {
    console.log(">>> Error:", e);
  }
};

const destroy = async (req, res) => {
  const id = req.params.id;

  await User.destroy({
    where: {
      id: id,
    },
  });

  return res.redirect("/user");
};

const edit = async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({
    where: {
      id: id,
    },
  });

  console.log(">>> Check user: ", user.get({ plain: true }));

  return res.render("user/edit.ejs", { user });
};

const update = async (req, res) => {
  const id = req.params.id;

  await User.update(
    {
      email: req.body.email,
      username: req.body.username,
    },
    {
      where: {
        id: id,
      },
    }
  );

  return res.redirect("/user");
};

module.exports = {
  create,
  index,
  destroy,
  edit,
  update,
};
