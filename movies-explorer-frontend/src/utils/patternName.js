const regName = /^[a-zA-Zа-яёА-ЯЁ\s-]/i;
const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

module.exports = {
    regName,
    regEmail,
  };