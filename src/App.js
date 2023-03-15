import './App.css';
import Navbar from './compoents/Navbar';
import Products from './compoents/Products';
import Product from './compoents/Product';
import Home from './compoents/Home';
import Cart from './compoents/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './service/reducers/index'


export default function App() {

  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar /> 
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
} 