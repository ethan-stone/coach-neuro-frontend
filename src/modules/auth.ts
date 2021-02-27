import User from "../interfaces/user";

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string;
  user: User;
}

const authState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  user: null
};

export const authModule = {
  state: authState,
  getters: {
    accessToken(state: AuthState): string {
      return state.accessToken;
    },
    isAuthenticated(state: AuthState): boolean {
      return state.isAuthenticated;
    },
    currentUser(state: AuthState): User {
      return state.user;
    }
  },
  mutations: {
    setAuthState(
      state: AuthState,
      payload: {
        isAuthenticated: boolean;
        accessToken: string;
        user: User;
      }
    ) {
      state.isAuthenticated = payload.isAuthenticated;
      state.accessToken = payload.accessToken;
      state.user = payload.user;
    }
  },
  actions: {
    async getTokenPair({ commit, state }, { username, password }) {
      var isSuccess = false;

      const { accessToken, userInfo } = await fetch(
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
        .catch((error) => console.error(error));

      const user: User = {
        id: userInfo.id,
        username: userInfo.username,
        email: userInfo.email
      };

      commit("setAuthState", {
        isAuthenticated: isSuccess,
        accessToken: accessToken,
        user: user
      });
    },
    async refreshAccessToken({ commit, state }) {
      var isSuccess = false;

      const accessToken = await fetch(
        `${import.meta.env.VITE_API_ROOT}/refresh-access-token/`,
        {
          method: "POST",
          mode: "cors",
          credentials: "include"
        }
      )
        .then((response) => response.json())
        .then((data) => {
          isSuccess = true;
          return data;
        })
        .catch((error) => {
          console.error(error);
        });
      commit("setAuthState", {
        isAuthenticated: isSuccess,
        accessToken: state.accessToken,
        user: state.user
      });
    }
  }
};
