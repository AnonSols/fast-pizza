import { formatCurrency } from "../../utils/helpers";

type orderItem = {
  item: {
    pizzaId: string;
    name: string;
    quantity: number;
    totalPrice: number;
  };
  isLoadingIngredients: boolean;
  ingredients: Array<string>;
};

function OrderItem({ item, isLoadingIngredients, ingredients }: orderItem) {
  const { quantity, name, totalPrice } = item;
  ingredients;
  isLoadingIngredients;
  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
