import { Router } from "express";
import { param } from "express-validator";

import { listPrimes } from "../controllers/prime.controllers";
import { validarCampos } from "../middlewares/validarCampos";
const router = Router();

router.get(
  "/:number?",
  [
    param("number", "debe ser un numero entero positivo")
      .isInt()
      .custom((num) => num > 0),
    validarCampos,
  ],
  listPrimes
);

export default router;
