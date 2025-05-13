import React from 'react';

const Categories = ({ categories, onSelect, selectedId }) => {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Categorías</th>
                </tr>
            </thead>
            <tbody>
                {categories.map(cat => (
                    <tr
                        key={cat.id}
                        style={{ backgroundColor: cat.id === selectedId ? '#eef' : '' }}
                        onClick={() => onSelect(cat.id)}
                    >
                        <td>{cat.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Categories;