import { FaMinus, FaPlus, FaStar, FaTrash } from "react-icons/fa6";

const CartItem = ({ cartElement, handleDelete }) => {
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
  return (
    <div className="mt-6 border p-6 flex flex-col md:flex-row justify-between md:items-center rounded-lg border-b border-borderColor bg-white bg-opacity-50">
      <div className="flex gap-6 items-center">
        <img src={thumbnail} alt={title} className="w-20 h-20 rounded-lg" />
        <div>
          <div className="flex items-center gap-2">
            {tag === "new" && (
              <div className="flex gap-2">
                <small className="px-4 py-1 rounded-full font-semibold border bg-lime-300">
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

          <h1 className="pt-3 font-semibold">{title}</h1>
          <p className="text-text line-clamp-1 w-3/5">{description}</p>
        </div>
      </div>
      <div className="md:text-end flex md:flex-col justify-between md:justify-start mt-6 md:mt-0">
        <div>
          <small>Price</small>
          <p className="font-semibold text-xl">{price} Tk</p>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <span
            // onClick={() => {
            //   setDeleteConfim({
            //     ...deleteConfim,
            //     status: true,
            //     mode: "deleteSingle",
            //   });
            //   setItemToDelete(cartElement);
            // }}
            onClick={() => {
              handleDelete(id);
            }}
          >
            <FaTrash className="text-red-500 duration-300 hover:text-neutral-800 cursor-pointer" />
          </span>

          <div className="flex items-center gap-1 bg-white border border-borderColor overflow-hidden rounded-md">
            <div
              className="p-2 bg-white cursor-pointer"
              //   onClick={() => handleDec(cartElement)}
            >
              <FaMinus />
            </div>
            <div className="px-4 bg-white">{cartQuantity}</div>
            <div
              className="p-2 bg-white cursor-pointer"
              //   onClick={() => handleInc(cartElement)}
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
