import React, { useState } from "react";

const ProductForm = ({ onSubmit, initialValues = {} }) => {
  const [name, setName] = useState(initialValues.name);
  const [description, setDescription] = useState(initialValues.description);
  const [price, setPrice] = useState(initialValues.price);
  const [image, setImage] = useState(initialValues.image_url);

  return (
    <form
      className="flex flex-col items-center justify-center text-center w-80 text-black  mx-auto bg-white p-8 rounded-lg "
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        {initialValues.name ? (
          <h1 className="font-bold mb-10">Edit Your Product</h1>
        ) : (
          <h1 className="font-bold mb-10">Create Your Product</h1>
        )}
      </div>

      <label htmlFor="Name" className="flex flex-col  ">
        Name:
        <input
          className="w-3/4 mx-auto text-black mt-4 mb-5 bg-slate-100 border border-slate-300 rounded-md shadow-none"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="text" className="flex flex-col  ">
        Description:
        <input
          className="w-3/4 mx-auto text-black mt-4 mb-5 bg-slate-100 border border-slate-300 rounded-md shadow-none"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label htmlFor="file" className="flex flex-col  ">
        Paste URL
        <input
          className="w-3/4 mx-auto text-black mt-4 mb-5 bg-slate-100 border border-slate-300 rounded-md shadow-none"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <label htmlFor="file" className="flex flex-col  ">
        Price:
        <input
          className="w-3/4 mx-auto text-black mt-4 mb-5 bg-slate-100 border border-slate-300 rounded-md shadow-none"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>

      <button
        onClick={() => onSubmit({ name, description, price, image_url: image })}
        type="submit"
        className="bg-green-500 w-24 font-bold h-8"
      >
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
