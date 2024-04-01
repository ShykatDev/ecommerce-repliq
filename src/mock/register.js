let registerData = [];

const saveRegisterData = () => {
  localStorage.setItem("registerData", JSON.stringify(registerData));
};

const loadRegisterData = () => {
  const storedData = localStorage.getItem("registerData");
  if (storedData) {
    registerData = JSON.parse(storedData);
  }
};

export { registerData, saveRegisterData, loadRegisterData };
