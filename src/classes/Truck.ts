import { ITransport } from '../interface/ITransport';
export class Truck implements ITransport {

  deliver() {
    return "Livrer par la route dans une boite"
  }
}