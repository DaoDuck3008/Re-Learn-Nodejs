import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};

const create = (req, res) => {
  const password = req.body.password;
  console.log(">>> Request:", password);

  const hashPassword = bcrypt.hashSync(password, salt);
  console.log(">>> Request:", hashPassword);

  return res.send("Hello new user");
};

module.exports = { handleHelloWorld, handleUserPage, create };
