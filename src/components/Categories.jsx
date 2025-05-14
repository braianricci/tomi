import React, { useState } from 'react';

const Categories = ({ categories, onSelect, selectedId, onSave }) => {
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState(false);
    const [formCats, setFormCats] = useState([]);
    const [selectedButton, setSelectedButton] = useState(selectedId);

    const handleButtonClick = (id) => {
        setSelectedButton(id);
        onSelect(id);
    };

    const openNewForm = () => {
        setFormCats([{ name: '' }]);
        setEditing(false);
        setShowForm(true);
    };

    const closeNewForm = () => {
        setEditing(false);
        setShowForm(false);
    };

    const updateName = (index, name) => {
        const updated = [...formCats];
        updated[index].name = name;
        setFormCats(updated);
    };

    const removeField = index => {
        const updated = formCats.filter((_, i) => i !== index);
        setFormCats(updated);
    };

    const addField = () => {
        setFormCats([...formCats, { name: '' }]);
    };

    const handleSubmit = () => {
        onSave(formCats, editing); // You handle the POST or PUT in parent
        setShowForm(false);
    };

    return (
        <>
            <h4>Categorías</h4>

            <div className="d-flex flex-wrap gap-2 overflow-auto" style={{ maxHeight: '200px', margin: '20px' }}>
                <button
                    className="btn btn-outline-primary"
                    style={{ backgroundColor: selectedButton === null ? '#cfcfff' : undefined }}
                    onClick={() => {
                        openNewForm();
                        handleButtonClick(null);
                    }}
                >
                    + nueva
                </button>
                {categories.map(cat => (
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        key={cat.id}
                        style={{
                            backgroundColor: selectedButton === cat.id ? '#cfcfff' : undefined
                        }}
                        onClick={() => {
                            closeNewForm();
                            handleButtonClick(cat.id);

                        }}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {showForm && (
                <div className="p-3 border bg-light">
                    <h5>{editing ? 'Edit Categories' : 'Nueva categoria:'}</h5>
                    {formCats.map((cat, index) => (
                        <div key={index} className="d-flex mb-2">
                            <input
                                type="text"
                                className="form-control me-2"
                                value={cat.name}
                                onChange={e => updateName(index, e.target.value)}
                            />
                            <button className="btn btn-danger" onClick={() => removeField(index)}>-</button>
                        </div>
                    ))}
                    <button className="btn btn-secondary me-2" onClick={addField}>Add</button>
                    <button className="btn btn-primary me-2" onClick={handleSubmit}>Save</button>
                    <button className="btn btn-danger" onClick={closeNewForm}>Cancel</button>
                </div>
            )}
        </>
    );
};

export default Categories;