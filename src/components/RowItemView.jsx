import PropTypes from 'prop-types'

export const RowItemView = ({product, prize, quantity}) => {
    return (
        <>
            <tr>
                <td>{product}</td>
                <td>{prize}</td>
                <td>{quantity}</td>
            </tr>
        </>
    )
}

RowItemView.propTypes = {
    product: PropTypes.string.isRequired,
    prize: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
}