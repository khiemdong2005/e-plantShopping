import {
  useSelector,
  useDispatch,
} from "react-redux";

import { removeFromCart } from "../redux/CartSlice";

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Total Items: {cartItems.length}</h2>

      <h2>Total Price: ${totalPrice}</h2>

      {cartItems.map((item, index) => (
        <div key={index}>
          <img
            src={item.image}
            alt={item.name}
            width="150"
          />

          <h3>{item.name}</h3>

          <p>${item.price}</p>

          <button
            onClick={() =>
              dispatch(removeFromCart(index))
            }
          >
            Remove
          </button>
        </div>
      ))}

      <button
        onClick={() => alert("Coming Soon")}
      >
        Checkout
      </button>
    </div>
  );
}

export default CartItem;