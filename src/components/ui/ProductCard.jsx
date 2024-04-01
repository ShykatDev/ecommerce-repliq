import { Link } from "react-router-dom";
import { FaCartShopping, FaStar } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  const { id, title, description, rating, thumbnail, price, tag } = product;

  const review = Math.round(rating);

  return (
    <div className="px-1 md:px-2 pb-3 md:pb-6">
      <div className="bg-white bg-opacity-50 hover:bg-opacity-75 duration-300 border-neutral-300 border rounded-xl overflow-hidden">
        <div className="relative">
          <div className="flex justify-center items-center min-h-[18rem] border-b border-neutral-300">
            <Link to={`/product/${id}`} className="h-full outline-none">
              <img src={thumbnail} alt="" className="h-full object-cover" />
            </Link>
          </div>
          <div className="w-full flex absolute top-3 right-0 px-3 justify-end sm:justify-between items-center">
            {tag === "new" ? (
              <p className="hidden sm:block text-sm px-2 py-1 bg-lime-300 rounded-md font-medium">
                New
              </p>
            ) : (
              <p></p>
            )}

            <div className="flex justify-between items-center gap-1 flex-wrap">
              <div className="cursor-pointer p-2 bg-white rounded-full border z-20">
                <FaCartShopping className="" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 flex flex-col gap-1">
          <p className="text-lg font-semibold text-lime-600"> {price} Tk</p>

          <Link
            to={`/product/${id}`}
            className="text-lg font-medium line-clamp-1"
          >
            {title}
          </Link>

          <div className="flex gap-1 items-center">
            {[...Array(review)].map((_, i) => {
              return (
                <span key={i}>
                  <FaStar className="text-xs text-amber-500" />
                </span>
              );
            })}
            <p className="text-sm font-medium">{rating}</p>
          </div>

          <p className="line-clamp-1 sm:line-clamp-2 text-sm text-textLight">
            {description}
          </p>
          <button className="w-full rounded-full border border-lime-600 hover:bg-lime-600 mt-3 py-2 duration-300 hover:text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
