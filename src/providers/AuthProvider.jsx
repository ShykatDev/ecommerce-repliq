import { AuthContext } from "../context";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getRandomToken } from "../utils";

const AuthProvider = ({ children }) => {
  const [regData, setRegData] = useLocalStorage("registerData", []);
  const [loginData, setLoginData] = useLocalStorage("loginData", {});

  const saveRegisterData = (formData) => {
    setRegData([...regData, formData]);
  };

  const saveLoginData = (formData) => {
    setLoginData({
      ...formData,
      authToken: getRandomToken(),
    });
  };

  return (
    <AuthContext.Provider value={{ saveRegisterData, saveLoginData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
