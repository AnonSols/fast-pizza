import { orderItem } from "../../types";
import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }: orderItem) {
  const { quantity, name, totalPrice } = item;
  return (
    <li className=" space-y-1 py-2">
      <div className="flex items-center justify-between text-stone-600 ">
        <p className="text-sm">
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold text-stone-600">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-300 ">
        {isLoadingIngredients ? "Loading..." : ingredients?.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
