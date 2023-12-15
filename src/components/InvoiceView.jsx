import PropTypes from 'prop-types'

export const InvoceView = ({id, nombre}) => {

    return (
        <>
        
        <ul className="list-group">
                        <li className="list-group-item">Id: {id}</li>
                        <li className="list-group-item">Name: {name}</li>
                    </ul>
        
        </>
    )
}

InvoceView.propTypes = {
    id:PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}