const BASE_URL = 'http://localhost:3000/api'; // ganti ke https://0a01-202-57-27-91.ngrok-free.app/api kabarin nanti kalo mau test ngrok nya aku matiin


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