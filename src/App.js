import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './components/ProductCard';
import CompareBar from './components/CompareBar';
import ComparisonView from './components/ComparisonView';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Breadcrumb from './components/common/Breadcrumb/Breadcrumb';
const App = () => {
  const products = useSelector(state => state.products.list);
  const compare = useSelector(state => state.products.compare);
  const [query, setQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.brand.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    return (
      <div className="App">
        <Header />
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name or brand..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
        </div>
        <p className="no-results">No products found.</p>
        <Footer />
      </div>
    );
  }


  return (
    <section className="App">
      <Header />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name or brand..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="breadcrumb">
        <Breadcrumb />
      </div>
      <h2>Products <span> Total: {filteredProducts.length}</span></h2>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {compare.length >= 2 && <CompareBar />}
      {compare.length >= 2 && <ComparisonView />}
      <Footer />
    </section>
  );
};

export default App;
