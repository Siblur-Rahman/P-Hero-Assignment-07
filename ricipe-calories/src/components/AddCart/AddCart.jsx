import PropTypes from 'prop-types';
const AddCart = ({cart, index, handlePreparing}) => {
    const {id, name, preparing_time, calories} = cart;
    return (
       <tr className='bg-slate-300 text-center'> 
            <td>{index+1}</td>
            <td>{name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            <td className='text-right'><button className='rounded-3xl  bg-[#58BE7E] pl-3 pr-3 pt-2 pb-2' onClick={() =>handlePreparing(id)}>Preparing</button></td>
        </tr>
    );
};
AddCart.propTypes = {
    cart: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handlePreparing: PropTypes.func.isRequired,
}
export default AddCart;