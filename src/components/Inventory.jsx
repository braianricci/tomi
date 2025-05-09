import React, { useEffect, useState } from 'react';

const InventoryList = () => {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/items')
            .then(res => res.json())
            .then(setItems)
            .catch(console.error);
    }, []);

    const loadDetails = (id) => {
        fetch(`http://localhost:3001/items/${id}`)
            .then(res => res.json())
            .then(data => {
                setSelectedItem(id);
                setDetails(data.characteristics);
            })
            .catch(console.error);
    };

    return (
        <div>
            <h2>Inventory</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <strong>{item.item_name}</strong> ({item.category_name}) {' '}
                        <button onClick={() => loadDetails(item.id)}>View Details</button>
                    </li>
                ))}
            </ul>
            {selectedItem && (
                <div>
                    <h3>Details for Item #{selectedItem}</h3>
                    <ul>
                        {details.map((c, i) => (
                            <li key={i}><strong>{c.key}:</strong> {c.value}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default InventoryList;