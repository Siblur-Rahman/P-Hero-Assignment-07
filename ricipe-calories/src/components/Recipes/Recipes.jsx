import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import AddCart from "../AddCart/AddCart";
import CurrentCart from "../CurrentCart/CurrentCart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [cart, setCart] = useState([]);
    const [currentCart, setCurrentCart] = useState([]);

    useEffect(() =>{
        fetch('RecipeData.json')
        .then(res =>res.json())
        .then(data =>setRecipes(data))
    }, []);

        const handleWantToCook = (p) =>{
            const isExist =cart.find((Item) => Item.id == p.id);
            if(!isExist){

                setCart([...cart, p]);
            }
            else{
                toast('Allready Exist')
            }
    }
    const handlePreparing = id =>{
        const nuwCurrentCart = cart.find(item => item.id ==id);
        setCurrentCart([...currentCart, nuwCurrentCart])
        const newCart = cart.filter(item => item.id !=id);
        setCart(newCart)
    }

    return (
        <div className="mt-10">
            <h1 className="text-5xl leading-relaxed text-center">Our Recipes</h1>
            <p className='leading-8 lg:w-5/6 text-center m-auto' >We’ll basically tell you how much it cost to produce your dish and what’s your profit margin. Plain and simple.</p>
            <div className="lg:flex gap-5 mt-5">
                {/* Rwcipe Container */}
                    <div className="lg:grid grid-cols-2 gap-5 lg:w-2/3">
                        {
                            recipes.map(recipe =><Recipe 
                                key={recipe.id} 
                                recipe={recipe}
                                handleWantToCook={handleWantToCook}
                                >
                                </Recipe>
                                )
                        }
                        <ToastContainer></ToastContainer>
                    </div>
                    {/* Want to Cook */}
                    <div className="lg:w-1/3">
                        <div className="border-2 rounded-2xl">
                           <h4 className="text-3xl font-semibold text-center mt-5">Want to cook {cart.length}</h4>
                           <hr className="w-3/4 m-auto mt-5 mb-5" />
                            <div>
                                <table className="w-full">
                                    <thead>
                                        <th colSpan={2} className="text-center">Name</th>
                                        <th>Time</th>
                                        <th colSpan={2} className="text-left">Calories</th>
                                    </thead>
                                    {
                                        cart.map((cart, index) =><AddCart 
                                        key={cart="cart.id"} 
                                        cart={cart} 
                                        index={index}
                                        handlePreparing={handlePreparing}
                                        >
                                        </AddCart>
                                        
                                        )
                                    }
                                </table>
                            </div>
                        {/* </div> */}
                        {/* Current Cooking */}
                        {/* <div className="border-2 rounded-2xl"> */}
                           <h4 className="text-3xl font-semibold text-center mt-5">Currently Cooking {currentCart.length}</h4>
                           <hr className="w-3/4 m-auto mt-5 mb-5" />
                            <div>
                                <table className="w-full">
                                    <thead>
                                        <th colSpan={2} className="text-center">Name</th>
                                        <th>Time</th>
                                        <th colSpan={2} className="text-left">Calories</th>
                                    </thead>
                                    {
                                        currentCart.map((currentCart, index) =><CurrentCart 
                                        key={currentCart="cart.id"} 
                                        cart={currentCart} 
                                        index={index}
                                        >
                                        </CurrentCart>
                                        )
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
            </div>
            
        </div>
    );
};
export default Recipes;