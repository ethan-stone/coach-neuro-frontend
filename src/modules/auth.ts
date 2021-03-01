import User from "../interfaces/user";

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string;
  csrfToken: string;
  user: User;
}

const authState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  csrfToken: null,
  user: null
};

function getCookie(cname: string) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

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
    },
    csrfToken(state: AuthState): string {
      return state.csrfToken;
    }
  },
  mutations: {
    setAuthState(
      state: AuthState,
      payload: {
        isAuthenticated: boolean;
        accessToken: string;
        csrfToken: string;
        user: User;
      }
    ) {
      state.isAuthenticated = payload.isAuthenticated;
      state.accessToken = payload.accessToken;
      state.csrfToken = payload.csrfToken;
      state.user = payload.user;
    }
  },
  actions: {
    async getTokenPair({ commit }, { username, password }) {
      console.log(username);
      console.log(password);

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
        csrfToken: getCookie("csrftoken"),
        user: user
      });
    },
    async refreshAccessToken({ commit, getters, state }) {
      var isSuccess = false;

      const accessToken = await fetch(
        `${import.meta.env.VITE_API_ROOT}/refresh-access-token/`,
        {
          method: "POST",
          mode: "cors",
          credentials: "include",
          headers: {
            "X-CSRFToken": getters.csrfToken,
            Referer: `${import.meta.env.VITE_HOST_ROOT}`
          }
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

      commit("setAuthState", {
        isAuthenticated: isSuccess,
        accessToken: accessToken,
        csrfToken: getCookie("csrftoken"),
        user: state.user
      });
    }
  }
};
