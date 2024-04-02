import { useEffect } from "react";
import { products as mainProducts } from "../../mock/products.json";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(mainProducts);
  }, []);
  return (
    <div>
      <h2 className="mb-6 font-medium text-lg">Products Lists</h2>

      <div className="flex justify-between items-start gap-6">
        <div className="w-3/5 flex items-center">
          <table className="w-full text-sm text-left text-gray-600 border border-borderColor rounded-lg">
            <thead className="text-xs text-gray-700 uppercase bg-white bg-opacity-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.slice(0, 5).map((p, i) => {
                return (
                  <tr key={i} className="bg-white rounded-3xl px-4 h-full">
                    <td>
                      <img src={p.thumbnail} alt="product" width={100} />
                    </td>

                    <td className="">{p.title}</td>
                    <td className="">{p.price} tk</td>
                    <td className="flex items-center gap-2 h-full py-12">
                      <MdModeEdit />
                      <MdDelete />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
