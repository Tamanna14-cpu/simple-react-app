import React from 'react';
import { useEffect, useState } from 'react';
import userData from '../user/user.json';
import Data from '../userData/Data';
import Cart from '../Cart/Cart';
import './Body.css';

const Body = () => {
    const [user, setUser] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setUser(userData);
    }, [])

    const handleAddData = (user) => {
        const newCart = [...cart, user];
        setCart(newCart);
    }



    return (
        <div className='body-container'>
            <div className="user-container">
                {
                    user.map(users => <Data user={users} handleAddData={handleAddData}></Data>)
                }
            </div>

            <div>
                <h3>User Num : {user.length}</h3>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Body;