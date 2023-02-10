const smsLib = require('../service/sms')

async function generateOtp() {
    var val = Math.floor(1000 + Math.random() * 9000);
    return val;
}

async function sendOtpToPhoneNumber(phoneNumber){
 const response = await smsLib.sendSms(phoneNumber);
 return response && response.data ? response.data.OTP : null;
}

module.exports = {
    generateOtp,
    sendOtpToPhoneNumber,
};
