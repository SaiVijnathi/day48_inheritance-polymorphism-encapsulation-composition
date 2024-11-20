import './App.css';
import FiveG from './classes/FiveG';
import FourG from './classes/FourG';

function App() {

  return (
    <div className="App">
      <h1>Inheritance, Polymorphism, Encapsulation and Composition</h1>

      <button onClick={()=>{
        console.clear();
        let G4 = new FourG();
        G4.speed();
        G4.Latency();
        G4.Energy_Efficiency();
        G4.Coverage();
      }}>4G</button>

      <button onClick={()=>{
        console.clear();
        let G5 = new FiveG();
        G5.speed();
        G5.Latency();
        G5.Energy_Efficiency();
        G5.Coverage();
      }}>5G</button>

    </div>
  );
}

export default App;
