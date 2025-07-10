const API_BASE_URL = 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  auth: `${API_BASE_URL}/auth`,
  allevents: `${API_BASE_URL}/events`,
  blogArticles: `${API_BASE_URL}/blog`,
  contact: `${API_BASE_URL}/contact`,
  eventRegistration: `${API_BASE_URL}/eventregistration`,
  adminEventRegistration: `${API_BASE_URL}/admin/eventregistration`,
  EVENT_REGISTRATIONS: `${API_BASE_URL}/eventregistration`
};

export const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};