/**
 * TODO:
 *  - check if token exists if yes, display Profile and Logout buttons instead of Login
 *  - this script is only for definitions and "on start/load" checks
 */

const token = localStorage.getItem("token") || false

const loadingScreen = document.getElementById("eva_loadingScreen")
const loginBtn = document.getElementById("eva_loginBtn")
const profileBtn = document.getElementById("eva_profileBtn")

const pageMode = async () => {
  loginBtn.style.display = (token)? "none" : "";
  profileBtn.style.display = (token)? "" : "none";

  loadingScreen.style.display = "none";
}