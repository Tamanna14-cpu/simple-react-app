import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalIncome = cart.reduce((sum, user) => sum + user.income, 0);

    return (
        <div>
            <h5>Total Users : {cart.length}</h5>
            <h5>User's Income : {totalIncome}</h5>
        </div>
    );
};

export default Cart;