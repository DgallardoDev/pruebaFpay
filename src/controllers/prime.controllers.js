import { isPrime } from "../utils/prime";

export const listPrimes = (req, res) => {
  const number = parseInt(req.params.number);

  let primesArray = [];

  for (let i = number; i >= 2; i--) {
    isPrime(i) ? primesArray.push(i) : false;
  }

   res.status(200).json(primesArray);

};
