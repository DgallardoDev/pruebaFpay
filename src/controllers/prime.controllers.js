import { isPrime } from '../utils/prime';

export const listPrimes = (req, res) => {

  const number = parseInt(req.params.number);

  try {

    let primesArray = [];

    //ciclo for desde number a 0 si el numero es primo se añade al arreglo
    for (let i = parseInt(number); i >= 2; i--) {

      if(isPrime(i)){
        primesArray.push(i)
      }
      
    }

    res.status(200).json(primesArray);

  } catch (error) {

    res.status(500).json(error.message);

  }
};
