import React, { useState, useEffect } from 'react';
import Items from '../components/Items';

const Users = () => {
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const onCategroryClick = (category) => {
    setSelectedSubCategory(null);
    if (category._id === selectedCategory?._id) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
      fetch(`http://localhost:9000/subcategories/category/${category._id}`)
        .then(response => response.json())
        .then(data => {
          setSubCategories(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }

  const Category = ({ category }) => (
    <div key={category._id}>
      <button
        className={`category-item ${selectedCategory?._id === category._id && 'category-item-active'}`}
        onClick={() => onCategroryClick(category)}
      >
        {category.name}
      </button>
      {selectedCategory?._id === category._id &&
        subCategories?.length > 0 && <SubCategories subcategories={subCategories} />
      }
    </div>

  );

  const SubCategories = ({ subcategories }) => (
    <div className="subcategories" key={subcategories[0]._id}>
      {subcategories?.map(subcat => {
        return (
          <button
            className={`subcategory-item ${selectedSubCategory?._id === subcat._id && 'subcategory-item-active'}`}
            key={subcat._id + subcat.name}
            onClick={() => setSelectedSubCategory(subcat)}>
            {subcat.name}
          </button>
        );
      })}
    </div>
  );

  useEffect(() => {
    fetch('http://localhost:9000/categories/')
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setCategories(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <div className="categories">
        {categories?.map((cate => (
          <Category category={cate} />
        )))}
      </div>
      {
        selectedSubCategory && (
          <div className="category-content">
            <Items subcategory={selectedSubCategory} />
          </div>
        )
      }

    </div>
  );

};

export default Users;