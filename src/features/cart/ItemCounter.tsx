import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { bindActionCreators } from "@reduxjs/toolkit";
import { cartCreators } from "../../types";
import { getCartQuantityById } from "./CartSlice";

const ItemCounter = ({ pizzaId }: { pizzaId: number }) => {
  const dispatch = useDispatch();

  const { increaseQty, decreaseQty } = bindActionCreators(
    cartCreators,
    dispatch
  );

  const qty = useSelector(getCartQuantityById(pizzaId));
  return (
    <div className="flex items-center justify-center gap-2 md:gap-3">
      <Button type="round" action={() => decreaseQty(pizzaId)}>
        -
      </Button>
      <span>{qty}</span>
      <Button type="round" action={() => increaseQty(pizzaId)}>
        +
      </Button>
    </div>
  );
};

export default ItemCounter;
