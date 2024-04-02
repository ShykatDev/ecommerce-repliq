import { products } from "../../mock/products.json";
import ProductCard from "./ProductCard";

const PopularProducts = () => {
  const newProducts = products.filter((product) => product.tag === "new");
  return (
    <div className="container mt-10">
      <h2 className="text-xl font-medium md:text-3xl">
        New Products
        <span className="text-neutral-400"> Get the products you need</span>
      </h2>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {newProducts.map((product, i) => {
          return <ProductCard product={product} key={i} />;
        })}
      </div>
    </div>
  );
};

export default PopularProducts;
