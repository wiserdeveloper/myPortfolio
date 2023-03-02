const NavBar = () => {
  return (
    <body>
      <div class="nav">
        <input type="checkbox" id="nav-check"></input>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div class="nav-links">
          <a id="nav-text" href="home">
            Home
          </a>
          <a id="nav-text" href="about">
            About
          </a>
          <a id="nav-text" href="projects">
            Projects
          </a>
          <a
            id="nav-text"
            href="https://docs.google.com/document/d/e/2PACX-1vQtNoZYCFw7yDl46cDQnuPIBhEb7_ptqam1KFcQ_e96foMd9OQD-_MNOlRbWnX75yiRPW3TrdNKpcRE/pub"
          >
            Resume
          </a>
          <a href="contact">Contact</a>
        </div>
      </div>
    </body>
  );
};

export default NavBar;
