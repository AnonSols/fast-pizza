import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { cartCreators } from "../../types";
import { getCart } from "./CartSlice";
import EmptyCart from "./EmptyCart";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  // const dispatch = useDispatch();
  // const { addItem } = bindActionCreators(cartCreators, dispatch);

  // console.log(addItem);

  const userName = useSelector((state: State) => state.user.userName);
  const dispatch = useDispatch();

  const { clearCart } = bindActionCreators(cartCreators, dispatch);

  const cart = useSelector(getCart);
  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="pt-4">
          <LinkButton to="/menu">&larr; Back to menu</LinkButton>

          <h2 className="font-semibold text-xl mt-7">Your cart, {userName}</h2>

          <ul className="divide-y divide-stone-300 mt-4">
            {cart.map((cart) => (
              <CartItem item={cart} key={cart.pizzaId} />
            ))}
          </ul>

          <div className="space-x-4 my-6">
            <Button type="primary" to="/order/new">
              Order pizzas
            </Button>
            <Button type="secondary" action={clearCart}>
              Clear cart
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
