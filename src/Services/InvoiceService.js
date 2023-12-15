import { invoice } from "../data/invoice"

export const getInvoice = () => {

    const total =invoice.items
    .map(item => item.prize * item.quantity)
    .reduce( (accumulator, currentValue) => accumulator + currentValue, 0);

    return {...invoice, total};
}

