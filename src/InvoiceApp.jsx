import { useState } from "react";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { getInvoice } from "./Services/InvoiceService"


export const InvoiceApp = () => {

    const { id, name, client, company, items: itemsInitial, total } = getInvoice();

    const [invoiceItemsState, setInvoiceItemsState] = useState({
        product: '',
        price: '',
        quantity: '',
    });

    const { product, price, quantity } = invoiceItemsState;

    const [items, setItems] = useState(itemsInitial);
    const [counter, setCounter] = useState(4);

    const onInputChange = ({ target: { value, name } }) => {
        setInvoiceItemsState({
            ...invoiceItemsState,
            [name]: value
        });
    }


    const onInvoiceItemSubmit = (event) => {
        event.preventDefault();

        if (product.trim().length <= 1) return;
        if (price.trim().length <= 1) return;
        if (isNaN(price.trim())) {
            alert('Error la precio no es un numero')
            return;
        }
        if (quantity.trim().length < 1) {
            alert('Error la cantidad tiene que ser mayor a 0')
            return;
        }
        if (isNaN(quantity.trim())) {
            alert('Error la cantidad no es un numero')
            return;
        }

        setItems([...items, {
            id: counter,
            product: product.trim(),
            prize: +price.trim(),
            quantity: parseInt(quantity.trim(), 10)
        }]);

        setInvoiceItemsState({
            product: '',
            price: '',
            quantity: '',
        })

        setCounter(counter + 1);
    }

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        Ejemplo Factura
                    </div>

                    <div className="card-body">

                        <InvoceView id={id} name={name} />

                        <div className="row my-4">
                            <div className="col">
                                <ClientView title={"Datos del cliente"} client={client} />
                            </div>
                            <div className="col">
                                <CompanyView title={"Datos de la empresa"} company={company} />
                            </div>
                        </div>
                        <ListItemsView title="Productos de la factura" items={items} />
                        <TotalView total={total} />

                        <form className="w-50" onSubmit={onInvoiceItemSubmit}>
                            <input
                                type="text"
                                name="product"
                                value={product}
                                placeholder="Producto"
                                className="form-control m-3"
                                onChange={event => onInputChange(event)} />
                            <input
                                type="text"
                                name="price"
                                value={price}
                                placeholder="Precio"
                                className="form-control m-3"
                                onChange={event => onInputChange(event)} />
                            <input
                                type="text"
                                name="quantity"
                                value={quantity}
                                placeholder="Cantidad"
                                className="form-control m-3"
                                onChange={event => onInputChange(event)} />
                            <button
                                type="submit"
                                className="btn btn-primary m-3">
                                Agregar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}
