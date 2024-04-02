const useAuth = () => {
  const loginUser = JSON.parse(localStorage.getItem("loginData"));

  const auth = loginUser.authToken;

  return { auth, loginUser };
};

export { useAuth };
