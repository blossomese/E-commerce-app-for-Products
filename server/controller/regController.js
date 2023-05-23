const Registration = require("../model/regModel");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name) {
    return res.status(400).send(`Name cannot be empty`);
  }
  if (!email) {
    return res.status(400).send(`Email cannot be empty`);
  }
  if (!password) {
    return res.status(400).send(`Password cannot be empty`);
  }
  try {
    const itExists = await Registration.findOne({ where: { email } });
    if (itExists) {
      return res.status(400).send("Email already exist");
    }
    const encryptPassword = await bcrypt.hash(password, 10);
    const newReg = await Registration.create({
      id: uuidv4(),
      name,
      email,
      password: encryptPassword,
    });
    const token = jwt.sign({ id: newReg.id, email }, "secret_key");
    console.log(newReg);
    return res.status(201).json({
      message: `User created successfully`,
      data: {
        token,
        name,
        email,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = register;
