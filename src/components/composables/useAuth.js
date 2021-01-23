import { ref } from "vue";

export default function userAuth() {
  const accessToken = ref("")
  const refreshToken = ref("")

  /*
  returns a boolean. true if successful, false otherwise
  */
  async function getTokenPair(username, password) {

    var isSuccess = false;

    const { refresh, access } = await fetch(`${import.meta.env.VITE_API_ROOT}/api/token/`, {
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
    
    refreshToken.value = refresh;
    accessToken.value = access;

    return isSuccess;
  }

  return {
    accessToken,
    refreshToken,
    getTokenPair
  }

}