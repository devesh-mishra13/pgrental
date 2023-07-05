import './App.css';
import Header from './components/Header';
import CarouselFade from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='Main'>
        <div style={{width:"70%"}}>
          <CarouselFade/>
        </div>
      </div>
    </div>
  );
}

export default App;
