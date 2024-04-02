import { useContext, useState } from "react";
import { CartContext } from "../../context";
import CartItem from "../../components/ui/CartItem";
import { actions } from "../../actions";
import Confirmation from "../../components/ui/Confirmation";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";

const Cart = () => {
  const { state, dispatch, delConfirm, setDelConfirm } =
    useContext(CartContext);
  const [delPopup, setDelPopup] = useState(null);
  const { auth } = useAuth();
  const { setCheckout, checkout } = useContext(CartContext);

  let totalPrice = state.cart.reduce(
    (total, el) => total + el.price * el.cartQuantity,
    0
  );

  let content;

  const deleteItem = (itemID) => {
    dispatch({
      type: actions.CART_REMOVED,
      id: itemID,
    });
  };

  const increaseItem = (item) => {
    dispatch({
      type: actions.CART_ITEM_INCREASE,
      item,
    });
  };

  const decreaseItem = (item) => {
    dispatch({
      type: actions.CART_ITEM_DECREASE,
      item,
    });
  };

  const handleCheckout = (element) => {
    if (auth === undefined) toast.error("Please login first");
    setCheckout({ ...checkout, mode: "multiple", items: element });
  };

  if (state.cart.length === 0) {
    content = (
      <div className="container mt-[10vh] min-h-[20vh]">
        <h2 className="text-4xl font-medium mb-6">Cart Items</h2>

        <p className="text-neutral-400">No item found in the cart!</p>
      </div>
    );
  } else {
    content = (
      <div className="container mt-[10vh]">
        {/* Delete confirmation */}
        <Confirmation delPopup={delPopup} />

        <h2 className="text-4xl font-medium mb-6">Cart Items</h2>

        <div className="flex flex-col-reverse lg:flex-row gap-10 items-start">
          <div className="w-full lg:w-[80%] rounded-xl">
            <div className="border rounded-xl flex justify-between items-center">
              <p className="font-medium">
                Total Item:{" "}
                <span className="text-lime-500 text-xl">
                  {state.cart.length}
                </span>
              </p>
              <div>
                <button
                  onClick={() => {
                    setDelConfirm({
                      ...delConfirm,
                      status: true,
                      mode: "deleteAll",
                    });
                  }}
                  className="underline text-red-500"
                >
                  Delete All
                </button>
              </div>
            </div>

            <div className="">
              {state.cart.length > 0 &&
                state.cart.map((el) => {
                  return (
                    <CartItem
                      cartElement={el}
                      key={el.id}
                      handleDelete={deleteItem}
                      handleIncrease={increaseItem}
                      handleDecrease={decreaseItem}
                      setDelPopup={setDelPopup}
                    />
                  );
                })}
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-[20%] border p-3 rounded-lg">
            <p className="text-xl font-medium">Summury Order</p>
            <div className="flex justify-between items-center my-3">
              <p>Subtotal:</p>
              <p className="text-xl font-medium">$ {totalPrice}</p>
            </div>

            <Link
              to="/checkout"
              onClick={() => handleCheckout(state.cart)}
              className="w-full block text-center bg-neutral-950 rounded-full py-3 text-neutral-100"
            >
              Buy Now ({state.cart.length})
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default Cart;
