import React from 'react';
import { getOrders } from '../api';

const OrderHistory = () => {
    const showOrderHistory = async () => {
        try {
            const response = await getOrders();
            const orderIds = response.data.map(order => order.ID);
            window.alert(`Order IDs: ${orderIds.join(', ')}`); // [cite: 86]
        } catch (error) {
            console.error('Failed to get order history', error);
        }
    };

    return (
        <button onClick={showOrderHistory}>Order History</button>
    );
};

export default OrderHistory;