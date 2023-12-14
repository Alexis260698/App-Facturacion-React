import { getInvoice } from "../Services/InvoiceService"


export const InvoiceApp = () => {
    const { id, name, client, company, items } = getInvoice();

    const { name: nameClient, lastname, address } = client;

    const { country, city, street, number } = address;

    return (
        <>
            <h1>Ejemplo Factura</h1>
            <ul>
                <li>Id: {id}</li>
                <li>Name: {name}</li>
            </ul>

            <h3>Datos del cliente</h3>
            <ul>
                <li>{nameClient} {lastname}</li>
                <li> {country}</li>
                <li>{city}</li>
                <li>{street} {number}</li>
            </ul>

            <h3>Datos de la empresa</h3>
            <ul>
                <li>{company.name}</li>
                <li> {company.fiscalNumber}</li>
            </ul>

            <h4>Productos de la factura</h4>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({id,product, prize, quantity}) => {
                        return (
                            <tr key={id}>
                                <td>{product}</td>
                                <td>{prize}</td>
                                <td>{quantity}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

        </>


    )
}