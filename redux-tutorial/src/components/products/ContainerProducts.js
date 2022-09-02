import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/product/productActions";

function ContainerProducts() {
  const dispatch = useDispatch();

  const productsData = useSelector((state) => state.product);
  const { data, error, loading } = productsData;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <div className="flex justify-center w-full py-2 ">
        <h1 className="px-10 py-6 text-3xl text-center border-b border-gray-400 rounded-sm">
          all products
        </h1>
      </div>
      {loading ? (
        <div className="flex items-center justify-center w-full h-[100vh]">
          <h className="text-6xl">...LOADING</h>
        </div>
      ) : error ? (
        <p>error</p>
      ) : (
        <>
          {" "}
          <div className="bg-white">
            <div className="max-w-2xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Customers also purchased
              </h2>

              <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {data.length &&
                  data?.map((product) => (
                    <div key={product.id} className="relative group">
                      <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:aspect-none lg:h-80">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="flex justify-between mt-4">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            {product.category}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.title}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          ;
        </>
      )}
    </div>
  );
}

export default ContainerProducts;
