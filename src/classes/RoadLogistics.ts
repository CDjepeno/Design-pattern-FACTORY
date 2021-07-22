import { Truck } from './Truck';
import { Logistic } from '../abstract/Logistics';

export class RoadLogistique extends Logistic {

  createTransport() {
    return new Truck()
  }
}