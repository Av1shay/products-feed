import React, { Component } from 'react';
import Product from './Product';
import Slider from "react-slick";
import Loader from 'react-loader-spinner'
 
class Products extends Component {
    constructor(props) {
        super(props);
        this.productsPath = '../products/google_products_feed_test.json';
        this.state = { 
            products: []
         };
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        try{
            const productsRes = await fetch(this.productsPath);
            const products = await productsRes.json();

            if (!products.rss.channel.item) {
                throw new Error('JSON foramt is incorrect');
            }

            this.setState({
                products: products.rss.channel.item
            });
    
        } catch(error) {
            console.error(error);
        }
    }

    getSliderSettings = () => {
        return {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            width: 'auto',
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1
                    }
                }
            ]
        };
    }

    render() {
        const { products } = this.state;
        const sliderSettings = this.getSliderSettings();
        let productItems = [];

        productItems = products.map((product, index) => {
            const salePrice = product['g:sale_price'] ? product['g:sale_price'] : false;

            return <Product key={index}
                title={product['g:title']}
                description={product['g:description']}
                link={product['g:link']}
                imageLink={product['g:image_link']}
                price={product['g:price']}
                salePrice={salePrice}
            />
        })
        
        return (
            <div className="products">
                {productItems.length > 0 ? (
                    <Slider {...sliderSettings}>
                        {productItems}
                    </Slider>
                ) : (
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />
                )}
            </div>
        )
    }
}

export default Products;