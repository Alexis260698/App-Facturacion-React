import { ClientView } from "./ClientView";
import { CompanyView } from "./CompanyView";
import { InvoceView } from "./InvoiceView";
import { ListItemsView } from "./ListItemsView";
import { getInvoice } from "../Services/InvoiceService"


export const InvoiceApp = () => {

    const { id, name, client, company, items } = getInvoice();
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
                    </div>
                </div>
            </div>
        </>


    )
}