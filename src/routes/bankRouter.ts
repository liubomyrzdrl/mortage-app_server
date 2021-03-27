import express, { Router } from "express";
import {
  getBanks,
  addBank,
  updateBank,
  deleteBank,
} from "../controllers/banksConroller";

const router: Router = express.Router();

router.route("/banks").get(getBanks).post(addBank);

router.route("/bank/:id").put(updateBank).delete(deleteBank);

export default router;
