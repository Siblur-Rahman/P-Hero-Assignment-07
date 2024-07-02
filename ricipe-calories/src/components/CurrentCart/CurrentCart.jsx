import PropTypes from 'prop-types';
const CurrentCart = ({cart, index}) => {
    const {name, preparing_time, calories} = cart;
    return (
       <tr className='bg-slate-300 text-center'> 
            <td>{index+1}</td>
            <td>{name}</td>
            <td>{preparing_time}</td>
            <td colSpan={2}>{calories}</td>
        </tr>
    );
};
CurrentCart.propTypes = {
    cart: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
}
export default CurrentCart;