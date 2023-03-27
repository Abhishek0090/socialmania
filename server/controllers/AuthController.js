import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";

//Register
export const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);

  req.body.password = hashedPass;

  const newUser = new UserModel(req.body);

  const { username } = req.body;

  try {
    const oldUser = await UserModel.findOne({ username });

    if (oldUser) {
      return res.status(400).json("User Already Exists");
    }

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//Login

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username: username });

    if (user) {
      const validity = await bcrypt.compare(password, user.password);

      if (!validity) {
        res.status(400).json("wrong password");
      } else {
        res.status(201).json(user);
      }
    } else {
      res.status(404).json("User Doesnt Exist");
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
