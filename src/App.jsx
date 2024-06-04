// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
// eslint-disable-next-line no-unused-vars
import SelectedProduct from './Pages/selectedProduct/SelectedProduct';
import Cart from './Pages/Cart/Cart';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SelectedProduct handleAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
