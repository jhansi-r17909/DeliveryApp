import React, { useContext } from 'react'
import './FoodItem.css' ;
import { assets, food_list } from '../../assets/assets'
import Context from '../../context/Context';


function FoodItem({id,name,price,description,image}) {
const{cartItems,setCartItems,addToCart,removeFromCart}=useContext(Context)

  return (
    <>
    <div className="food-item">
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
            {!cartItems[id] ?  <img  className='add' onClick={()=>{addToCart(id)}} src={assets.add_icon_white} alt="" />     :
            <div className='food-item-counter'>  
            <img src="assets.remove_icon_red" alt="" />
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>      
                <p>{cartItems[id]}</p>
                <img  onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                 </div>      }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
              
                      </div>
<p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
        </div>
    
    </div>
    </>
  )
}

export default FoodItem;