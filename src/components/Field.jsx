function Filed() {
    return (
      <>
        {" "}
        <form className="wrap">
          <input
            placeholder="Search Here"
            className="input"
            name="text"
            type="text"
            required
          />
        </form>
        <form className="flex justify-evenly border h-8 bg-slate-600">
          <input type="date" name="date" />
          <input type="text" name="text" placeholder="Description" />
          <input type="text" name="text" placeholder="Category" />
          <input type="number" name="number" placeholder="Amount" />
        </form>
      </>
    );
  }
  
  export default Filed;
  