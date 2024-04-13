// Test ID: IIDSAT

import { useLoaderData } from "react-router";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { orderLoaderType } from "../../types/";
import OrderItem from "./OrderItem";
import { useFetcher } from "react-router-dom";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

const sample = {
  id: "ABCDEF",
  customer: "Jonas",
  status: "preparing",
  phone: "123456789",
  address: "Arroios, Lisbon , Portugal",
  priority: true,
  estimatedDelivery: "2027-04-25T10:00:00",
  cart: [
    {
      pizzaId: 7,
      name: "Napoli",
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: "Diavola",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: "Romana",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: "-9.000,38.000",
  orderPrice: 95,
  priorityPrice: 19,
};

function Order() {
  const order = useLoaderData() as typeof sample;
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, [fetcher]);
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  id;
  return (
    <div className="py-6 space-y-8">
      <div className="flex gap-2 items-center justify-between flex-wrap">
        <h2 className="text-xl font-semibold">Order #{id} Status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="bg-red-500 rounded-full  py-2 px-3 uppercase font-semibold text-sm text-red-50 tracking-wide  ">
              Priority
            </span>
          )}
          <span className="bg-green-500 rounded-full  py-2 px-3 uppercase font-semibold text-sm text-red-50 tracking-wide ">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-2 bg-stone-200 px-6 py-5 rounded-md">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y border-t border-b border-stone-300">
        {cart.map((item, _idx) => (
          <>
            <OrderItem
              item={item}
              key={_idx}
              isLoadingIngredients={fetcher.state === "loading"}
              ingredients={
                fetcher.data?.find(
                  (data: { id: number }) => data.id === item.pizzaId
                )?.ingredients ?? []
              }
            />
          </>
        ))}
      </ul>

      <div className="py-5 px-6 space-y-2 bg-stone-200 rounded-md">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder />}
    </div>
  );
}

export async function OrderLoader({ params }: orderLoaderType) {
  const order = await getOrder(params.orderId);

  return order;
}

export default Order;
