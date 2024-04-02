import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

type cartItem = {
  item: {
    pizzaId: number;
    name: string;
    quantity: number;
    totalPrice: number;
    unitPrice: number;
  };
};
function CartItem({ item }: cartItem) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-">
        {quantity}&times; {name} and your pizzaId is {pizzaId}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
