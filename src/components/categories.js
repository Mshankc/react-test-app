import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = ['Electronics', 'Fashion', 'Home & Kitchen', 'Books', 'Sports'];

  return (
    <div className="categories">
      <h2>Shop by Category</h2>
      <div className="category-list">
        {categories.map((category, index) => (
          <div className="category-item" key={index}>
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
