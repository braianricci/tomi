import React, { useEffect, useState } from 'react';

const ItemTable = ({ categoryId }) => {
    const [items, setItems] = useState([]);
    const [allKeys, setAllKeys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/items?categoryId=${categoryId}`)
            .then(res => res.json())
            .then(data => {
                console.log('Fetched items:', data);
                setItems(data);
                // Collect all unique keys for dynamic table headers
                const keys = new Set();
                data.forEach(item => {
                    Object.keys(item.characteristics || {}).forEach(key => keys.add(key));
                });
                setAllKeys([...keys]);
            });
    }, [categoryId]);

    return (
        <table className="nowrap table table-bordered table-hover w-100">
            <thead>
                <tr>
                    <th>Nombre</th>
                    {allKeys.map(key => (
                        <th key={key}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        {allKeys.map(key => (
                            <td key={key}>{item.characteristics[key] || '-'}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ItemTable;