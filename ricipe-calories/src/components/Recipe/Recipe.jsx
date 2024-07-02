import PropTypes from 'prop-types';
import Item from '../items/Item';
import { IoTimeOutline } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
const Recipe = ({recipe, handleWantToCook}) => {
    const {name, image, short_description, ingredients, preparing_time, calories} = recipe;
    return (
        <div className='border-2 rounded-2xl pl-2 pb-2'>
            <img src={image} alt="" className='h-72 w-full rounded-2xl'/>
            <h2 className='text-4xl'>{name}</h2>
            <p className='p-5'>{short_description}</p>
            <hr/>
            <div className='flex gap-5 p-5'>
                <div className='flex items-center gap-1'><IoTimeOutline />{preparing_time}</div>
                <div className='flex items-center gap-1'><FaFireAlt />{calories}</div>
            </div>
            <hr/>
            <h4 className="text-2xl">ingredients: {ingredients.length}</h4>
            <div className='p-5'>
                {
                    ingredients.map(item =><Item key={item[0]} item={item}></Item>)
                }
                </div>
                <button className="text-slate-50 p-3 bg-[#58BE7E] rounded-3xl" onClick={()=>handleWantToCook(recipe)}>Want to cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func.isRequired
}
export default Recipe;