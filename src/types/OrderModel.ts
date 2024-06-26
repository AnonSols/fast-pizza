export type orderLoaderType = {
  params: { orderId?: string };
};

export type createOrderActionType = {
  request: {
    formData(): string[];
  };
};

export type orderType = {
  customer: string;
  address: string;
  phone: string;
  cart: string;
  priority: boolean | string;
};

export type updateOrderModel = { priority: boolean };
export type orderItem = {
  item: {
    pizzaId: number;
    name: string;
    quantity: number;
    totalPrice: number;
  };
  isLoadingIngredients: boolean;
  ingredients: Array<string>;
};

export type createActionErrors = {
  phone?: string;
  address?: string;
};

interface updateParams {
  params: {
    orderId?: string;
  };
}

interface updateRequest {
  request?: Request;
}

export type actionParams = updateParams & updateRequest;
