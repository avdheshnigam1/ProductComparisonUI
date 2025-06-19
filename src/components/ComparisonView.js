import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCompare, clearCompare } from '../features/products/productsSlice';
import { IoIosCloseCircleOutline } from "react-icons/io";

const ComparisonView = () => {
  const dispatch = useDispatch();
  const compare = useSelector(state => state.products.compare);
  const products = useSelector(state => state.products.list);
  const selected = products.filter(p => compare.includes(p.id));

  const highlightDiff = (key) => {
    const values = selected.map(item => item.features[key]);
    return new Set(values).size > 1;
  };

  return (
    <section className="comparison-view">
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            {selected.map(p => (
              <th key={p.id}>
                {p.name}
                <button onClick={() => dispatch(removeFromCompare(p.id))}>
                  <IoIosCloseCircleOutline color="red" size="20" />
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brand</td>
            {selected.map(p => <td key={p.id}>{p.brand}</td>)}
          </tr>
          <tr>
            <td>Price</td>
            {selected.map(p => <td key={p.id}>{p.price}</td>)}
          </tr>
          <tr className={highlightDiff("screen") ? "highlight" : ""}>
            <td>Screen</td>
            {selected.map(p => <td key={p.id}>{p.features.screen}</td>)}
          </tr>
          <tr className={highlightDiff("battery") ? "highlight" : ""}>
            <td>Battery</td>
            {selected.map(p => <td key={p.id}>{p.features.battery}</td>)}
          </tr>
          <tr className={highlightDiff("camera") ? "highlight" : ""}>
            <td>Camera</td>
            {selected.map(p => <td key={p.id}>{p.features.camera}</td>)}
          </tr>
        </tbody>
      </table>
      <div className="actions">
        <button onClick={() => dispatch(clearCompare())}>Clear Comparison</button>
      </div>
    </section>
  );
};

export default ComparisonView;
