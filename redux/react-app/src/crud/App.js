import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUser } from '../crud/usesSlice';

function App() {
  const users = useSelector(state => state.users); // Redux से यूज़र डेटा
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState(''); // नया यूज़र जोड़ने का स्टेट
  const [editUser, setEditUser] = useState({ id: null, name: '' }); // एडिटिंग स्टेट

  const handleAdd = () => {
    if (newUser.trim()) {
      dispatch(addUser({ id: Date.now(), name: newUser })); // नया यूज़र जोड़ें
      setNewUser('');
    }
  };

  const handleUpdate = () => {
    if (editUser.name.trim()) {
      dispatch(updateUser(editUser)); // यूज़र अपडेट करें
      setEditUser({ id: null, name: '' });
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>CRUD App</h1>

      
      <div>
        <input
          value={newUser}
          onChange={e => setNewUser(e.target.value)}
          placeholder="Add user"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      
      {editUser.id && (
        <div>
          <input
            value={editUser.name}
            onChange={e => setEditUser({ ...editUser, name: e.target.value })}
            placeholder="Edit user"
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}

      
      <ul>
        {users && users.map(user => (
          <li key={user.id}>
            {user.name}{' '}
            <button onClick={() => setEditUser(user)}>Edit</button>
            <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
