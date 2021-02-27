import { ref } from "vue";
import { user, accessToken } from "./use-auth";
import useFetch from "./use-fetch";

export const analyses = ref([]);

export function getUsersAnalyses() {
  const url = `${import.meta.env.VITE_API_ROOT}/users/analyses/`;

  const { response, error, fetching, isSuccess, fetchData } = useFetch(url, {
    method: "GET",
    headers: {
      Authorization: "Token " + accessToken.value,
      "Content-Type": "application/json"
    },
    body: {
      user_id: user.id
    }
  });

  fetchData();

  console.log(response);
}
