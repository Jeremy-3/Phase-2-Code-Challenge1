function Buttons({ children }) {
    return  <button className="ease-[cubic-bezier(0.15, 0.83, 0.66, 1)] 
    min-w-[120px] cursor-pointer rounded-lg border-0 bg-slate-600
    px-4 py-3 text-green-400 shadow-inner transition-all duration-1000 hover:bg-green-500
     hover:text-slate-600 flex-1">{children}</button>
  }
  
  export default Buttons