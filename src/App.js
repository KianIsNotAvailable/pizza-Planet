
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';
import { Footer } from './components/footer';
import { Checkout } from './pages/checkout/checkout'
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
       <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Shop />}/>
          <Route path='/cart' element={ <Cart />}/>
          <Route path='/payment' element={ <Checkout />}/>
        </Routes>
      </Router>
      </ShopContextProvider>
      <Footer />
    </div>
  );
}

export default App;
