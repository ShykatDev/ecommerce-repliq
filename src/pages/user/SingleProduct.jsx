import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../utils";
import { FaStar } from "react-icons/fa6";
import toast from "react-hot-toast";
import { actions } from "../../actions";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context";
import { BsCartDashFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa6";

const SingleProduct = () => {
  const { id } = useParams();
  const product = getSingleProduct(id);
  const { title, description, rating, thumbnail, price, tag } = product;

  const review = Math.round(rating);

  const [inCart, setInCart] = useState(false);
  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    state.cart.some((element) => {
      if (element.id === +id) {
        setInCart(true);
      }
    });
  }, [id, state.cart]);

  const handleAddToCart = () => {
    if (!inCart) {
      dispatch({
        type: actions.CART_ADDED,
        item: { ...product, cartQuantity: 1 },
      });

      toast.success("Product added to cart");
    }
  };

  const handleRemove = () => {
    dispatch({
      type: actions.CART_REMOVED,
      id: product.id,
    });

    setInCart(false);
    toast.success("Product removed from cart");
  };

  return (
    <div className="mt-[10vh] container flex items-center justify-between min-h-fit">
      <div className="w-1/2 flex justify-center ">
        <img src={thumbnail} alt="plant" />
      </div>
      <div className="w-1/2 p-3 sm:p-6 md:p-10 gap-2 flex flex-col items-start bg-white bg-opacity-50 rounded-xl">
        {tag === "new" && (
          <p className="hidden sm:block text-sm px-2 py-1 bg-lime-300 rounded-md font-medium">
            New
          </p>
        )}
        <h2 className="font-semibold text-title text-3xl">{title}</h2>
        <p className="text-text">{description}</p>

        <div className="flex gap-1 items-center">
          {[...Array(review)].map((_, i) => {
            return (
              <span key={i}>
                <FaStar className="text-amber-500" />
              </span>
            );
          })}
          <p className=" font-medium">{rating} reviews</p>
        </div>

        <div className="mt-3 flex w-3/4 gap-3">
          <p className="w-1/2 py-2 text-center rounded-md border border-lime-600 text-lime-600 font-semibold text-xl">
            {price} tk
          </p>
          {inCart ? (
            <button
              onClick={handleRemove}
              className="w-1/2 py-2 bg-title text-neutral-200 rounded-md flex items-center justify-center gap-2"
            >
              <BsCartDashFill /> Remove from cart
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="w-1/2 py-2 bg-lime-400 rounded-md flex items-center justify-center gap-2 font-semibold"
            >
              <FaCartPlus /> Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
