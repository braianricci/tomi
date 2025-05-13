import React from 'react';

const Categories = ({ categories, onSelect, selectedId }) => {
    return (
        <>
            <h4>Categorías</h4>
            <div
                className="d-flex flex-wrap gap-2 overflow-auto"
                style={{ maxHeight: '200px', margin: '20px' }}
            >
                {categories.map(cat => (
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        key={cat.id}
                        style={{ backgroundColor: cat.id === selectedId ? '#cfcfff' : undefined }}
                        onClick={() => onSelect(cat.id)}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>
        </>
    );
};

export default Categories;