import React, { useState } from 'react';
import CategoryForm from './CategoryForm.jsx';


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
                <CategoryForm
                    formCats={formCats}
                    setFormCats={setFormCats}
                    editing={editing}
                    onSave={(data, isEditing) => {
                        onSave(data, isEditing);
                        setShowForm(false);
                    }}
                    onCancel={closeNewForm}
                />
            )}
        </>
    );
};

export default Categories;