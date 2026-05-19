const BASE_URL = 'http://localhost:3000';

export async function fetchData(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    return response.json();
}
export async function submitQuestImage(file) {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(`${BASE_URL}/submit-quest`, {
        method: "POST",
        body: formData,
    });

    return response.json();
}