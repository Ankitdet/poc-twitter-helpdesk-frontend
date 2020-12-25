// API HOST URLs
let HOST_URL;
if (window.location.origin === "https://poc-twitter-helpdesk-frontend.herokuapp.com") {
  HOST_URL = "https://poc-twitter-helpdesk-backend.herokuapp.com";
} else {
  HOST_URL = "http://localhost:5000";
}
export const API_HOST = HOST_URL;
