// Install Axios first: npm install axios
import React, { useState } from 'react';
import axios from 'axios';

function PurchaseForm() {
  const [formData, setFormData] = useState({
    customerId: '',
    productName: '',
    quantity: 1
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://your-api-gateway-url.amazonaws.com/prod/purchase', formData);
      alert('Purchase submitted successfully!');
    } catch (error) {
      console.error('Error submitting purchase:', error);
      alert('Failed to submit.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="customerId" value={formData.customerId} onChange={handleChange} placeholder="Customer ID" required />
      <input name="productName" value={formData.productName} onChange={handleChange} placeholder="Product Name" required />
      <input name="quantity" type="number" value={formData.quantity} onChange={handleChange} placeholder="Quantity" required />
      <button type="submit">Submit Purchase</button>
    </form>
  );
}

export default PurchaseForm;
