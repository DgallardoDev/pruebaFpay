import { Router } from 'express';
import { param } from 'express-validator';

import { listPrimes } from '../controllers/prime.controllers';
import { validar } from '../middlewares/validar';

const router = Router();

router.get(
  '/:number?', //path
  [
    //middlewares
    param('number', 'debe ser un numero entero positivo mayor que 1').isInt().custom((num) => num > 1),
    validar,
  ],
  listPrimes //callback
);

export default router;
