const axios = require("axios");

async function sendTelegramMessage(
  botToken,
  userId,
  firstName,
  lastName,
  time,
  date
) {
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        chat_id: userId,
        text: `Перегляд інформації користувача ${firstName} ${lastName} відбувся ${date} о ${time}.`,
      }
    );

    console.log("Message sent successfully");
  } catch (error) {
    console.error("Error sending message:", error.message);
  }

  try {
    const latitude = 37.7749;
    const longitude = -122.4194;

    const response = await axios.post(
      `https://api.telegram.org/bot${botToken}/sendLocation`,
      {
        chat_id: userId,
        latitude: latitude,
        longitude: longitude,
      }
    );

    console.log("Location sent successfully");
  } catch (error) {
    console.error("Error sending location:", error.message);
  }
}

module.exports = { sendTelegramMessage };
