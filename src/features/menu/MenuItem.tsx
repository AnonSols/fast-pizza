import { useDispatch } from "react-redux";
import { cartCreators, menuType } from "../../types";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
// import { addItem } from "../cart/CartSlice";
import { bindActionCreators } from "@reduxjs/toolkit";

function MenuItem({ pizza }: menuType) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  id;

  const dispatch = useDispatch();
  const { addItem } = bindActionCreators(cartCreators, dispatch);

  function handleAddItem() {
    console.log("it's working");
    const data = {
      pizzaId: 2,
      name: "solomon",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    };
    dispatch(addItem(data));
  }
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-col grow pt-0.5">
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm italic capitalize text-stone-500">
            {ingredients.join(", ")}
          </p>
        </div>
        <div className="mt-auto sm:mt-0 sm:flex items-center justify-between grow space-y-1">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-xs uppercase font-medium text-stone-500 my-2">
              Sold out
            </p>
          )}

          {!soldOut && (
            <Button type="small" action={handleAddItem}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
