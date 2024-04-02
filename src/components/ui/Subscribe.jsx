const Subscribe = ({ role }) => {
  if (role === "admin") {
    return null;
  }
  return (
    <div className="container my-10">
      <div className=" bg-gradient-to-r from-neutral-900 to-neutral-700 rounded-2xl py-16 px-10 flex justify-between md:items-end flex-col md:flex-row gap-10">
        <div className="">
          <h1 className="text-5xl font-semibold text-gray-100">
            Ready to Get <br /> Our New Stuff?
          </h1>

          <div className="mt-10 bg-gray-100 flex justify-between items-center py-3 px-4 rounded-full">
            <input
              type="text"
              className="bg-transparent w-[80%] outline-none py-2 pl-2"
              placeholder="Enter email"
            />
            <button className="px-5 py-2 bg-neutral-950 rounded-full text-gray-50">
              Send
            </button>
          </div>
        </div>
        <div className="md:w-[25%]">
          <h2 className="text-xl text-neutral-100">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p className="text-sm text-neutral-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            modi a quasi eos amet at!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
