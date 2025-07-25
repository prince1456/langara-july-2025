
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api';
const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
 const response = await fetch(`${API_URL}${endpoint}`, {
    ...options
 })
 const data = await response.json();
 return data
}

export { apiRequest}