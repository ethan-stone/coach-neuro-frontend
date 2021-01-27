import { toRefs, reactive } from "vue";

export default function useFetch(url: string, options: any) {
  const state = reactive({
    response: [],
    error: null,
    fetching: false
  });

  async function fetchData() {
    state.fetching = true;
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      state.response = json;
    } catch (errors) {
      state.error = errors;
    } finally {
      state.fetching = false;
    }
  }

  return { ...toRefs(state), fetchData };
}
