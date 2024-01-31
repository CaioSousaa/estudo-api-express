import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { accountRoutes } from "./accountRoutes";
import { cardBankRoutes } from "./cardBankRoutes";

const router = Router();

router.use("/users", userRoutes);
router.use("/accounts", accountRoutes);
router.use("/cardBanks", cardBankRoutes);

export { router };
