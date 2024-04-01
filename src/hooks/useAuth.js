const useAuth = () => {
  const loginAuth = JSON.parse(localStorage.getItem("loginData"));

  return loginAuth.authToken;
};

export { useAuth };
