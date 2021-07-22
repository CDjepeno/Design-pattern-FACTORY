import { Truck } from './../src/classes/Truck';
import { RunLogistique } from '../src/RunLogistique';
import { RoadLogistique } from '../src/classes/RoadLogistics';
import { SeaLogistique } from '../src/classes/SeaLogistics';
import { ITransport } from '../src/interface/ITransport';
import { Ship } from '../src/classes/Ship';
describe('RunLogistique', () => {

  it('should be possible to have a classe roadLogistique and method create Transport', () => {
    let roadLogistique: RoadLogistique = new RoadLogistique()
    let method = roadLogistique.createTransport()
    expect(roadLogistique).toBeTruthy()
    expect(method).toBeTruthy()
  })
  it('should be possible to have a classe seaLogistique and method create Transport', () => {
    let seaLogistique: SeaLogistique = new SeaLogistique()
    let method = seaLogistique.createTransport()
    expect(seaLogistique).toBeTruthy()
    expect(method).toBeTruthy()
  })
  it('should be possible to have a classe Ship implement ITransport and method create deliver return "Livrer par la mer dans un conteneur."', () => {
    let ship: ITransport = new Ship()
    let method = ship.deliver()
    expect(ship).toBeTruthy()
    expect(method).toBe("Livrer par la mer dans un conteneur.")
  })
  it('should be possible to have a classe Truck implement ITransport and method create deliver return "Livrer par la route dans une boite"', () => {
    let truck: ITransport = new Truck()
    let method = truck.deliver()
    expect(truck).toBeTruthy()
    expect(method).toBe("Livrer par la route dans une boite")
  })



  it("should be return 'Livrer par la route dans une boite'", () => {
    const run = new RunLogistique()
    const result = run.main1()
    
    expect(result).toBe('Livrer par la route dans une boite')
  })
  it("should rbe eturn 'Livrer par la route dans une boite'", () => {
    const run = new RunLogistique()
    const result = run.main2()
    
    expect(result).toBe('Livrer par la mer dans un conteneur.')
  })
})