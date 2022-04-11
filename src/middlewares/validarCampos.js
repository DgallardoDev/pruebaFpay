import { validationResult } from "express-validator";

export const validarCampos = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const primerError = errors.errors[0].msg;
    return res.status(400).json({ msg: primerError });
  }
  next();
};
