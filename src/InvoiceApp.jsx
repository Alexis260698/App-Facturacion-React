import { useState } from "react";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { getInvoice } from "./Services/InvoiceService"


export const InvoiceApp = () => {

    const { id, name, client, company, items: itemsInitial, total } = getInvoice();

    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');


    const [items, setItems] = useState(itemsInitial);
    const [counter, setCounter] = useState(4);

    const onProductChange = ({ target }) => {
        console.log(target.value)
        setProductValue(target.value);
    }

    const onPrizeChange = ({ target }) => {
        console.log(target.value)
        setPriceValue(target.value);
    }

    const onQuantityChange = ({ target }) => {
        console.log(target.value)
        setQuantityValue(target.value);
    }

    const onInvoiceItemSubmit = (event) => {
        event.preventDefault();

        if (productValue.trim().length <= 1) return;
        if (priceValue.trim().length <= 1) return;
        if (isNaN(priceValue.trim())) {
            alert('Error la precio no es un numero')
            return;
        }
        if (quantityValue.trim().length < 1) {
            alert('Error la cantidad tiene que ser mayor a 0')
            return;
        }
        if (isNaN(quantityValue.trim())) {
            alert('Error la cantidad no es un numero')
            return;
        } 

        setItems([...items, {
            id: counter,
            product: productValue.trim(),
            prize: +priceValue.trim(),
            quantity: parseInt(quantityValue.trim(), 10)
        }]);
        setProductValue('');
        setPriceValue('');
        setQuantityValue('');
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
                                name="Product"
                                value={productValue}
                                placeholder="Producto"
                                className="form-control m-3"
                                onChange={onProductChange} />
                            <input
                                type="text"
                                name="prize"
                                value={priceValue}
                                placeholder="Precio"
                                className="form-control m-3"
                                onChange={event => onPrizeChange(event)} />
                            <input
                                type="text"
                                name="quantity"
                                value={quantityValue}
                                placeholder="Cantidad"
                                className="form-control m-3"
                                onChange={event => onQuantityChange(event)} />
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
