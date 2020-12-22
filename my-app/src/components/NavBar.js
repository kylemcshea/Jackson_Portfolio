import React from "react";

function NavBar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/projects">PROJECTS</a>
        </li>
        <li>
          <a href="/testimonials">TESTIMONIALS</a>
        </li>
        <li>
          <a href="/media">MEDIA COVERAGE</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
