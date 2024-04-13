import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getQuantity, getTotalPrice } from "./CartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const cartQuantity = useSelector(getQuantity);
  const cartPrice = useSelector(getTotalPrice);

  if (!cartQuantity) return null;
  return (
    <div className="bg-stone-800 text-stone-200 p-4 uppercase sm:px-6 text-sm md:text-base flex items-center justify-between  ">
      <p className="text-stone-300 space-x-4 font-semibold uppercase sm:space-x-6">
        <span>{cartQuantity} pizzas</span>
        <span> {formatCurrency(cartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
