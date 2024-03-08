import { Request, Response } from "express";
import { Code } from "../models/Code";

export const codeSaved = async (req: Request, res: Response) => {
  const { fullCode } = req.body;
  try {
    const newCode = await Code.create({
      fullCode: fullCode,
    });
    return res.status(201).send({ url: newCode?._id, status: "Saved!" });
  } catch (error) {
    return res.status(500).send({ message: "Error saving Code", error });
  }
};

export const loadCode = async (req: Request, res: Response) => {
  const { urlId } = req.body;
  try {
    const existing = await Code.findById(urlId);
    if (!existing) {
      return res.status(400).send({ message: "code not found" });
    }
    return res.status(200).send({fullCode:existing?.fullCode})
  } catch (error) {
    return res.status(500).send({ message: "Error saving Code", error });
  }
};
