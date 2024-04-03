import { useContext, useState } from "react";
import { logo } from "../../assets";
import { CartContext } from "../../context";
import { FaApplePay, FaCircleCheck } from "react-icons/fa6";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Checkout = () => {
  const { checkout } = useContext(CartContext);
  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    address: "",
    mobile: "",
  });

  const navigate = useNavigate();
  let totalPay;

  if (checkout.mode === "single") {
    totalPay = checkout.items.price + 80;
  }

  if (checkout.mode === "multiple") {
    totalPay =
      checkout.items.reduce(
        (total, item) => total + item.price * item.cartQuantity,
        0
      ) + 80;
  }

  if (checkout.items === null) {
    return <Navigate to="/products" />;
  }

  const handleChange = (e) => {
    const { value, name } = e.target;

    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleConfirm = () => {
    if (
      info.fullName.length === 0 &&
      info.address.length === 0 &&
      info.mobile.length === 0 &&
      info.email.length === 0
    ) {
      toast.error("Fields shouldn't empty");
    } else {
      setLoading(true);

      setTimeout(() => {
        setConfirm(true);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <>
      {confirm && (
        <div className="fixed w-screen h-screen top-0 left-0 z-50 flex justify-center items-center bg-white bg-opacity-50 backdrop-blur-md">
          <div className="p-6 md:px-20 md:py-10 bg-white rounded-lg border border-borderColor">
            <div className="flex items-center gap-2 text-3xl">
              <FaCircleCheck className="text-green-500" />
              <h2 className="font-medium">Order Received</h2>
            </div>
            <div className="mt-4">
              <h2 className="hidden md:block">Shipping Address</h2>
              <table className="hidden md:block overflow-x-auto mt-5 text-sm text-left rtl:text-right text-gray-600 border border-borderColor">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Mobile
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">{info.fullName}</td>
                    <td className="px-6 py-4">{info.address}</td>
                    <td className="px-6 py-4">{info.mobile}</td>
                    <td className="px-6 py-4">{info.email}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex justify-center md:justify-end">
              <p
                onClick={() => navigate("/")}
                className="px-4 py-1 bg-red-500 rounded-md text-white font-medium cursor-pointer"
              >
                Close
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="container mt-[10vh] min-h-[70vh] flex justify-center items-center">
        <div className="md:w-4/5 bg-white bg-opacity-50 border border-borderColor rounded-xl overflow-hidden p-6 flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="w-full md:w-1/2 pr-6 border-b pb-10 md:pb-0 md:border-r border-neutral-500">
            <div className="flex items-center gap-3 mb-10">
              <img src={logo} alt="logo" width={25} />
              <p className="text-xl font-medium">Megamart</p>
            </div>

            <p>Pay Amount</p>
            <h2 className="text-4xl font-medium">
              {checkout.mode === "single" && checkout.items.price} Tk
            </h2>

            {checkout.mode === "single" && (
              <div className="flex justify-start items-start mt-10 mb-4 gap-3">
                <div className="p-2 size-14 bg-white rounded-md">
                  <img
                    src={checkout.items.thumbnail}
                    alt={checkout.items.title}
                  />
                </div>
                <div className="flex items-start justify-between w-full">
                  <div>
                    <h2 className="font-medium">{checkout.items.title}</h2>
                    <p>Qty: 1</p>
                  </div>

                  <p className="font-medium">{checkout.items.price} tk</p>
                </div>
              </div>
            )}

            {checkout.mode === "multiple" &&
              checkout.items.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex justify-start items-start mt-10 mb-4 gap-3"
                  >
                    <div className="p-2 size-14 bg-white rounded-md">
                      <img src={item.thumbnail} alt={item.title} />
                    </div>
                    <div className="flex items-start justify-between w-full">
                      <div>
                        <h2 className="font-medium">{item.title}</h2>
                        <p>Qty: {item.cartQuantity}</p>
                      </div>

                      <p className="font-medium">{item.price} tk</p>
                    </div>
                  </div>
                );
              })}

            <div className="border-t border-borderColor pl-14 pt-3 flex justify-between items-center">
              <p>Subtotal</p>
              {checkout.mode === "single" ? (
                <p className="font-medium">{checkout.items.price} tk</p>
              ) : (
                <p className="font-medium">
                  {checkout.items.reduce(
                    (total, item) => total + item.price * item.cartQuantity,
                    0
                  )}
                </p>
              )}
            </div>
            <div className="border-t my-4 border-borderColor pl-14 pt-3 flex justify-between items-center">
              <p className="text-neutral-400">Shipping cost</p>
              <p className="text-neutral-400">80 tk</p>
            </div>
            <div className="border-t border-borderColor pl-14 pt-3 flex justify-between items-center">
              <p className="font-medium">Total Due</p>
              <p className="font-bold">{totalPay} tk</p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <button
              disabled
              className="w-full border border-neutral-700 rounded-md flex justify-center cursor-not-allowed"
            >
              <FaApplePay className="text-5xl" />
            </button>

            <div className="mt-6">
              <p className="font-medium">Shipping Information</p>
              <form className="mt-3">
                <input
                  type="email"
                  className="input-field mb-3"
                  onChange={handleChange}
                  value={info.email}
                  name="email"
                  placeholder="Email Address"
                />
                <input
                  type="text"
                  className="input-field mb-3"
                  onChange={handleChange}
                  value={info.fullName}
                  name="fullName"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  className="input-field mb-3"
                  onChange={handleChange}
                  value={info.address}
                  name="address"
                  placeholder="Address"
                />
                <input
                  type="number"
                  className="input-field mb-3"
                  onChange={handleChange}
                  value={info.mobile}
                  name="mobile"
                  placeholder="Mobile Number"
                />
                <div className="flex justify-start items-center gap-2">
                  <input type="checkbox" />
                  <small>Save info for next orders</small>
                </div>
                <button
                  type="button"
                  onClick={handleConfirm}
                  className="w-full py-2.5 bg-title text-neutral-200 font-medium rounded-md mt-3"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <AiOutlineLoading3Quarters className="animate-spin" />{" "}
                      Loading
                    </span>
                  ) : (
                    `Pay ${totalPay} tk`
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
