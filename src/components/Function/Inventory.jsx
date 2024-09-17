import React, { useState } from 'react';
import Header from '../Dashboard/Header';
import Sidebar from '../Dashboard/Sidebar';
import '../Style/Dashboard.css';
import inventoryData from '../Data/Inventory.json'; // Adjust the path as needed

function Inventory() {
    const [inventory, setInventory] = useState(inventoryData);
    const [newItem, setNewItem] = useState({
        id: '',
        name: '',
        quantity: '',
        price: '',
        supplier: '',
        category: '',
        status: ''
    });

    // Function to handle adding a new item
    const addItem = () => {
        if (!newItem.name || !newItem.quantity || !newItem.price) {
            alert('Please fill in all required fields');
            return;
        }
        const itemId = inventory.length ? Math.max(inventory.map(item => item.id)) + 1 : 1;
        setInventory([...inventory, { ...newItem, id: itemId }]);
        setNewItem({
            id: '',
            name: '',
            quantity: '',
            price: '',
            supplier: '',
            category: '',
            status: ''
        });
    };

    // Function to handle deleting an item
    const deleteItem = (id) => {
        setInventory(inventory.filter(item => item.id !== id));
    };

    return (
        <div className="inventory">
            <Header />
            <Sidebar />
            <div className="inventory-body">
                <div className="inventory-header">
                    <h1>Inventory</h1>
                </div>
                <div className="inventory-content">
                    <div className="inventory-form">
                        <h2>Add New Item</h2>
                        <input
                            type="text"
                            placeholder="Name"
                            value={newItem.name}
                            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder="Quantity"
                            value={newItem.quantity}
                            onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            value={newItem.price}
                            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Supplier"
                            value={newItem.supplier}
                            onChange={(e) => setNewItem({ ...newItem, supplier: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            value={newItem.category}
                            onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Status"
                            value={newItem.status}
                            onChange={(e) => setNewItem({ ...newItem, status: e.target.value })}
                        />
                        <button onClick={addItem}>Add Item</button>
                    </div>
                    <table className="inventory-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Supplier</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventory.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price}</td>
                                    <td>{item.supplier}</td>
                                    <td>{item.category}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Inventory;
