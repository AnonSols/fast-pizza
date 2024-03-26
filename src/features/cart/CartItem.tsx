import { formatCurrency } from "../../utils/helpers";

type cartItem = {
  item: {
    pizzaId: string;
    name: string;
    quantity: number;
    totalPrice: number;
  };
};
function CartItem({ item }: cartItem) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name} and your pizzaId is {pizzaId}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
