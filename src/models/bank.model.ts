import mongoose, { Schema } from "mongoose";
import { BankType } from "../types";
// import { ObjectID } from 'mongodb'

const BankSchema: Schema = new Schema({
  // _id:  new ObjectID(),
  name: String,
  intrestRate: Number,
  maxLoan: Number,
  minPaymant: Number,
  loanTerm: Number,
  date: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model<BankType>("bank", BankSchema);
