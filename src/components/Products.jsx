import { useState } from "react";

const ProductForm = ({ categories }) => {
  const [productData, setProductData] = useState({
    title: "",
    quantity: 0,
    categoryId: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl text-rose-900 font-bold mb-2">Add New Product</h2>
      <form className="bg-rose-200 p-4 rounded-xl flex flex-col gap-y-4">
        <div>
          <label htmlFor="product-title" className="block mb-1 text-rose-700">
            title
          </label>
          <input
            type="text"
            name="title"
            id="product-title"
            className="bg-transparent rounded-xl border border-rose-500 text-rose-400 w-full md:w-auto"
            value={productData.title}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label
            htmlFor="product-quantity"
            className="block mb-1 text-rose-700"
          >
            quantity
          </label>
          <input
            className="bg-transparent rounded-xl border border-rose-500 text-rose-400 w-full md:w-auto"
            type="number"
            name="quantity"
            id="product-quantity"
            value={productData.quantity}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label
            htmlFor="product-category"
            className="block mb-1 text-rose-700"
          >
            category
          </label>
          <select
            name="categoryId"
            id="product-category"
            className="bg-transparent text-rose-400 rounded-xl w-full"
            value={productData.categoryId}
            onChange={changeHandler}
          >
            <option className="bg-slate-500 text-slate-300" value="">
              select a category
            </option>
            {categories.map((category) => {
              return (
                <option
                  key={category.id}
                  className="bg-slate-500 text-slate-300"
                  value={category.id}
                >
                  {category.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button
            id="add-new-product"
            className="flex-1 bg-rose-500 text-rose-200 rounded-xl py-2"
          >
            Add new Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
