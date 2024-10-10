import React from 'react';
// Import CSS Module here

const ProductList = ({ products }) => {
    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
