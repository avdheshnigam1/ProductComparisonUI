import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './components/ProductCard';
import CompareBar from './components/CompareBar';
import ComparisonView from './components/ComparisonView';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
const App = () => {
  const products = useSelector(state => state.products.list);
  const compare = useSelector(state => state.products.compare);
  const [query, setQuery] = useState('');
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.brand.toLowerCase().includes(query.toLowerCase())
  );


  return (
    <div className="App">
      <Header />
      <input
        type="text"
        placeholder="Search by name or brand..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />

      <div className="product-grid">
        {/* {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))} */}
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {compare.length >= 2 && <CompareBar />}
      {compare.length >= 2 && <ComparisonView />}
      <Footer />
    </div>
  );
};

export default App;
