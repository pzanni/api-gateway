import React, { useState, useEffect } from 'react';

const Reviews = ({ item, onGoBack }) => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:9000/reviews/item/${item?._id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setReviews(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return <div className="items">
    <a
      style={{ 
        color: 'salmon',
        fontWeight: '700',
        display: 'flex',
        alignSelf: 'start',
        cursor: 'pointer',
        fontSize: '23px'
      }}
      onClick={onGoBack}
    >
      {`<`}
    </a>
    <span>Looking at reviews for</span>
    <h1 style={{ marginTop: '5px' }}>{item.name}</h1>
    <button style={{ padding: '10px 40px', fontWeight: '700' }} className="review-button">Review it!</button>
    {
      reviews?.length > 0 && reviews.map(review => (
        <div key={review._id} className="item">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <p className="review-title">{review.title}</p>
          </div>
          
          <p className="review-content">{review.content}</p>
        </div>
      ))
    }


  </div>
};

export default Reviews;