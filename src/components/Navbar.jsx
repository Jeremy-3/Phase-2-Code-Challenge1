import Buttons from "./Buttons";
import Filed from "./Field";

function Navbar() {
  return (
    <div>
      <h1 className="header">Transaction Page</h1>
      <form className="form-wrapper">
        {/* <Buttons> Find user</Buttons> */}
         <Filed />
         <Buttons>Add user</Buttons>
      </form>
    </div>
  );
}

export default Navbar;
