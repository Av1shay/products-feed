import React, { Component } from 'react';
 
class Product extends Component {
    
    render() {
        const { key, title, description, link, imageLink, price, salePrice } = this.props;

        return ( 
            <div key={key} className="single-product p-4 border m-2 mb-4">
                <h4 className="product-title">{title}</h4>
                <img src={imageLink} alt={title}/>
                <p className="product-description">{description}</p>
                <a href={link} className="product-link>">דף מוצר</a>
                <div className="product-price"><b>מחיר:</b> {price}</div>

                {(salePrice && 
                    <div className="product-sale-price"><b>מחיר מבצע:</b> {salePrice}</div>
                )}
            </div>   
        )
    }
}

export default Product;