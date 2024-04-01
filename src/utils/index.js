const getRandomToken = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < 50; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
};

const checkRegisterdUser = (num, pass) => {
  const registeredDB = JSON.parse(localStorage.getItem("registerData"));

  const findUser = registeredDB.find((user) => {
    return user.number === num && user.password === pass;
  });
  return findUser;
};

export { getRandomToken, checkRegisterdUser };
