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

export type createActionErrors = {
  phone?: string;
  address?: string;
};
