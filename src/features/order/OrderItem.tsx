import { orderItem } from "../../types";
import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }: orderItem) {
  const { quantity, name, totalPrice } = item;
  ingredients;
  isLoadingIngredients;
  return (
    <li className="divide-y border-stone-200 border-b border-t py-2">
      <div className="flex items-center justify-between text-stone-600 ">
        <p className="text-sm">
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold text-stone-600">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
