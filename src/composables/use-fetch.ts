import { toRefs, reactive } from "vue";
import FetchOptions from "../interfaces/fetchOptions";
import { refreshAccessToken } from "./use-auth";

export default function useFetch(url: string, options: FetchOptions) {
  const state = reactive({
    response: [],
    error: null,
    fetching: false,
    isSuccess: false
  });

  async function tryFetch() {
    var isSuccess = false;
    await fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        isSuccess = true;
        state.response = data;
      })
      .catch((error) => {
        state.error = error;
      });
    return isSuccess;
  }

  async function fetchData() {
    state.fetching = true;

    // try request with current access token
    const isInitialSuccess = await tryFetch();
    state.isSuccess = isInitialSuccess;

    if (!isInitialSuccess) {
      // if not successful refresh the token
      const isRefreshSuccess = await refreshAccessToken();

      // if refresh is not successful force logout to login again
      if (!isRefreshSuccess) {
        // force logout
      }

      // retry request
      const isRetrySuccess = await tryFetch();
      state.isSuccess = isRetrySuccess;
    }
    // final result of state.isSuccess will be handled by caller of fetchData
    // caller will display appropiate error message
  }

  return { ...toRefs(state), fetchData };
}
