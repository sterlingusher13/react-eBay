import React from "react";
import "./Products.css";


const Products = ({ name, price, discountPrice }) => {
  return (
   
    <div className="product">
      <div className="productInfo">
       <p className="productName">Xbox X Series</p>
       <div className="priceWrapper">
         <p className="price">Low Price $429.99</p>
         <p className="discountPrice">was $559.99</p>
       </div>
      </div>
      </div>
    )
};
 
export default Products;