import Category from "./components/Category";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-rose-100 min-h-screen">
      <NavBar />
      <div className="container max-w-screen-sm mx-auto p-4">
        <Category />
</div>
    </div>
  );
}

export default App;
