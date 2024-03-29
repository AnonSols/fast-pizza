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
  phone: number;
  cart: string;
  priority: boolean | string;
};
