import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from '../config/api';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      const response = await fetch(API_ENDPOINTS.auth + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      // Redirect to admin dashboard
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Admin Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '100px auto',
    padding: '40px',
    backgroundColor: '#1e3a2e',
    color: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center'
  },
  title: {
    marginBottom: '30px',
    fontSize: '28px',
    fontWeight: 'bold'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    pointerEvents: 'auto', // ✅ Ensure input is not blocked
    backgroundColor: '#fff',
    color: '#000'
  },
  button: {
    padding: '12px',
    backgroundColor: '#d4b896',
    color: '#2d5a4a',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'background-color 0.3s'
  },
  error: {
    color: '#ff6b6b',
    fontSize: '14px'
  }
};

export default AdminLogin;