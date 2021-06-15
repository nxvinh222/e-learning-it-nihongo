import React from "react";

import Login from "components/Login";

function Nav(props) {
  const UserName = () => {
    if (props.user) {
      return (
        // <div className="">
        //   <div className="nav-item">{props.user.name}</div>
        //   <div className="nav-item">
        //     <button
        //       className="button is-danger is-light is-small"
        //       onClick={props.logout}
        //     >
        //       {" "}
        //       Logout
        //     </button>
        //   </div>
        // </div>
        <a className="nav-link" href="#">
          Hello, {props.user.name}
        </a>
      );
    } else {
      return <Login />;
    }
  };
  const LogoutButton = () => {
    return (
      <a className="nav-link justify-content-end" href="#">
        <a
          className="button is-danger is-light is-small"
          onClick={props.logout}
        >
          {" "}
          Logout
        </a>
      </a>
    );
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className=" collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/home">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/add">
              Add Test
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/stats">
              Personal Stats
            </a>
          </li>
          <li className="nav-item">
            {props.loading ? <p>LOADING.....</p> : <UserName />}
          </li>
          <li className="nav-item">
            <LogoutButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
