import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../utils";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa6";

const SingleProduct = () => {
  const { id } = useParams();
  const product = getSingleProduct(id);
  const { title, description, rating, thumbnail, price, tag } = product;

  const review = Math.round(rating);

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

        <div className="my-4 flex items-center bg-white border border-borderColor rounded-lg overflow-hidden">
          <div className="size-14 flex justify-center items-center bg-white cursor-pointer border-r border-borderColor">
            <FaMinus />
          </div>
          <div className="size-14 flex justify-center items-center bg-white text-xl">
            0
          </div>
          <div className="size-14 flex justify-center items-center bg-white cursor-pointer border-l border-borderColor">
            <FaPlus />
          </div>
        </div>

        <div className="flex w-1/2 gap-3">
          <p className="w-1/2 py-2 text-center rounded-md border border-lime-600 text-lime-600 font-semibold text-xl">
            {price} tk
          </p>
          <button className="w-1/2 py-2 bg-title rounded-md text-neutral-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
