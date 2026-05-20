import "./App.css";

import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

import { useSelector } from "react-redux";

function App() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <nav>
        <h1>Paradise Nursery</h1>

        <button>Home</button>

        <button>Plants</button>

        <button>
          Cart ({cartItems.length})
        </button>
      </nav>

      <ProductList />

      <CartItem />
    </div>
  );
}

export default App;