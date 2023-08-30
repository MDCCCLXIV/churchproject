import './App.css';
import Header from './components/navbar/Header';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import { gsap,Power3 } from "gsap";

function App() {

  let tl = new gsap.timeline()
  let ease = Power3.easeInOut()
  return (
    <div className='bg-slate-50'>
      <Router>
        <Header timeline={tl} ease={ease} />
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/churchproject/menu' element={<Menu  />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
