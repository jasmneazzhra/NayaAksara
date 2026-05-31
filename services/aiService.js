const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const AI_URL =
  "https://unwoven-arena-recount.ngrok-free.dev/predict";

async function predictImage(imagePath) {
  const formData = new FormData();

  formData.append(
    "image",
    fs.createReadStream(imagePath)
  );

  const response = await axios.post(
    AI_URL,
    formData,
    {
      headers: formData.getHeaders(),
      timeout: 30000
    }
  );

  return response.data;
}

module.exports = {
  predictImage,
};