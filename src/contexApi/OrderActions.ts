import type { Order } from "../interfaces/order";

export const addOrder = (draft: Order[], order: Order) => {

    draft.unshift(order);

};