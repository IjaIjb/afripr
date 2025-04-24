import { createBrowserHistory } from "history";

//API CALL TYPE
//const TYPE_LOCAL = "LOCAL";
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

//CONFIG DATA (Please change here only)
const configs = {
  delay: 500,
  dashbordRefreshRate: 1,
  port: 8015,
  appName: "senhost",
  toastDelay: 5000,
  tokenStorage: "TOKEN_PERSIST",
  socket: SOCKET_URL,
  type: TYPE_REST,



context: "https://io.afriproedu.com/api",

  history: createBrowserHistory(),
  requestTimeOut: 30000,
  apiList: APILIST,
  tablePageSize: 10,
};
export default configs;
