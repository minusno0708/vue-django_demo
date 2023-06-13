import axios from "asios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "x-CSRFTOKEN";
axios.defaults.withCredentials = true;

export { axios };