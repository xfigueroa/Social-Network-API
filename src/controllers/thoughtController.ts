import { Request, Response } from "express";
import { Thought } from "../models/thought";
import { User } from "../models/user";

export const getThoughts = async (_req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find();
    return res.json(thoughts);
  } catch (err) {
    return res.status(500).json({ message: "Error obteniendo pensamientos", error: err });
  }
};

export const getThoughtById = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) {
      return res.status(404).json({ message: "Pensamiento no encontrado" });
    }
    return res.json(thought);
  } catch (err) {
    return res.status(500).json({ message: "Error en la consulta", error: err });
  }
};

export const createThought = async (req: Request, res: Response) => {
  try {
    const { thoughtText, username, userId } = req.body;
    if (!thoughtText || !username || !userId) {
      return res.status(400).json({ message: "Faltan datos requeridos" });
    }

    const newThought = await Thought.create({ thoughtText, username });

    // Relacionar el pensamiento con el usuario
    await User.findByIdAndUpdate(userId, { $push: { thoughts: newThought._id } });

    return res.json(newThought);
  } catch (err) {
    return res.status(500).json({ message: "Error creando pensamiento", error: err });
  }
};

export const updateThought = async (req: Request, res: Response) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedThought) {
      return res.status(404).json({ message: "Pensamiento no encontrado" });
    }
    return res.json(updatedThought);
  } catch (err) {
    return res.status(500).json({ message: "Error actualizando pensamiento", error: err });
  }
};

export const deleteThought = async (req: Request, res: Response) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.id);
    if (!deletedThought) {
      return res.status(404).json({ message: "Pensamiento no encontrado" });
    }

    // Eliminarlo también del usuario asociado
    await User.findOneAndUpdate(
      { thoughts: req.params.id },
      { $pull: { thoughts: req.params.id } }
    );

    return res.json({ message: "Pensamiento eliminado" });
  } catch (err) {
    return res.status(500).json({ message: "Error eliminando pensamiento", error: err });
  }
};

export const addReaction = async (req: Request, res: Response) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } },
      { new: true }
    );
    if (!updatedThought) {
      return res.status(404).json({ message: "Pensamiento no encontrado" });
    }
    return res.json(updatedThought);
  } catch (err) {
    return res.status(500).json({ message: "Error agregando reacción", error: err });
  }
};

export const removeReaction = async (req: Request, res: Response) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { new: true }
    );
    if (!updatedThought) {
      return res.status(404).json({ message: "Pensamiento no encontrado" });
    }
    return res.json(updatedThought);
  } catch (err) {
    return res.status(500).json({ message: "Error eliminando reacción", error: err });
  }
};
