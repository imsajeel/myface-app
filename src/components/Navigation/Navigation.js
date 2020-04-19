import React from "react";

const Navigation = (onRouteChange, isSignedIn) => {
  isSignedIn = onRouteChange.isSignedIn;

  if (isSignedIn === true) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange.onRouteChange("signout")}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange.onRouteChange("signin")}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign In
        </p>

        <p
          onClick={() => onRouteChange.onRouteChange("register")}
          className="f3 link dim black underline pa3 pointer"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
