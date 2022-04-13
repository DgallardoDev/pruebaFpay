import { validationResult } from 'express-validator';

//valida los middlewares de expess validator y devuelve el primer error encontrado
export const validar = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {

    const primerError = errors.errors[0].msg;
    return res.status(400).json(primerError);
    
  }

  next();
};
