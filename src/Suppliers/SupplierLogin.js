import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slice/supplierSlice';


function SupplierLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className='login'>
      <h2>Supplier Login</h2>
      <form onSubmit={handleSubmit}>
        <div >
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default SupplierLogin;