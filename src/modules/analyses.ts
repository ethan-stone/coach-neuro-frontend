import User from "../interfaces/user";
import Analysis from "../interfaces/analysis";

interface AnalysesState {
  analyses: Analysis[];
}

const analysesState: AnalysesState = {
  analyses: []
};

async function tryFetchAnalysis(payload: {
  accessToken: string;
  csrfToken: string;
  user: User;
}) {
  var isSuccess = false;

  const analyses = await fetch(
    `${import.meta.env.VITE_API_ROOT}/users/analyses/`,
    {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        Authorization: "Token " + payload.accessToken,
        "X-CSRFToken": payload.csrfToken,
        Referer: `${import.meta.env.VITE_HOST_ROOT}`,
        "Content-Type": "application/json"
      }
      // body: JSON.stringify({
      //   user_id: payload.user.id
      // })
    }
  )
    .then((response) => {
      if (response.ok) {
        isSuccess = true;
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.error(error);
    });

  return { isSuccess, analyses };
}

export const analysesModule = {
  state: analysesState,
  getters: {
    analyses(state: AnalysesState) {
      return state.analyses;
    }
  },
  mutations: {
    setAnalyses(state: AnalysesState, payload: { analyses: Analysis[] }) {
      state.analyses = payload.analyses;
    }
  },
  actions: {
    async fetchAnalyses({ dispatch, commit, getters }) {
      const {
        isSuccess: isInitialSuccess,
        analyses: initialAnalyses
      } = await tryFetchAnalysis({
        accessToken: getters.accessToken,
        csrfToken: getters.csrfToken,
        user: getters.currentUser
      });

      if (isInitialSuccess) {
        commit("setAnalyses", { analyses: initialAnalyses });
        return;
      }

      // if not success resfresh access token and try again
      dispatch("refreshAccessToken");

      // if the not authenticated after refresh
      // log back in
      if (!getters.isAuthenticated) {
        // force logout
      }

      const {
        isSuccess: isRetrySuccess,
        analyses: retryAnalyses
      } = await tryFetchAnalysis({
        accessToken: getters.accessToken,
        csrfToken: getters.csrfToken,
        user: getters.currentUser
      });

      if (isRetrySuccess) {
        commit("setAnalyses", { analyses: retryAnalyses });
        return;
      }

      // go to error page
    },
    async createNewAnalysis() {}
  }
};
