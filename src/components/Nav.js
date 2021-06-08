import React from "react";

import Login from "./Login";

function Nav(props) {
  const HeaderContent = () => {
    if (props.user) {
      return (
        <div class="navbar-end">
          <div class="navbar-item">{props.user.name}</div>
          <div class="navbar-item">
            <button
              class="button is-danger is-light is-small"
              onClick={props.logout}
            >
              {" "}
              Logout
            </button>
          </div>
        </div>
      );
    } else {
      return <Login />;
    }
  };
  return (
    <header class="navbar">
      {props.loading ? <p>LOADING.....</p> : <HeaderContent />}
    </header>
  );
}

export default Nav;
