import { cartItem } from "../../types";
import { formatCurrency } from "../../utils/helpers";
import DeleteButton from "./DeleteButton";

function CartItem({ item }: cartItem) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-">
        {quantity}&times; {name} and your pizzaId is {pizzaId}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
        <DeleteButton id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
