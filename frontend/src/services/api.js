const   BASE_URL = 'http://localhost:3000';

export async function fetchData(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    return response.json();
}