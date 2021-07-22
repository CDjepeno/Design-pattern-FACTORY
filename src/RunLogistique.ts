import { ITransport } from './interface/ITransport';
import { Logistic } from './abstract/Logistics';
import { RoadLogistique } from './classes/RoadLogistics';
import { SeaLogistique } from './classes/SeaLogistics';
export class RunLogistique {
  main1() {
    let logistic: Logistic = new RoadLogistique();

    let transport: ITransport = logistic.createTransport() 

    return transport.deliver()
  }

  main2() {
    let logistic: Logistic = new SeaLogistique();

    let transport: ITransport = logistic.createTransport() 

    return transport.deliver()
  }

}