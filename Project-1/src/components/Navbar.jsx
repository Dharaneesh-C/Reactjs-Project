import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">GUVI</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/business">Businesss</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/health">Health</Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/science">Science</Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/sports">Sports</Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;