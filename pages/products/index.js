import react from "react";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import ProductForm from "../../components/ProductForm";

const Products = () => {
  const [items, setItems] = useState([]);
  const [productToEdit, setProductToEdit] = useState(undefined);

  const [openProductModal, setOpenProductModal] = useState(false);

  const router = useRouter();

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3000/api/products/");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.log("UPS ERROR ");
    }
  }, []);

  const handleSubmit = async (product) => {
    let promise;

    try {
      if (productToEdit) {
        // Le decimos al backend con un PUT que edite el producto
        promise = await fetch(
          "http://localhost:3000/api/products/" + productToEdit.id,
          {
            method: "PUT",
            body: JSON.stringify({
              ...product,
              price: Number(product.price),
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        // Le decimos al backend con un POST que cree el producto
        promise = await fetch("http://localhost:3000/api/products/", {
          method: "POST",
          body: JSON.stringify({
            ...product,
            price: Number(product.price),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }

      const data = await promise.json();

      if (productToEdit) {
        setItems((oldItems) =>
          oldItems.map((oldItem) => {
            if (oldItem.id === productToEdit.id) return data;
            else return oldItem;
          })
        );
      } else {
        // Paso 2: Actualizamos frontend si el backend responde bien, osea 200
        setItems((oldItems) => [...oldItems, data]);
      }
      setOpenProductModal(false);
    } catch (error) {
      console.log("Ups error!");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE",
      });

      const deletedProduct = await response.json();

      setItems((oldProducts) => {
        return oldProducts.filter(
          (oldProduct) => oldProduct.id !== deletedProduct.id
        );
      });
    } catch (err) {
      console.log("Ups error");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      <Header />
      <div>
        <h1 className="text-center text-4xl text-black mt-10 font-normal md:font-medium xl:font-bold ">
          Products
        </h1>

        <button
          type="button"
          className="my-5 mx-10  bg-green-500 text-white rounded-lg w-20 font-bold font-mono md:text-xl"
          onClick={() => setOpenProductModal(true)}
        >
          ADD
        </button>

        <Modal
          open={openProductModal}
          onClose={() => {
            setOpenProductModal(false);

            if (productToEdit) setProductToEdit(undefined);
          }}
        >
          <ProductForm onSubmit={handleSubmit} initialValues={productToEdit} />
        </Modal>

        <div className="border rounded-sm grid grid-cols-1 gap-10 mx-5 sm:text-base md:text-lg lg:grid-cols-2 2xl:grid-cols-4 ">
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white rounded-lg cursor-pointer  flex flex-col items-center justify-center border border-slate-900 m-5 p-5 "
              >
                <img
                  className="w-60 h-60 object-contain border-b border-zinc-400 sm:w-72 sm:h-72 2xl:w-52 2xl:h-52"
                  alt="product-cover"
                  src={item.image_url}
                  onClick={() => router.push(`/products/${item.id}`)}
                />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p className="font-bold">${item.price}</p>
                <div className="flex justify-evenly mt-5 font-bold">
                  <button
                    onClick={() => {
                      setOpenProductModal(true);
                      setProductToEdit(item);
                    }}
                    className="mr-5 bg-blue-500 w-16 rounded-lg text-white md:w-20"
                  >
                    EDIT
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 w-16 rounded-lg text-white md:w-20"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
