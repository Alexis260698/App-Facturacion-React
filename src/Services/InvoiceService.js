import { invoice } from "../data/invoice"

export const getInvoice = () => {

    const total = calculateTotal(invoice.items);

    return {...invoice, total};
}

export const calculateTotal = (items) => {
    return items
    .map(item => item.prize * item.quantity)
    .reduce( (accumulator, currentValue) => accumulator + currentValue, 0);
}

