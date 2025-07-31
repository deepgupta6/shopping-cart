import React, { useState, useEffect } from 'react';
import { getItems, createCart } from '../api';

const ItemsList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await getItems();
            setItems(response.data);
        };
        fetchItems();
    }, []);

    const addToCart = async (itemId) => {
        try {
            await createCart({ items: [{ id: itemId }] });
            alert('Item added to cart');
        } catch (error) {
            console.error('Failed to add item to cart', error);
        }
    };

    return (
        <div>
            <h2>Items</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.ID} onClick={() => addToCart(item.ID)}>
                        {item.Name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemsList;