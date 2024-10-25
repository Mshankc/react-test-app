import React from 'react';
import Header from './components/header';
import Banner from './components/banner';
import Categories from './components/categories';
import FeaturedProducts from './components/featuredProducts';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}

export default App;
