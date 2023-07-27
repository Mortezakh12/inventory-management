import { useState } from "react";
import CategoryForm from "./components/Category";
import NavBar from "./components/NavBar";
import ProductForm from "./components/Products";

function App() {
  const [categories, setCategories] = useState([]);

  return (
    <div className="bg-rose-100 min-h-screen">
      <NavBar />
      <div className="container max-w-screen-sm mx-auto p-4">
        <CategoryForm setCategories={setCategories} />
        <ProductForm categories={categories} />
      </div>
    </div>
  );
}

export default App;
