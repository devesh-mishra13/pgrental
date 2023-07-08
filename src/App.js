import './App.css';
import Header from './components/Header';
import CarouselFade from './components/Main';
import Mainsidetext from './components/Mainsidetext';
import Card01 from './components/card01';
import Card02 from './components/card02';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='Main' style={{display:"flex"}}>
        <div style={{width:"70vw",height:"50vh"}}>
          <CarouselFade/>
        </div>
        <div>
         <Mainsidetext/>
        </div>
      </div>
      <div style={{width:"100vw",height:"30vh",display:"flex"}}>
          <Card01/>
          <Card02/>
        </div>
    </div>
  );
}

export default App;
