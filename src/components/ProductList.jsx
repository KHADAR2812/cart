import React from "react";
const ProductList = ({ products, addToCart }) => {
    return(
        <div> 
            <h2>Products</h2>
            <div className="product-List">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image}  alt={product.name} className="product-image"/>
                        <h3>{product.name}</h3>
                        <p>Rs.{product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default ProductList;