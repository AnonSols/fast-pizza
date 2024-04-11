import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { createActionErrors, orderType } from "../../types";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import store, { State } from "../../store";
import { clearCart, getCart, getTotalPrice } from "../cart/CartSlice";
import EmptyCart from "../cart/EmptyCart";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData() as createActionErrors;
  const userName = useSelector((state: State) => state.user.userName);

  const totalCartPrice = useSelector(getTotalPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;

  const totalPrice = priorityPrice + totalCartPrice;

  if (!cart.length) return <EmptyCart />;
  return (
    <div className=" py-6">
      <h2 className="font-semibold text-xl mb-8 uppercase">
        Ready to order? Let's go!
      </h2>
      <Form method="POST">
        <div className="label">
          <label className="" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            className="input"
            name="customer"
            defaultValue={userName}
            required
            id="name"
          />
        </div>

        <div>
          <div className="label">
            <label htmlFor="number">Phone number</label>

            <input
              type="tel"
              id="number"
              name="phone"
              className="input"
              required
            />
          </div>

          {formErrors?.phone && (
            <p className="text-red-400 mb-5 bg-red-100 uppercase p-2 font-semibold text-xs sm:text-sm ">
              {formErrors.phone}
            </p>
          )}
        </div>

        <div className="label">
          <label htmlFor="address">Address</label>

          <input
            type="text"
            id="address"
            className="input"
            name="address"
            required
          />
        </div>

        <div className="flex items-center mb-6 gap-x-4 uppercase text-stone-800 font-semibold  md:text-lg">
          <input
            className="h-6 w-6 accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={`${withPriority}`}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting
              ? "Placing order...."
              : `Order now ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as orderType;

  const order: orderType = {
    ...data,
    priority: data.priority === "true",
    cart: JSON.parse(data.cart),
  };

  const errors = {} as createActionErrors;

  if (!isValidPhone(order.phone))
    errors.phone = "Please Enter a valid phone number we might need it";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder: { id: string } = await createOrder(order);

  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}
export default CreateOrder;
