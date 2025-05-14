import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories.jsx';
import ItemTable from '../components/ItemTable.jsx';


const Inventory = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/categorias')
            .then(res => res.json())
            .then(setCategories)
            .catch(console.error);
    }, []);

    /*const loadDetails = (id) => {
        fetch(`http://localhost:3001/items/${id}`)
            .then(res => res.json())
            .then(data => {
                setSelectedItem(id);
                setDetails(data.characteristics);
            })
            .catch(console.error);
    };*/

    return (
        <>
            <h2>Inventory</h2>
            <Categories
                categories={categories}
                onSelect={setSelectedCategoryId}
                selectedId={selectedCategoryId}
            />
            <ItemTable categoryId={selectedCategoryId} />
        </>
    );
};

export default Inventory;