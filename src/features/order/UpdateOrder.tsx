import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { actionParams, updateOrderModel } from "../../types";
import { updateOrder } from "../../services/apiRestaurant";

const UpdateOrder = () => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">UpdateOrder</Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;

export async function action({ params }: actionParams) {
  const data = {
    priority: true,
  } as updateOrderModel;

  await updateOrder(params.orderId, data);
  return null;
}
