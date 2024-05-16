import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage"
import Store from './components/Store';
import About from './components/About';
import Navbars from './components/Navbar';
import ShoppingCartProvider from './context/ShoppingCartContext';

function App() {
  return (
    
    <ShoppingCartProvider>
      <BrowserRouter>
      <Navbars/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
    
  )

}

export default App;
