import React, { useReducer, createContext } from "react";
import jwtDecode, { JwtPayload } from "jwt-decode";
import PropTypes from "prop-types";

interface InitialStateInterface {
  user: JwtPayload | null;
}

const initialState: InitialStateInterface = {
  user: null,
};

if (localStorage.getItem("jwtToken")) {
  const storedToken = localStorage.getItem("jwtToken");
  if (storedToken != null) {
    const decodedToken = jwtDecode<JwtPayload>(storedToken);

    // if (decodedToken?.exp * 1000 < Date.now()) {
    //   localStorage.removeItem("jwtToken");
    //   initialState.user = null;
    // } else {
    //   initialState.user = decodedToken;
    // }
  }
}

const AuthContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT": {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
}

function AuthProvider({ children }) {
  // useReducer hooks gives us access to current state object and dispatch function
  const [state, dispatch] = useReducer(authReducer, initialState);

  // defining login and logout functions on user given back from context
  function login(userData) {
    localStorage.setItem("jwtToken", userData.token);
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  }

  function logout() {
    localStorage.removeItem("jwtToken");
    dispatch({
      type: "LOGOUT",
    });
  }
  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { AuthContext, AuthProvider };
