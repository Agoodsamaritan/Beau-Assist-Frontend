import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';
import Home from './components/Home';
import Cart from './components/Cart';
import Modal from './components/Modal';
import Footer from './components/Footer';
import Results from './components/Results';
import Quiz from './components/Quiz'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './service/reducers/index'


export default function App() {

  return (
    <div>

      <Provider store={store}>
        <BrowserRouter>
          <Navbar /> 
          <Modal />
          
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/modal" element={<Modal />} />
            {/* We need to figure out how to pass the product type or what we decide would be the quiz result. */}
            <Route path='/results' element={<Results type="blush" />} />
            <Route path='/quiz' element={<Quiz />} />
          </Routes>
        </BrowserRouter>
      
        {/* <Modal /> */}
        <Footer />
      </Provider>
    </div>
  )
} 