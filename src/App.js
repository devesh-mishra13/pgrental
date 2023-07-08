import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Business from './components/Business';
import Rental from './components/Rental';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Business' element={<Business/>} />
          <Route path='/Rental' element={<Rental/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
