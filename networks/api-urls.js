const baseUrl = "https://secret-depths-94636.herokuapp.com/api";
// 'https://blooming-eyrie-20553.herokuapp.com/api';
// 'https://blooming-eyrie-20553.herokuapp.com/api';
// "http://localhost:3000/api";
const auth = {
  login: "/auth/login",
  signup: "/auth/register",
  sendOtp: "/auth/verifyUser",
};

export { baseUrl, auth };
