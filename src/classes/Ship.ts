import { ITransport } from '../interface/ITransport';
export class Ship implements ITransport {

  deliver() {
    return "Livrer par la mer dans un conteneur."
  }
}