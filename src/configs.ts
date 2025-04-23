import { createBrowserHistory } from "history";

const TYPE_REST = "REST";
const SOCKET_URL = "mqtt://senshost.com";

export enum APILIST {
  LOGIN = "auth/login",
  REGISTER = "auth/register",
  HOSTELS = "hostels",
  GET_HOSTEL = "get-hostel",
  GET_ALL_HOSTEL = "get-all-hostel",
  GET_ALL_USERS = "get-all-users"
}

// Determine API URL based on environment
const getApiUrl = () => {
  // For local development
  if (process.env.NODE_ENV === 'development') {
    return "https://app.afriproedu.com/api"; // Use your local API server URL
  }
  
  // For production (Netlify)
  return "https://app.afriproedu.com/api"; // Use HTTPS!
};

const configs = {
  delay: 500,
  dashbordRefreshRate: 1,
  port: 8015,
  appName: "senhost",
  toastDelay: 5000,
  tokenStorage: "TOKEN_PERSIST",
  socket: SOCKET_URL,
  type: TYPE_REST,
  
  // Use the function to get the appropriate API URL
  context: getApiUrl(),
  
  history: createBrowserHistory(),
  requestTimeOut: 30000,
  apiList: APILIST,
  tablePageSize: 10,
};

export default configs;