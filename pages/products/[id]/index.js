import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../../components/Header";

const ProductId = () => {
  const [uniqueItem, setUniqueItem] = useState([]);

  const router = useRouter();

  const fetchUniqueProduct = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/products/${router.query.id}`
      );
      const data = await response.json();

      setUniqueItem(data);
    } catch (error) {
      console.log("error UPS");
    }
  }, [router.query.id, uniqueItem]);

  console.log(uniqueItem);

  useEffect(() => {
    fetchUniqueProduct();
  }, [fetchUniqueProduct]);

  return (
    <div>
      <Header />
      <div className="flex flex-col  justify-center items-center min-h-screen">
        <img
          className="cursor-pointer "
          alt="Image"
          src={uniqueItem.image_url}
        />
        <div className="flex-col mt-5 text-center">
          <h2 className="text-5xl">{uniqueItem.name}</h2>
          <h3 className="text-2xl mt-2">{uniqueItem.description}</h3>
          <p className="text-2xl font-bold mt-2">{uniqueItem.price}</p>
          <button className="mt-10 border-b w-24 h-10 bg-red-500 hover:bg-red-600 font-bold text-white">
            BUY IT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
