import { useEffect, useState } from "react";
import ProductCard from "../../components/ui/ProductCard";
import { products } from "../../mock/products.json";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Products = () => {
  const [filterKey, setFilterKey] = useState("all");
  const [loading, setLoading] = useState(false);
  const [filterProducts, setFilterProducts] = useState(products);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (filterKey === "new") {
        const newProducts = products.filter((el) => el.tag === "new");
        setFilterProducts(newProducts);
      } else {
        setFilterProducts(products);
      }

      setLoading(false);
    }, 1000);
  }, [filterKey]);

  return (
    <div className="container mt-[10vh]">
      <h2 className="text-xl font-semibold md:text-3xl">
        All Products
        <span className="text-neutral-400"> Get the products you need</span>
      </h2>

      <div className="mt-6 flex justify-between items-start">
        <div className="w-[20%]">
          <h2 className="text-xl font-semibold">Filters</h2>
          <ul className="mt-3">
            <li
              onClick={() => setFilterKey("all")}
              className={`cursor-pointer duration-300 hover:underline font-regular ${
                filterKey === "all" && "text-lime-600 underline"
              }`}
            >
              All items
            </li>
            <li
              onClick={() => setFilterKey("new")}
              className={`cursor-pointer duration-300 hover:underline font-regular flex items-center gap-2 ${
                filterKey === "new" && "text-lime-600 underline"
              }`}
            >
              New items{" "}
              <span className="hidden sm:block text-sm px-2 py-1 bg-lime-300 text-title rounded-md font-medium">
                New
              </span>
            </li>
          </ul>
        </div>
        {loading ? (
          <div className="w-full h-[50vh] flex justify-center items-center">
            <p className="flex justify-center items-center gap-2">
              <AiOutlineLoading3Quarters className="animate-spin" /> Loading...
            </p>
          </div>
        ) : (
          <div className="w-[80%] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {filterProducts.map((el, i) => {
              return <ProductCard key={i} product={el} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
