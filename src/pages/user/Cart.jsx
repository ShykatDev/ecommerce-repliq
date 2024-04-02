import { useContext } from "react";
import { CartContext } from "../../context";
import CartItem from "../../components/ui/CartItem";
import { actions } from "../../actions";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  let content;

  const deleteItem = (itemID) => {
    dispatch({
      type: actions.CART_REMOVED,
      id: itemID,
    });
  };

  if (state.cart.length === 0) {
    content = (
      <div className="container mt-[10vh] min-h-[20vh]">
        <h2 className="text-4xl font-semibold mb-6">Cart Items</h2>

        <p className="text-neutral-400">No item found in the cart!</p>
      </div>
    );
  } else {
    content = (
      <div className="container mt-[10vh]">
        <h2 className="text-4xl font-semibold mb-6">Cart Items</h2>

        <div className="flex flex-col-reverse lg:flex-row gap-10 items-start">
          <div className="w-full lg:w-[80%] rounded-xl">
            <div className="border rounded-xl flex justify-between items-center">
              <p className="font-semibold">
                Total Item:{" "}
                <span className="text-lime-500 text-xl">
                  {state.cart.length}
                </span>
              </p>
              <div>
                <button className="underline text-red-500">Delete All</button>
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
                    />
                  );
                })}
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-[20%] border p-3 rounded-lg">
            <p className="text-xl font-semibold">Summury Order</p>
            <div className="flex justify-between items-center my-3">
              <p>Subtotal:</p>
              <p className="text-xl font-semibold">$ price</p>
            </div>

            <button className="w-full bg-neutral-950 rounded-full py-3 text-neutral-100">
              Buy Now ({state.cart.length})
            </button>
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default Cart;
