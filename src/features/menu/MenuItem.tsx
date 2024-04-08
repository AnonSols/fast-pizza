import { useDispatch, useSelector } from "react-redux";
import { cartCreators, menuType } from "../../types";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
// import { addItem } from "../cart/CartSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import DeleteButton from "../../ui/DeleteButton";
import { getCartQuantityById } from "../cart/CartSlice";

function MenuItem({ pizza }: menuType) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();
  const { addItem } = bindActionCreators(cartCreators, dispatch);

  const cartQuantity = useSelector(getCartQuantityById(id));
  const isInCart = cartQuantity > 0;

  function handleAddItem() {
    const data = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: 32,
    };
    addItem(data);
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

          {isInCart ? (
            <DeleteButton id={id} />
          ) : (
            <>
              {!soldOut && (
                <Button type="small" action={handleAddItem}>
                  Add to cart
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
