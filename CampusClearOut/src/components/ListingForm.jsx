import React, { useState } from 'react';
const API = import.meta.env.VITE_BACKEND_URL;

function ListingForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const listingData = { title, description, price };
    console.log("hi!");
    try {
        //post listing, receive response back 
        const response = await fetch(`${API}/listings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(listingData),
      });

      if (response.ok) {
        console.log('listing submitted successfully');
        // Reset form fields
        setTitle('');
        setDescription('');
        setPrice('');
      } else {
        console.log('failed to submit listing');
      }
    } catch (error) {
      console.error('error submitting listing:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit Listing</button>
    </form>
  );
}

export default ListingForm;
