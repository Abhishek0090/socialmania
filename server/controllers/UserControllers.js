import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//get a user

export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);

    if (user) {
      const { password, ...otherDetails } = user._doc; //response lies in _doc in it

      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("No such User");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;

  const { _id, currentUserAdminStatus, password } = req.body;

  if (id === _id) {
    try {
      // if we also have to update password then password will be bcrypted again
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }

      // have to change this
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      const token = jwt.sign(
        { username: user.username, id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      console.log({ user, token });

      res.status(201).json({ user, token });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  } else {
    res
      .status(403)
      .json("Access Denied! You can update only your own Account.");
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  const { currentUserId, currentUserAdmin } = req.body;

  if (currentUserId == id || currentUserAdmin) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json("User Deleted Successfully!");
    } catch (error) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Access Denied!");
  }
};

// Follow a USer

export const followUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;
  console.log(id, currentUserId);
  if (currentUserId == id) {
    res.status(403).json("Action Forbidden");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);

      if (!followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $push: { followers: currentUserId } });
        await followingUser.updateOne({ $push: { following: id } });
        res.status(200).json("User followed!");
      } else {
        res.status(403).json("you are already following this id");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
};

// Unfollow a User
// changed
export const unfollowUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;

  if (currentUserId === id) {
    res.status(403).json("Action Forbidden");
  } else {
    try {
      const unFollowUser = await UserModel.findById(id);
      const unFollowingUser = await UserModel.findById(currentUserId);

      if (unFollowUser.followers.includes(currentUserId)) {
        await unFollowUser.updateOne({ $pull: { followers: currentUserId } });
        await unFollowingUser.updateOne({ $pull: { following: id } });
        res.status(200).json("Unfollowed Successfully!");
      } else {
        res.status(403).json("You are not following this User");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
