import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import User from "./User";

const Header = () => {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">
        {" "}
        Fast React Pizza Co.{" "}
      </Link>

      <SearchOrder />
      <User />
    </header>
  );
};

export default Header;
