import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    localStorage.setItem('user', JSON.stringify(formData));
    alert('Registration successful');
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-800">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg flex">
        {/* Image Section */}
        <div className="w-1/2">
          <img
            src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Registration"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Form Section */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-4">Register Form</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:border-orange-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:border-orange-500"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password (8 characters)"
              className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:border-orange-500"
              maxLength={8} // Limit to 8 characters
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
