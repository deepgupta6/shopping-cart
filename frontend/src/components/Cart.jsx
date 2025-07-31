import React from 'react';
import { getCarts, createOrder } from '../api';

const Cart = () => {
    const showCart = async () => {
        try {
            const response = await getCarts();
            window.alert(JSON.stringify(response.data)); // [cite: 84]
        } catch (error) {
            console.error('Failed to get cart', error);
        }
    };

    const checkout = async () => {
        try {
            const cartsResponse = await getCarts();
            const cartId = cartsResponse.data[0].ID; // Assuming the first cart
            await createOrder({ cart_id: cartId });
            window.alert('Order successful'); // [cite: 88]
        } catch (error) {
            console.error('Checkout failed', error);
        }
    };

    return (
        <div>
            <button onClick={showCart}>Cart</button>
            <button onClick={checkout}>Checkout</button>
        </div>
    );
};

export default Cart;