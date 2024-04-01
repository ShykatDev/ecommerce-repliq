const getRandomToken = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let token = "";

  for (let i = 0; i < 50; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return token;
};

export { getRandomToken };
