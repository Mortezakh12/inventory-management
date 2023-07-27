const NavBar = () => {
  return (
    <div className="h-12 flex items-center justify-center gap-x-4 bg-rose-500 mb-6">
      <h1 className="md:text-xl text-sm font-bold text-rose-900">
        Inventory App using tailwind & Js
      </h1>
      <span className="flex items-center justify-center w-7 h-7 rounded-full border-2 border-slate-300 font-bold text-slate-300">
        7
      </span>
    </div>
  );
};

export default NavBar;
