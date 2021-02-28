import React, { useState, useEffect } from 'react';

const Items = ({ subcategory }) => {
    const [items, setItems] = useState(null);

    console.log('items!')

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

    return <div>
        {JSON.stringify(items)}
    </div>
};

export default Items;