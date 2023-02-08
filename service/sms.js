const axios = require('axios');

async function sendSms(phone) {
  const API_KEY = '';
  const URL = `https://2factor.in/API/V1/${API_KEY}/SMS/${phone}/AUTOGEN2/mobile_otp`;
  return await axios.get(URL);
}

module.exports = {
  sendSms
};



