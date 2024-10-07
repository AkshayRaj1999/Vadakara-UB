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
  return (
    <header
      className={
        isSticky
          ? "header__container header__container__sticky"
          : "header__container"
      }
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
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
          <Button text="CONTACT US" />
        </div>
      </div>
    </header>
  );
}

export default Header;
