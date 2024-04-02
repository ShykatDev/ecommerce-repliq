import { useAuth } from "../../hooks/useAuth";
import { FaBox, FaUser } from "react-icons/fa6";
import { products } from "../../mock/products.json";
import { GiBoxUnpacking } from "react-icons/gi";

const Dashboard = () => {
  const { registerUser } = useAuth();

  return (
    <>
      <h2 className="font-medium text-3xl">Monitor health of your business</h2>
      <p className="text-sm w-1/2 text-neutral-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet odio
        incidunt aperiam facilis perferendis odit libero.
      </p>
      <div className="mt-6 flex justify-start items-center gap-6">
        <div className="size-64 p-10 flex flex-col justify-between items-start border border-borderColor bg-gradient-to-r from-pink-100 to-gray-200 rounded-3xl">
          <div className="w-full flex justify-between items-center">
            <h2 className="">Customers</h2>
            <FaUser />
          </div>
          <p className="text-5xl font-medium mb-2">{registerUser.length}</p>
        </div>
        <div className="size-64 p-10 flex flex-col justify-between items-start border border-borderColor bg-gradient-to-r from-indigo-100 to-green-100 bg-opacity-50 rounded-3xl">
          <div className="w-full flex justify-between items-center">
            <h2 className="">Products</h2>
            <FaBox />
          </div>
          <p className="text-5xl font-medium mb-2">{products.length}</p>
        </div>
        <div className="size-64 p-10 flex flex-col justify-between items-start border border-borderColor bg-gradient-to-r from-lime-100 to-yellow-100 bg-opacity-50 rounded-3xl">
          <div className="w-full flex justify-between items-center">
            <h2 className="">Orders</h2>
            <GiBoxUnpacking />
          </div>
          <p className="text-5xl font-medium mb-2">0</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
