import { FaBagShopping, FaCircleCheck } from "react-icons/fa6";
import { header1, header2 } from "../../assets";

const Header = () => {
  return (
    <div className="container mt-[10vh] flex items-center justify-between gap-10 flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 xl:w-2/5">
        <div className=" flex gap-3 flex-wrap">
          <div className="p-2 border border-borderColor rounded-md flex items-center gap-3 text-xs xl:text-sm">
            <FaCircleCheck />
            <p className="">Super fast delivery</p>
          </div>
          <div className="p-2 border border-borderColor rounded-md flex items-center gap-3 text-xs xl:text-sm">
            <FaCircleCheck />
            <p className="">Authenthic product</p>
          </div>
          <div className="p-2 border border-borderColor rounded-md flex items-center gap-3 text-xs xl:text-sm">
            <FaCircleCheck />
            <p className="">Value for money</p>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl mt-6 font-bold text-lime-600 uppercase">
          Megamart
        </h2>
        <p className="mt-1 text-textLight font-regular text-xs lg:text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          dignissimos facilis aperiam. Unde consectetur culpa veritatis quos
          esse et laborum. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Pariatur dignissimos facilis aperiam.
        </p>
        <div className="mt-6 flex gap-6">
          <button className="px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-2.5 text-sm sm:text-base border rounded-md flex items-center gap-2 duration-300 bg-neutral-900 text-neutral-100 hover:shadow-lg">
            <FaBagShopping /> Shop Now
          </button>
        </div>
      </div>
      <div className="w-1/2 grid grid-cols-3 items-end gap-6 h-full">
        <img
          src={header1}
          alt="header1"
          className="col-span-2 h-full object-cover border border-neutral-400 rounded-lg"
        />
        <img
          src={header2}
          alt="header2"
          className="w-full object-cover border border-neutral-400 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
