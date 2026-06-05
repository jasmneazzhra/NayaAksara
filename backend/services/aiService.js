const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const AI_URL =
"https://ikchandra-nayaaksara.hf.space/predict"; //https://unwoven-arena-recount.ngrok-free.dev/predict punya harist

async function predictImage(imageBuffer, originalName, mimetype) {
  const formData = new FormData();

  formData.append("image", imageBuffer, {
    filename: originalName || "upload.jpg",
    contentType: mimetype || "image/jpeg",
    knownLength: imageBuffer.length
  });

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