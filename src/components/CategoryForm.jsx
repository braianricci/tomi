import React from 'react';

const CategoryForm = ({ formCats, setFormCats, editing, onSave, onCancel }) => {
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
        onSave(formCats, editing);
    };

    return (
        <div className="p-3 border bg-light">
            <h5>Nueva categoría:</h5>
            {formCats.map((cat, index) => (
                <div key={index} className="d-flex mb-2">
                    <input
                        type="text"
                        className="form-control me-2"
                        placeholder="Nombre de nueva categoria"
                        onChange={e => updateName(index, e.target.value)}
                    />
                    <button className="btn btn-danger" onClick={() => removeField(index)}>-</button>
                </div>
            ))}
            <button className="btn btn-secondary me-2" onClick={addField}>Add</button>
            <button className="btn btn-primary me-2" onClick={handleSubmit}>Save</button>
            <button className="btn btn-danger" onClick={onCancel}>Cancel</button>
        </div>
    );
};

export default CategoryForm;