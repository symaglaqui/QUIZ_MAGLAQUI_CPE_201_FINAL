import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { shipUser } from '../actions/shipActions';

const ShippingScreen = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  const [shippingAddress, setShippingAddress] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    dispatch(shipUser({ ...shippingAddress, userInfo }));
  };

  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>
      <h2>Shipping Information</h2>
      <form onSubmit={handleShippingSubmit}>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={shippingAddress.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={shippingAddress.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={shippingAddress.postalCode}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={shippingAddress.country}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default ShippingScreen;
