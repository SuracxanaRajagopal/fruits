import React from "react";

const Card=({fruit})=>{
    return (
            <div className="div_container">
            <img className="img_container" src={require(`../images/${fruit.image}.jpeg`)} alt={`${fruit.image}`}/>
          
            <div className="flex_container">
                <span>  {fruit.name}  </span>
                <span>  {fruit.price}  </span>
               
            </div>
        </div>
    )
}
export default Card