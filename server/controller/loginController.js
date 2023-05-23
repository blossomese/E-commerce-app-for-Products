const Registration = require("../model/regModel");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).send("Email cannot be empty");
  }
  if (!password) {
    return res.status(400).send("Password cannot be empty");
  }
  try {
    const user = await Registration.findOne({ where: { email } });
    if (!user) {
      return res.status(400).send("User not found");
    }
    if (user && (await bcrypt.compare(password, user.password))) {
      return res.status(201).json({ OK: true });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong. Please try again!");
  }
};

module.exports = login;
