import React, { useState, useEffect } from 'react';

const Users = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch('http://localhost:9000/users/')
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          setUsers(data)
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);

    return <div>
        {JSON.stringify(users)}
    </div>
};

export default Users;