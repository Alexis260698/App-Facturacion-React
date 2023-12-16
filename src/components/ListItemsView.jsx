import { RowItemView } from "./RowItemView"
import PropTypes from 'prop-types'

export const ListItemsView = ({ title, items, handlerDeleteItem }) => {

    return (
        <>
            <h4>{title}</h4>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, product, prize, quantity }) => {
                        return (
                            <RowItemView 
                            key={id}
                            id={id}
                            product={product} 
                            prize={prize} 
                            quantity={quantity} 
                            handlerDeleteItem={ handlerDeleteItem }/>
                        )
                    })}

                </tbody>
            </table>

        </>
    )
}

ListItemsView.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}