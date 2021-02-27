import React, { useState, useEffect } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        fetch('http://localhost:9000/reviews/')
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          setReviews(data)
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);

    return <div>
        {JSON.stringify(reviews)}
    </div>
};

export default Reviews;