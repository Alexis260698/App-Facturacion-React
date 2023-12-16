import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';

export const RowItemView = ({id, product, prize, quantity, handlerDeleteItem}) => {
    return (
        <>
            <tr>
                <td>{product}</td>
                <td>{prize}</td>
                <td>{quantity}</td>
                <td><button className='btn btn-danger' onClick={() => handlerDeleteItem(id)}><FontAwesomeIcon icon={faTrash} /> </button></td>
            </tr>
        </>
    )
}

RowItemView.propTypes = {
    product: PropTypes.string.isRequired,
    prize: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
}