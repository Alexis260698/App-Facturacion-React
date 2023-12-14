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