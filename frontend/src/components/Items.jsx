import React, { useState, useEffect } from 'react';

const Items = ({ subcategory, onReviewClick }) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:9000/items/subcategory/${subcategory?._id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setItems(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return <div className="items">
    {
      items?.length > 0 && items.map(item => (
        <div key={item._id} className="item">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <p className="item-title">{item.name}</p>
            <button className="review-button" onClick={() => onReviewClick(item)}>Reviews</button>
          </div>
          
          <p className="item-desc">{item.description}</p>
        </div>
      ))
    }


  </div>
};

export default Items;