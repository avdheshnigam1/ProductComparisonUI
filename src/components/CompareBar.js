import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCompare, removeFromCompare } from '../features/products/productsSlice';
import { IoIosCloseCircleOutline } from "react-icons/io";

const CompareBar = () => {
  const dispatch = useDispatch();
  const compare = useSelector(state => state.products.compare);
  const products = useSelector(state => state.products.list);
  const selected = products.filter(p => compare.includes(p.id));

  return (
    <div className="compare-bar">
      <div className="selected-items">
        {selected.map(item => (
          <div key={item.id} className="item-thumb">
            <img src={item.image} alt={item.name} />
            <button onClick={() => dispatch(removeFromCompare(item.id))}>
              <IoIosCloseCircleOutline />
            </button>
          </div>
        ))}
      </div>
      <div className="actions">
        <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
          Compare Now
        </button>
        <button onClick={() => dispatch(clearCompare())}>Clear All</button>
      </div>
    </div>
  );
};

export default CompareBar;
