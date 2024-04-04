// import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { createActionErrors, orderType } from "../../types";
import Button from "../../ui/Button";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

isValidPhone;

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  // const cart = fakeCart;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData() as createActionErrors;

  return (
    <div className=" py-6">
      <h2 className="font-semibold text-xl mb-8 uppercase">
        Ready to order? Let's go!
      </h2>
      <Form method="POST">
        <div className="label">
          <label className="" htmlFor="name">
            First Name
          </label>
          <input
            type="text"
            className="input"
            name="customer"
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
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(fakeCart)} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? "Placing order...." : "Order now"}
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
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };

  const errors = {} as createActionErrors;

  if (!isValidPhone(order.phone))
    errors.phone = "Please Enter a valid phone number we might need it";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder: { id: string } = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}
export default CreateOrder;
