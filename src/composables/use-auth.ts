import { ref, reactive } from "vue";
import User from "../interfaces/user";

export const accessToken = ref("");
export const user: User = reactive({ id: 0, username: "", email: "" });

export async function getTokenPair(username: string, password: string) {
  var isSuccess = false;

  const { access, userInfo } = await fetch(
    `${import.meta.env.VITE_API_ROOT}/token-pair/`,
    {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }
  )
    .then((response) => response.json())
    .then((data) => {
      isSuccess = true;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });

  accessToken.value = access;

  user.id = userInfo.id;
  user.username = userInfo.username;
  user.email = userInfo.email;

  return isSuccess;
}

export async function refreshAccessToken() {
  var isSuccess = false;

  const access = await fetch(
    `${import.meta.env.VITE_API_ROOT}/refresh-access-token/`,
    {
      method: "POST"
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      isSuccess = true;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });

  accessToken.value = access;

  return isSuccess;
}
