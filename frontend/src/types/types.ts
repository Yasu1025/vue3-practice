export type menuItem = {
  name: string;
  desc: string;
  category: string;
  price: number;
  imageUrl: string;
};

export type orderedItem = {
  item: menuItem;
  amount: number;
};
