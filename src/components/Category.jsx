import { useState } from "react";

const Category = ({setCategories}) => {
  const [categoryDataForm, setCategoryDataForm] = useState({
    title: "",
    description: "",
  });
  const categoryChangeHandler = (e) => {
    const { name, value } = e.target;
    setCategoryDataForm({ ...categoryDataForm, [name]: value });
  };
  const [isShow, setIsShow] = useState(false);
  const cancelFormHandler = (e) => {
    e.preventDefault();
    setIsShow(false);
  };
  const addNewCategoryHandler = (e) => {
    e.preventDefault();
    setCategories((prevState)=>[
      ...prevState,
      { ...categoryDataForm, createdAt: new Date().toISOString(),id:new Date().getTime() },
    ]);
    setCategoryDataForm({title:"",description:""});
  };
  return (
    <section>
      <div className={`mb-6 ${isShow ? "" : "hidden"}`} id="category-wrapper">
        <h2 className="text-xl text-rose-900 font-bold mb-2">
          Add New category
        </h2>
        <form className="bg-rose-200 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label
              htmlFor="category-title"
              className="block mb-1 text-rose-900"
            >
              title
            </label>
            <input
              type="text"
              name="title"
              id="category-title"
              className="bg-transparent rounded-xl border border-rose-500 text-rose-700 w-full md:w-auto"
              onChange={categoryChangeHandler}
            />
          </div>
          <div>
            <label
              htmlFor="category-description"
              className="block mb-1 text-rose-900"
            >
              description
            </label>
            <textarea
              className="bg-transparent rounded-xl border border-rose-500 text-rose-700 w-full"
              type=" text"
              name="description"
              id="category-description"
              onChange={categoryChangeHandler}
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              className="flex-1 border border-rose-400 text-rose-900 rounded-xl py-2"
              id="cancel-add-category"
              onClick={cancelFormHandler}
            >
              Cancel
            </button>
            <button
              id="add-new-category"
              className="flex-1 bg-rose-500 text-rose-200 rounded-xl py-2"
              onClick={addNewCategoryHandler}
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
      <button
        id="toggle-add-category"
        className={`text-rose-600 text-lg mb-4 font-medium ${
          isShow && "hidden"
        }`}
        onClick={() => setIsShow((prevState) => !prevState)}
      >
        Add new Category?
      </button>
    </section>
  );
};

export default Category;
