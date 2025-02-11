import { Request, Response } from "express";
import { User } from "../models/user";

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find().populate("friends").populate("thoughts");
    return res.json(users);
  } catch (err) {
    return res.status(500).json({ message: "Error obteniendo usuarios", error: err });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
};
