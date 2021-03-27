import Bank from "../models/bank.model";
import { Response, Request } from "express";

//Get
export const getBanks = async (_: any, res: Response) => {
  try {
    const data = await Bank.find({}).sort({ date: -1 });
    res.send(data);
  } catch (err) {
    console.log("Error", err);
  }
};

//create
export const addBank = async (req: Request, res: Response) => {
  try {
    const data = await Bank.create(req.body);
    res.send(data);
  } catch (err) {
    console.log("Error", err);
  }
};

//update
export const updateBank = async (req: Request, res: Response) => {
  try {
    console.log("Update Banc", req.params.id);
    await Bank.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
      function (err, model) {
        if (err) {
          console.log("Error Update Bank", err);
          return;
        } else {
          res.send(model);
        }
      }
    );
  } catch (err) {
    console.log("Error", err);
  }
};

export const deleteBank = async (req: Request, res: Response) => {
  try {
    await Bank.deleteOne({ _id: req.params.id });
    res.send(true);
  } catch (err) {
    console.log("Error" + err);
  }
};
