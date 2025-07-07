import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";
import { add } from "./Slices/CartSlice";
import toast from "react-hot-toast";

function Products() {
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();

    function addToCart(product)
    {
        dispatch(add(product));
        toast.success("Product added to cart");
    }

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    const cards = products.map((product) => (
        <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
                <img 
                    src={product.image} 
                    alt={product.title} 
                    className="card-img-top"
                    style={{ objectFit: 'contain', height: '250px' }} 
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Rs.{product.price}</h5>
                    <button className="btn btn-sm btn-primary mt-auto" onClick={()=> addToCart(product)}>Add To Cart</button>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="container">
            <h1 className="text-center">Products Dashboard</h1><br/>
            <div className="row">
                {cards}
            </div>
        </div>
    );
}

export default Products;
