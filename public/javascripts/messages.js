const moment = require("moment");
const currentMoment = moment().startOf("hour").fromNow();

const messages = [
  {
    text: "Goodbye JoJo!",
    user: "Dio Brando",
    added: currentMoment
  },
  {
    text: "I'm going to make you cry, Dio!!",
    user: "Jonathan Joestar",
    added: currentMoment
  },
];

module.exports = messages;