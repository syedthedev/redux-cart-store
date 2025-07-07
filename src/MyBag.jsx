import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from './Slices/CartSlice';
import toast from 'react-hot-toast';

function MyBag() {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeCart = (product) => {
    dispatch(remove(product));
    toast.success("Product removed");
  };

  const cards = cartProducts.length > 0 ? (
    cartProducts.map((product) => (
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
            <button
              className="btn btn-sm btn-danger mt-auto"
              onClick={() => removeCart(product)}
            >
              Remove Product
            </button>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="text-center w-100">
      <h2>No Products in the Cart</h2>
    </div>
  );

  return (
    <div className="container">
      <h1 className="text-center mb-4">Products Cart</h1>
      <div className="row">{cards}</div>
    </div>
  );
}

export default MyBag;
