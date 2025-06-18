import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCompare } from '../features/products/productsSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const compareList = useSelector(state => state.products.compare);
  const isSelected = compareList.includes(product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="price">{product.price}</p>
      <div className="features">
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Screen:</strong> {product.features.screen}</p>
        <p><strong>Battery:</strong> {product.features.battery}</p>
      </div>
      <label className="compare-checkbox">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => dispatch(toggleCompare(product.id))}
        />
        Add to Compare
      </label>
    </div>
  );
};

export default ProductCard;
