import React, { useEffect, useState } from "react";
import logo from "../../assets/images/images/logo.png";
import Button from "../button/Button";
import "./Header.scss";
function Header() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [burgerMenu, setburgerMenu] = useState(false);
  const burgerMenuClicked = () => {
    setburgerMenu(!burgerMenu);
  };
  const burgerMenuClosed =()=>{
    setburgerMenu(false)
  }
  return (
    <header
      className={
        isSticky
          ? "header__container header__container__sticky"
          : "header__container"
      }
    >
      <div className="container">
        <div className="nav__container">
          <div className="logo__container">
            <a href="#" rel="noopener noreferrer">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="nav__links__container">
            <ul>
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Deposits</a>
              </li>
              <li>
                <a href="#">Loans</a>
              </li>
              <li>
                <a href="#">News & Events</a>
              </li>
              <li>
                <a href="#">PUBLISHED DOCUMENTS</a>
              </li>
              <li className="nav__link__drop__down">
                MORE
                <ul className="more__drop__down__list">
                  <li>
                    <a href="#">AWARDS AND ACHIEVEMENTS</a>
                  </li>
                  <li>
                    <a href="#">CIRCULAR AND POLICIES</a>
                  </li>
                  <li>
                    <a href="#">MANAGEMENT</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Button text="CONTACT US" className={"nav__link__cta__button"} />
          <div
            className="nav__link__hamburger__icon"
            onClick={burgerMenuClicked}
          >
            <svg
              width="60px"
              height="60px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 18L20 18"
                  stroke="#0E6FC2"
                  strokeWidth={2}
                  strokeLinecap="round"
                />{" "}
                <path
                  d="M4 12L20 12"
                  stroke="#0E6FC2"
                  strokeWidth={2}
                  strokeLinecap="round"
                />{" "}
                <path
                  d="M4 6L20 6"
                  stroke="#0E6FC2"
                  strokeWidth={2}
                  strokeLinecap="round"
                />{" "}
              </g>
            </svg>
          </div>
          <div
            className={
              burgerMenu
                ? "nav__links__mobile__container nav__links__mobile__container__active"
                : "nav__links__mobile__container"
            }
          >
            <div className="close__button__container" onClick={burgerMenuClosed}>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3 5.70998C18.2075 5.61728 18.0976 5.54373 17.9766 5.49355C17.8556 5.44337 17.7259 5.41754 17.595 5.41754C17.464 5.41754 17.3343 5.44337 17.2134 5.49355C17.0924 5.54373 16.9825 5.61728 16.89 5.70998L12 10.59L7.10998 5.69998C7.0174 5.6074 6.90749 5.53396 6.78652 5.48385C6.66556 5.43375 6.53591 5.40796 6.40498 5.40796C6.27405 5.40796 6.1444 5.43375 6.02344 5.48385C5.90247 5.53396 5.79256 5.6074 5.69998 5.69998C5.6074 5.79256 5.53396 5.90247 5.48385 6.02344C5.43375 6.1444 5.40796 6.27405 5.40796 6.40498C5.40796 6.53591 5.43375 6.66556 5.48385 6.78652C5.53396 6.90749 5.6074 7.0174 5.69998 7.10998L10.59 12L5.69998 16.89C5.6074 16.9826 5.53396 17.0925 5.48385 17.2134C5.43375 17.3344 5.40796 17.464 5.40796 17.595C5.40796 17.7259 5.43375 17.8556 5.48385 17.9765C5.53396 18.0975 5.6074 18.2074 5.69998 18.3C5.79256 18.3926 5.90247 18.466 6.02344 18.5161C6.1444 18.5662 6.27405 18.592 6.40498 18.592C6.53591 18.592 6.66556 18.5662 6.78652 18.5161C6.90749 18.466 7.0174 18.3926 7.10998 18.3L12 13.41L16.89 18.3C16.9826 18.3926 17.0925 18.466 17.2134 18.5161C17.3344 18.5662 17.464 18.592 17.595 18.592C17.7259 18.592 17.8556 18.5662 17.9765 18.5161C18.0975 18.466 18.2074 18.3926 18.3 18.3C18.3926 18.2074 18.466 18.0975 18.5161 17.9765C18.5662 17.8556 18.592 17.7259 18.592 17.595C18.592 17.464 18.5662 17.3344 18.5161 17.2134C18.466 17.0925 18.3926 16.9826 18.3 16.89L13.41 12L18.3 7.10998C18.68 6.72998 18.68 6.08998 18.3 5.70998Z"
                  fill="#0E6FC2"
                />
              </svg>
            </div>
            <ul>
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Deposits</a>
              </li>
              <li>
                <a href="#">Loans</a>
              </li>
              <li>
                <a href="#">News & Events</a>
              </li>
              <li>
                <a href="#">PUBLISHED DOCUMENTS</a>
              </li>
              <li>
                <a href="#">AWARDS AND ACHIEVEMENTS</a>
              </li>
              <li>
                <a href="#">CIRCULAR AND POLICIES</a>
              </li>
              <li>
                <a href="#">MANAGEMENT</a>
              </li>
            </ul>
            <Button
              text="CONTACT US"
              className={"nav__link__cta__button__mobile"}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
