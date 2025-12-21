// const crypto = require("crypto");

// function generateChatId(ip, userAgent) {
//   const ipPrefix = ip.split(".").slice(0, 2).join(".");
//   const raw = ipPrefix + userAgent;
//   return crypto.createHash("sha256").update(raw).digest("hex");
// }

// function maskChatId(chatId) {
//   return `awc-${chatId.slice(0, 4)}****${chatId.slice(-4)}`;
// }

// module.exports = {
//   generateChatId,
//   maskChatId,
// };
