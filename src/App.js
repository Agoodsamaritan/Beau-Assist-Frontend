import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
} 