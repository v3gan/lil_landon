import React from 'react';

const Header = () => {
  return (
    <header id="intro">
      <article class="fullheight">
        <div class="hgroup">
          <h1>Landon Hotel</h1>
          <h2>West London</h2>
          <p>
            <a href="#welcome">
              <img
                src="https://landonhotel.com/images/misc/arrow.png"
                alt="down arrow"
              />
            </a>
          </p>
        </div>
      </article>

      <nav id="nav">
        <div class="navbar">
          <div class="brand">
            <a href="#welcome">
              Landon <span>Hotel</span>
            </a>
          </div>
          <ul>
            <li>
              <a class="icon info" href="#hotelinfo">
                <span>info</span>
              </a>
            </li>
            <li>
              <a class="icon rooms" href="#rooms">
                <span>rooms</span>
              </a>
            </li>
            <li>
              <a class="icon dining" href="#dining">
                <span>dining</span>
              </a>
            </li>
            <li>
              <a class="icon events" href="#events">
                <span>events</span>
              </a>
            </li>
            <li>
              <a class="icon attractions" href="#attractions">
                <span>attractions</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
