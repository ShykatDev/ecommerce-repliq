import { useContext } from "react";
import { FaMinus, FaPlus, FaStar, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../../context";

const CartItem = ({
  cartElement,
  handleIncrease,
  handleDecrease,
  setDelPopup,
}) => {
  const {
    id,
    title,
    thumbnail,
    rating,
    tag,
    price,
    description,
    cartQuantity,
  } = cartElement;

  const { delConfirm, setDelConfirm } = useContext(CartContext);

  return (
    <div className="mt-6 border p-6 flex flex-col md:flex-row justify-between md:items-center rounded-lg border-b border-borderColor bg-white bg-opacity-50">
      <div className="flex gap-6 items-center">
        <img src={thumbnail} alt={title} className="w-20 h-20 rounded-lg" />
        <div>
          <div className="flex items-center gap-2">
            {tag === "new" && (
              <div className="flex gap-2">
                <small className="px-4 py-1 rounded-full font-medium border bg-lime-300">
                  {tag}
                </small>

                <span>|</span>
              </div>
            )}
            <p className="flex items-center gap-1">
              {" "}
              <FaStar className="text-amber-400" /> {rating} reviews
            </p>
          </div>

          <Link to={`/product/${id}`} className="pt-3 font-medium">
            {title}
          </Link>
          <p className="text-text line-clamp-1 w-3/5">{description}</p>
        </div>
      </div>
      <div className="md:text-end flex md:flex-col justify-between md:justify-start mt-6 md:mt-0">
        <div>
          <small>Price</small>
          <p className="font-medium text-xl">{price * cartQuantity} Tk</p>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <span
            onClick={() => {
              setDelPopup(cartElement);
              setDelConfirm({
                ...delConfirm,
                status: true,
                mode: "deleteSingle",
              });
            }}
          >
            <FaTrash className="text-red-500 duration-300 hover:text-neutral-800 cursor-pointer" />
          </span>

          <div className="flex items-center gap-1 bg-white border border-borderColor overflow-hidden rounded-md">
            <button
              disabled={cartQuantity <= 1}
              className="p-2 bg-white disabled:opacity-20"
              onClick={() => handleDecrease(cartElement)}
            >
              <FaMinus />
            </button>
            <div className="px-4 bg-white">{cartQuantity}</div>
            <div
              className="p-2 bg-white cursor-pointer"
              onClick={() => handleIncrease(cartElement)}
            >
              <FaPlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
