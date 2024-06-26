import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import User from "./User";

const Header = () => {
  return (
    <header className="bg-yellow-500 uppercase px-4 py-3 border-b border-stone-200 sm:px-6 flex items-center justify-between ">
      <Link to="/" className="tracking-widest">
        {" "}
        Fast Pizza Co.{" "}
      </Link>

      <SearchOrder />
      <User />
    </header>
  );
};

export default Header;
