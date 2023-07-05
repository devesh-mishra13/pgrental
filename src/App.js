import './App.css';
import Header from './components/Header';
import CarouselFade from './components/Main';
import Mainsidetext from './components/Mainsidetext';
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
    </div>
  );
}

export default App;
