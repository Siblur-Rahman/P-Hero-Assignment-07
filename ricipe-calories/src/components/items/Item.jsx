import PropTypes from 'prop-types';


const Item = ({item}) => {
    const [...items] = item
    return (
        <li>{items}</li>
    );
};
Item.propTypes = {
    item: PropTypes.array.isRequired
}
export default Item;