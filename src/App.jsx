import './App.css';
import Header from './components/navbar/Header';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='bg-[#FFFFFF]'>
      <Router>
        <Header />
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
