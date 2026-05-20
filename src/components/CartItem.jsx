import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

function CartItem() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Total Cart Amount: ${totalAmount}</h2>

      {cartItems.map((item) => (
        <div key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            width="150"
          />

          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <p>
            Total: $
            {item.price * item.quantity}
          </p>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity + 1,
                })
              )
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity:
                    item.quantity > 1
                      ? item.quantity - 1
                      : 1,
                })
              )
            }
          >
            -
          </button>

          <button
            onClick={() =>
              dispatch(removeItem(item.id))
            }
          >
            Delete
          </button>
        </div>
      ))}

      <button
        onClick={() =>
          alert("Coming Soon")
        }
      >
        Checkout
      </button>

      <button>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;