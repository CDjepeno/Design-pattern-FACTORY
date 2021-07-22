import { Logistic } from '../abstract/Logistics';
import { ITransport } from '../interface/ITransport';
import { Ship } from './Ship';

export class SeaLogistique extends Logistic  {

  createTransport() {
    return new Ship()
  }
}