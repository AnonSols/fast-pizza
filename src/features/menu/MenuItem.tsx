import { menuType } from "../../types";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }: menuType) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  id;
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
