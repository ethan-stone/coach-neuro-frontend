import { ref, reactive, computed } from "vue";

const accessToken = ref("");
const user = reactive({});

export default function userAuth() {


  /*
  - returns a boolean. true if successful, false otherwise

  - access token will be in the response body
  - refresh token will be stored in an httpOnly cookie that is automatically be sent with every request
  */
  async function getTokenPair(username, password) {

    var isSuccess = false;

    const { access, userInfo } = await fetch(`${import.meta.env.VITE_API_ROOT}/token-pair/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then((response) => response.json())
      .then((data) => {
        isSuccess = true;
        return data;
      })
      .catch((error) => {
        console.log(error);
      })

    accessToken.value = access;

    user.id = userInfo.id;
    user.email = userInfo.email;
    user.username = userInfo.username;

    return isSuccess;
  }

  async function refreshAccessToken() {
    
    var isSuccess = false;

    const access = await fetch(`${import.meta.env.VITE_API_ROOT}/refresh-access-token/`, {
      method: "POST"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        isSuccess = true;
        return data;
      })
      .catch((error) => {
        console.log(error)
      })
    
    accessToken.value = access;

    return isSuccess;
  }

  return {
    user,
    accessToken,
    getTokenPair,
    refreshAccessToken
  }

}