export type menuType = {
  pizza: {
    id: number;
    name: string;
    unitPrice: number;
    ingredients: string[];
    soldOut: boolean;
    imageUrl: string;
  };
};

export type menu = {
  menu: Array<menuType["pizza"]>;
};
