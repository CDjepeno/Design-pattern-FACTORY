import { ITransport } from "../interface/ITransport";
export abstract class Logistic {
  planDelivery() {
    let transport: ITransport = this.createTransport();
  }

  abstract createTransport(): ITransport;
}
