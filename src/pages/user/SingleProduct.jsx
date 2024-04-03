import { Link, useParams } from "react-router-dom";
import { getSingleProduct } from "../../utils";
import { FaStar } from "react-icons/fa6";
import toast from "react-hot-toast";
import { actions } from "../../actions";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context";
import { BsCartDashFill } from "react-icons/bs";
import { FaCartPlus, FaBagShopping } from "react-icons/fa6";
import { useAuth } from "../../hooks/useAuth";

const SingleProduct = () => {
  const { id } = useParams();
  const product = getSingleProduct(id);
  const { title, description, rating, thumbnail, price, tag } = product;

  const review = Math.round(rating);
  const { auth } = useAuth();
  const [inCart, setInCart] = useState(false);
  const { state, dispatch, checkout, setCheckout } = useContext(CartContext);

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

  const handleCheckout = (element) => {
    if (auth === undefined) toast.error("Please login first");
    setCheckout({ ...checkout, mode: "single", items: element });
  };

  return (
    <div className="mt-[10vh] container flex flex-col md:flex-row items-center justify-between min-h-fit">
      <div className="md:w-1/2 flex justify-center ">
        <img src={thumbnail} alt="plant" />
      </div>
      <div className="md:w-1/2 p-3 sm:p-6 md:p-10 gap-2 flex flex-col items-start bg-white bg-opacity-50 rounded-xl">
        {tag === "new" && (
          <p className="text-sm px-2 py-1 bg-lime-300 rounded-md font-medium">
            New
          </p>
        )}
        <div className="w-full flex justify-between items-center">
          <h2 className="font-medium text-title text-3xl">{title}</h2>
          <p className="py-2 text-center rounded-md text-lime-600 font-bold text-2xl">
            {price} tk
          </p>
        </div>
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

        <div className="mt-3 flex w-full md:w-3/4 gap-3">
          {inCart ? (
            <button
              onClick={handleRemove}
              className="w-1/2 text-sm md:text-base py-2 bg-title text-neutral-200 rounded-md flex items-center justify-center gap-2"
            >
              <BsCartDashFill /> Remove from cart
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="w-1/2 text-sm md:text-base py-2 bg-lime-400 rounded-md flex items-center justify-center gap-2 font-medium"
            >
              <FaCartPlus /> Add to cart
            </button>
          )}

          <Link
            to="/checkout"
            onClick={() => handleCheckout(product)}
            className="flex items-center justify-center rounded-md gap-2 w-1/2 bg-title font-medium text-neutral-200"
          >
            <FaBagShopping />
            <span>Buy Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
