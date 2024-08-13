import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Page/About';
import Home from './Page/Home';
import Contact from './Page/Contact';
import Menu from './Page/Menu';
import Pagenotfound from './Page/Pagenotfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='*' element={<Pagenotfound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
