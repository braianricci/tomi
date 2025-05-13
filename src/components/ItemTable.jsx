import React, { useEffect, useState } from 'react';

const ItemTable = ({ categoryId }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/items?categoryId=${categoryId}`)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [categoryId]);

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Detalles</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.item_name}</td>
                        <td>
                            <button onClick={() => alert(`Show details for item ${item.id}`)}>
                                Ver Detalles
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ItemTable;