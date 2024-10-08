import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.scss";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import bannerImageOne from "../../assets/images/images/banner-image-1.png";
import personBanking from "../../assets/images/icons/personal-banking.svg";
import businessBanking from "../../assets/images/icons/business-banking.svg";
import mortgageService from "../../assets/images/icons/mortgage-service.svg";
import onlineBanking from "../../assets/images/icons/online-banking.svg";
import interestRate from "../../assets/images/images/intreset-rate.png";
import whiteSquare from "../../assets/images/images/white-square-images.png";
import depositPlan from "../../assets/images/images/deposits-plan.png";
import topRightImage from "../../assets/images/images/topRightImage.jpg";
import bottomRightImage from "../../assets/images/images/bottomRightImage.jpg";
import middleImage from "../../assets/images/images/middleImage.jpg";
import bottomLeftImage from "../../assets/images/images/bottomLeftImage.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Footer from "../../components/footer/Footer";
import HeroBanner from "../../components/hero-banner/heroBanner";

function HomePage() {
  const serviceData = [
    {
      serviceIcon: personBanking,
      serviceTitle: "Personal Banking",
      servicePara:
        "From savings accounts to personal loans, we offer solutions for your everyday banking needs.",
      ctaButton: (
        <Button text="LEARN MORE" className={"serviceDataPersonalCTA"} />
      ),
    },
    {
      serviceIcon: businessBanking,
      serviceTitle: "Business Banking",
      servicePara:
        "Empower your business with our range of services including business accounts and merchant solutions. a strong Will to Win in the market place",
      ctaButton: (
        <Button
          text="DISCOVER SOLUTIONS"
          className={"serviceDataBusinessCTA"}
        />
      ),
    },
    {
      serviceIcon: mortgageService,
      serviceTitle: "Mortgage Services",
      servicePara:
        "Whether you’re buying your first home or refinancing, we provide competitive rates and expert advice.",
      ctaButton: (
        <Button text="APPLY NOW" className={"serviceDataMortgageCTA"} />
      ),
    },
    {
      serviceIcon: onlineBanking,
      serviceTitle: "Online Banking",
      servicePara:
        "Access your accounts anytime, anywhere with our secure and user-friendly online banking platform.",
      ctaButton: (
        <Button text="GET STARTED" className={"serviceDataOnlineCTA"} />
      ),
    },
  ];

  const depositData = [
    { number: 21, text: "Years of experience" },
    { number: 19, text: "Experienced employees" },
    { number: 6, text: "Years of experience" },
  ];

  const testimonialData = [
    {
      message:
        "Vadakara Urban Bank makes managing my finances easy and personal. Their service is exceptional, and online banking is a breeze. Highly recommended!",
      client: "Priya Sharma",
    },
    {
      message:
        "Their business banking solutions are perfect for my needs. Excellent service and support for my small business. Truly a reliable partner.",
      client: "Rajesh Kumar",
    },
    {
      message:
        "The mortgage process was smooth and straightforward. Their team made buying my home stress-free. I’m thrilled with my new place!",
      client: "Anjali Rao",
    },
  ];




  const settings = {
    dots: true, // Enables pagination
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: () => <div className="custom-dot"></div>,
    dotsClass: "slick-dots custom-dots",
  };

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  return (
    <>
      <Header />
      {/* <section className="hero__banner__section">
        <div className="container">
          <div className="row">
            <div className="col col-lg-6 col-md-6">
              <div className="hero__banner__content__wrapper">
                <h1>Personalized Banking Services Just for You</h1>
                <p>Innovative Solutions for All Your Financial Needs</p>
                <Button
                  text="APPLY ONLINE"
                  className={"hero__banner__cta__button"}
                />
                <div className="hero__banner__cta__container">
                  <div className="tel__cta__container">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.44 13C19.22 13 18.99 12.93 18.77 12.88C18.3245 12.7818 17.8866 12.6515 17.46 12.49C16.9961 12.3212 16.4861 12.33 16.0283 12.5146C15.5704 12.6992 15.1971 13.0466 14.98 13.49L14.76 13.94C13.786 13.3982 12.891 12.7252 12.1 11.94C11.3147 11.149 10.6418 10.254 10.1 9.27999L10.52 8.99999C10.9633 8.78291 11.3108 8.40952 11.4954 7.95168C11.68 7.49384 11.6888 6.9839 11.52 6.51999C11.3612 6.09241 11.2309 5.65479 11.13 5.20999C11.08 4.98999 11.04 4.75999 11.01 4.52999C10.8885 3.82561 10.5196 3.18773 9.9696 2.73123C9.4196 2.27473 8.72467 2.0296 8.00998 2.03999H5.00998C4.57901 2.03594 4.15223 2.1248 3.75869 2.30052C3.36515 2.47624 3.01409 2.73469 2.72941 3.05827C2.44473 3.38186 2.23311 3.76298 2.10897 4.1757C1.98482 4.58842 1.95106 5.02305 2.00998 5.44999C2.54272 9.63937 4.45601 13.5319 7.44763 16.5126C10.4393 19.4934 14.3387 21.3925 18.53 21.91H18.91C19.6474 21.9111 20.3594 21.6405 20.91 21.15C21.2263 20.867 21.4791 20.5202 21.6514 20.1323C21.8238 19.7444 21.9119 19.3244 21.91 18.9V15.9C21.8977 15.2054 21.6448 14.5365 21.1943 14.0077C20.7439 13.4788 20.1238 13.1226 19.44 13ZM19.94 19C19.9398 19.142 19.9094 19.2823 19.8508 19.4116C19.7921 19.5409 19.7066 19.6563 19.6 19.75C19.4886 19.847 19.358 19.9194 19.2167 19.9625C19.0754 20.0056 18.9266 20.0183 18.78 20C15.0349 19.5198 11.5562 17.8065 8.89269 15.1303C6.22917 12.4541 4.53239 8.96733 4.06998 5.21999C4.05406 5.07351 4.06801 4.92532 4.11098 4.78438C4.15395 4.64344 4.22505 4.51268 4.31998 4.39999C4.41369 4.29332 4.52904 4.20783 4.65836 4.14921C4.78767 4.09058 4.92799 4.06017 5.06998 4.05999H8.06998C8.30253 4.05482 8.5296 4.13087 8.71212 4.27506C8.89464 4.41925 9.02119 4.62256 9.06998 4.84999C9.10998 5.12332 9.15998 5.39332 9.21998 5.65999C9.3355 6.18713 9.48924 6.70517 9.67998 7.20999L8.27998 7.85999C8.16028 7.91491 8.0526 7.99294 7.96314 8.08959C7.87367 8.18623 7.80418 8.2996 7.75865 8.42318C7.71312 8.54677 7.69245 8.67812 7.69783 8.80971C7.7032 8.9413 7.73452 9.07054 7.78998 9.18999C9.22918 12.2727 11.7072 14.7508 14.79 16.19C15.0334 16.29 15.3065 16.29 15.55 16.19C15.6747 16.1454 15.7893 16.0764 15.8871 15.9872C15.985 15.8979 16.0641 15.7901 16.12 15.67L16.74 14.27C17.2569 14.4549 17.7846 14.6085 18.32 14.73C18.5866 14.79 18.8566 14.84 19.13 14.88C19.3574 14.9288 19.5607 15.0553 19.7049 15.2378C19.8491 15.4204 19.9252 15.6474 19.92 15.88L19.94 19Z"
                        fill="#0E6FC2"
                      />
                    </svg>
                    <a href="tel:+91-9997776660">999 777 6660</a>
                  </div>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.12 5.32003H17V2.14003C16.0897 2.04538 15.1751 1.99865 14.26 2.00003C11.54 2.00003 9.67999 3.66003 9.67999 6.70003V9.32003H6.60999V12.88H9.67999V22H13.36V12.88H16.42L16.88 9.32003H13.36V7.05003C13.36 6.00003 13.64 5.32003 15.12 5.32003Z"
                            fill="#0E6FC2"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://youtube.com">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23 9.70998C23.0495 8.27864 22.7365 6.858 22.09 5.57998C21.6514 5.05558 21.0427 4.70169 20.37 4.57998C17.5875 4.32751 14.7936 4.22403 12 4.26998C9.21667 4.22194 6.43274 4.32208 3.66003 4.56998C3.11185 4.6697 2.60454 4.92683 2.20003 5.30998C1.30003 6.13998 1.20003 7.55998 1.10003 8.75998C0.954939 10.9175 0.954939 13.0824 1.10003 15.24C1.12896 15.9154 1.22952 16.5858 1.40003 17.24C1.5206 17.745 1.76455 18.2123 2.11003 18.6C2.51729 19.0034 3.03641 19.2752 3.60003 19.38C5.75594 19.6461 7.92824 19.7564 10.1 19.71C13.6 19.76 16.67 19.71 20.3 19.43C20.8775 19.3316 21.4112 19.0595 21.83 18.65C22.11 18.3699 22.3191 18.0271 22.44 17.65C22.7977 16.5526 22.9733 15.4041 22.96 14.25C23 13.69 23 10.31 23 9.70998ZM9.74003 14.85V8.65998L15.66 11.77C14 12.69 11.81 13.73 9.74003 14.85Z"
                            fill="#FF0000"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.4701 2.00002H3.53006C3.33964 1.99737 3.15056 2.03227 2.97362 2.1027C2.79669 2.17314 2.63536 2.27774 2.49886 2.41053C2.36235 2.54332 2.25334 2.7017 2.17805 2.87663C2.10276 3.05155 2.06267 3.2396 2.06006 3.43002V20.57C2.06267 20.7604 2.10276 20.9485 2.17805 21.1234C2.25334 21.2983 2.36235 21.4567 2.49886 21.5895C2.63536 21.7223 2.79669 21.8269 2.97362 21.8973C3.15056 21.9678 3.33964 22.0027 3.53006 22H20.4701C20.6605 22.0027 20.8496 21.9678 21.0265 21.8973C21.2034 21.8269 21.3648 21.7223 21.5013 21.5895C21.6378 21.4567 21.7468 21.2983 21.8221 21.1234C21.8974 20.9485 21.9375 20.7604 21.9401 20.57V3.43002C21.9375 3.2396 21.8974 3.05155 21.8221 2.87663C21.7468 2.7017 21.6378 2.54332 21.5013 2.41053C21.3648 2.27774 21.2034 2.17314 21.0265 2.1027C20.8496 2.03227 20.6605 1.99737 20.4701 2.00002ZM8.09006 18.74H5.09006V9.74002H8.09006V18.74ZM6.59006 8.48002C6.17632 8.48002 5.77953 8.31566 5.48697 8.0231C5.19442 7.73055 5.03006 7.33376 5.03006 6.92002C5.03006 6.50628 5.19442 6.10949 5.48697 5.81693C5.77953 5.52437 6.17632 5.36002 6.59006 5.36002C6.80975 5.3351 7.03224 5.35687 7.24293 5.4239C7.45363 5.49093 7.6478 5.60171 7.81272 5.74898C7.97763 5.89625 8.10958 6.0767 8.19993 6.2785C8.29028 6.4803 8.33698 6.69891 8.33698 6.92002C8.33698 7.14112 8.29028 7.35973 8.19993 7.56154C8.10958 7.76334 7.97763 7.94378 7.81272 8.09106C7.6478 8.23833 7.45363 8.3491 7.24293 8.41613C7.03224 8.48316 6.80975 8.50493 6.59006 8.48002ZM18.9101 18.74H15.9101V13.91C15.9101 12.7 15.4801 11.91 14.3901 11.91C14.0527 11.9125 13.7242 12.0183 13.4489 12.2132C13.1735 12.4081 12.9645 12.6827 12.8501 13C12.7718 13.2351 12.7379 13.4826 12.7501 13.73V18.73H9.75006C9.75006 18.73 9.75006 10.55 9.75006 9.73002H12.7501V11C13.0226 10.5271 13.419 10.1375 13.8965 9.87322C14.374 9.6089 14.9146 9.47987 15.4601 9.50002C17.4601 9.50002 18.9101 10.79 18.9101 13.56V18.74Z"
                            fill="#0E6FC2"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2257 4.78313 20.83 4.17928 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78168 2.77665 4.17693 3.16956 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17693 20.8304 4.78168 21.2234 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1327 16.6348 20.0178 17.2637 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7256 19.3405 18.3332 19.5964 17.9 19.76C17.3037 19.9778 16.6748 20.0927 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38089 20.1123 6.72459 20.0109 6.1 19.8C5.68578 19.6281 5.31136 19.3728 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01586 17.2952 3.88044 16.6519 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86448 7.35106 3.98295 6.70795 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30381 4.65617 5.67929 4.3831 6.1 4.2C6.70955 3.98004 7.352 3.86508 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86728 17.2637 3.98225 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3777 5.30718 19.6338 5.68273 19.8 6.1C20.0223 6.70893 20.1373 7.35178 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z"
                            fill="#0E6FC2"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-lg-6 col-md-6 align-to-viewport">
              <div className="hero__banner__image__container">
                <img src={bannerImageOne} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <HeroBanner/>
      <section className="service__section">
        <div className="container">
          <h3 className="text-center">
            Creating Extraordinary Customer Experience
          </h3>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            bibendum eget morbi dignissim eu pharetra consequat montes,
            sagittis.
          </h6>
          <div className="service__box__container">
            {serviceData.map((service, index) => (
              <div
                key={index}
                className="service__item d-flex justify-content-between flex-column"
              >
                <div className="service__content__wrapper">
                  <div className="service__image__container">
                    <img src={service.serviceIcon} alt={service.serviceTitle} />
                  </div>
                  <h3>{service.serviceTitle}</h3>
                  <p>{service.servicePara}</p>
                </div>
                {service.ctaButton}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="interest__rate__section">
        <div className="container">
          <div className="interest__rate__container">
            <div className="interest__rate__image__container">
              <img src={interestRate} alt="interest-rate-image" />
              <div className="interest__rate__content__container">
                <div className="savings__account__interest">
                  <p>SAVINGS ACCOUNT</p>
                  <h4>2.5% APY</h4>
                </div>
                <div className="deposits__interest__rate">
                  <p>DEPOSIT RATES</p>
                  <h4>3.0% APY</h4>
                </div>
              </div>
            </div>
            <div className="interest__contents__container">
              <h3>Earn more with our competitive interest rates.</h3>
              <p>
                Current Savings Account Rate: 2.5% APY
                <br />
                <br />
                Certificate of Deposit Rates Starting at 3.0% APY
              </p>
              <Button
                text="View More"
                className={"interest__rate__cta__button"}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="loans__scheme__section">
        <div className="container">
          <div className="loans__scheme__content__container">
            <div className="row">
              <div className="col col-lg-6 col-md-12">
                <Slider {...settings}>
                  <div className="loans__scheme__slider">
                    <h6>Loan Schemes</h6>
                    <h3>
                      Flexible loan options to support your financial journey.
                    </h3>
                    <p>
                      Personal Loans with Rates as Low as 6.5% Home Loans with
                      <br />
                      <br />
                      Competitive Rates and Flexible Terms
                    </p>
                  </div>
                  <div className="loans__scheme__slider">
                    <h6>Loan Schemes</h6>
                    <h3>
                      Flexible loan options to support your financial journey.
                    </h3>
                    <p>
                      Personal Loans with Rates as Low as 6.5% Home Loans with
                      <br />
                      <br />
                      Competitive Rates and Flexible Terms
                    </p>
                  </div>
                  <div className="loans__scheme__slider">
                    <h6>Loan Schemes</h6>
                    <h3>
                      Flexible loan options to support your financial journey.
                    </h3>
                    <p>
                      Personal Loans with Rates as Low as 6.5% Home Loans with
                      <br />
                      <br />
                      Competitive Rates and Flexible Terms
                    </p>
                  </div>
                  <div className="loans__scheme__slider">
                    <h6>Loan Schemes</h6>
                    <h3>
                      Flexible loan options to support your financial journey.
                    </h3>
                    <p>
                      Personal Loans with Rates as Low as 6.5% Home Loans with
                      <br />
                      <br />
                      Competitive Rates and Flexible Terms
                    </p>
                  </div>
                </Slider>
              </div>
              <div className="col col-lg-6 col-md-12">
                <div className="loans__scheme__image__container">
                  <img src={whiteSquare} alt="loans-schema" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="deposits__plan__section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-lg-5">
              <div className="deposits__plan__image__container">
                <img src={depositPlan} alt="deposit-plan" />
              </div>
            </div>
            <div className="col col-lg-4">
              <h3>Secure your future with our diverse deposit plans.</h3>
              <p>
                Fixed Deposits with Terms Ranging from{" "}
                <span>6 Months to 5 Years</span>
              </p>
              <br />
              <p>
                Recurring Deposit Plans with{" "}
                <span>Attractive Interest Rates</span>
              </p>
            </div>
            <div className="col col-lg-3">
              <div className="deposit__circles__container" ref={ref}>
                {depositData.map((item, index) => (
                  <div key={index} className="circle d-flex align-items-center">
                    <h3>
                      {inView && (
                        <CountUp start={0} end={item.number} duration={2} />
                      )}
                    </h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="diverse__deposit__section">
        <div className="container">
          <div className="diverse__deposit__container">
            <div className="top__left__image__container">
              <img src={topRightImage} alt="mansion-image" />
            </div>
            <div className="bottom__left__image__container">
              <img src={bottomRightImage} alt="mansion-image" />
            </div>
            <div className="middle__image__container">
              <img src={middleImage} alt="mansion-image" />
            </div>
            <div className="right__top__content__container">
              <h3>Secure your future with our diverse deposit plans.</h3>
            </div>
            <div className="right__middle__content__container">
              <p>
                Take a look at our latest moments, from community events to
                behind-the-scenes at our branches.
              </p>
            </div>
            <div className="right__bottom__image__container">
              <img src={bottomLeftImage} alt="mansion-image" />
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial__section">
        <div className="container">
          <h3>What Our Customers Are Saying</h3>
          <p>
            Real experiences from those who know us best. Discover why our
            customers trust and value Vadakara Urban Bank.
          </p>
          <div className="testimonial__card__container">
            <div className="row">
              {testimonialData.map((testimonial, index) => (
                <div className="col col-lg-4 col-md-12" key={index}>
                  <div className="card">
                    <svg
                      width={89}
                      height={16}
                      viewBox="0 0 89 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M79.4641 0.550844C79.8391 -0.199156 80.9016 -0.167906 81.2454 0.550844L83.3079 4.70709L87.8704 5.36334C88.6829 5.48834 88.9954 6.48834 88.4016 7.08209L85.1204 10.3008L85.9016 14.8321C86.0266 15.6446 85.1516 16.2696 84.4329 15.8946L80.3704 13.7383L76.2766 15.8946C75.5579 16.2696 74.6829 15.6446 74.8079 14.8321L75.5891 10.3008L72.3079 7.08209C71.7141 6.48834 72.0266 5.48834 72.8391 5.36334L77.4329 4.70709L79.4641 0.550844Z"
                        fill="#FF0000"
                      />
                      <path
                        d="M61.4641 0.550844C61.8391 -0.199156 62.9016 -0.167906 63.2454 0.550844L65.3079 4.70709L69.8704 5.36334C70.6829 5.48834 70.9954 6.48834 70.4016 7.08209L67.1204 10.3008L67.9016 14.8321C68.0266 15.6446 67.1516 16.2696 66.4329 15.8946L62.3704 13.7383L58.2766 15.8946C57.5579 16.2696 56.6829 15.6446 56.8079 14.8321L57.5891 10.3008L54.3079 7.08209C53.7141 6.48834 54.0266 5.48834 54.8391 5.36334L59.4329 4.70709L61.4641 0.550844Z"
                        fill="#FF0000"
                      />
                      <path
                        d="M43.4641 0.550844C43.8391 -0.199156 44.9016 -0.167906 45.2454 0.550844L47.3079 4.70709L51.8704 5.36334C52.6829 5.48834 52.9954 6.48834 52.4016 7.08209L49.1204 10.3008L49.9016 14.8321C50.0266 15.6446 49.1516 16.2696 48.4329 15.8946L44.3704 13.7383L40.2766 15.8946C39.5579 16.2696 38.6829 15.6446 38.8079 14.8321L39.5891 10.3008L36.3079 7.08209C35.7141 6.48834 36.0266 5.48834 36.8391 5.36334L41.4329 4.70709L43.4641 0.550844Z"
                        fill="#FF0000"
                      />
                      <path
                        d="M25.4641 0.550844C25.8391 -0.199156 26.9016 -0.167906 27.2454 0.550844L29.3079 4.70709L33.8704 5.36334C34.6829 5.48834 34.9954 6.48834 34.4016 7.08209L31.1204 10.3008L31.9016 14.8321C32.0266 15.6446 31.1516 16.2696 30.4329 15.8946L26.3704 13.7383L22.2766 15.8946C21.5579 16.2696 20.6829 15.6446 20.8079 14.8321L21.5891 10.3008L18.3079 7.08209C17.7141 6.48834 18.0266 5.48834 18.8391 5.36334L23.4329 4.70709L25.4641 0.550844Z"
                        fill="#FF0000"
                      />
                      <path
                        d="M7.46414 0.550844C7.83914 -0.199156 8.90164 -0.167906 9.24539 0.550844L11.3079 4.70709L15.8704 5.36334C16.6829 5.48834 16.9954 6.48834 16.4016 7.08209L13.1204 10.3008L13.9016 14.8321C14.0266 15.6446 13.1516 16.2696 12.4329 15.8946L8.37039 13.7383L4.27664 15.8946C3.55789 16.2696 2.68289 15.6446 2.80789 14.8321L3.58914 10.3008L0.307891 7.08209C-0.285859 6.48834 0.0266407 5.48834 0.839141 5.36334L5.43289 4.70709L7.46414 0.550844Z"
                        fill="#FF0000"
                      />
                    </svg>
                    <h4>{testimonial.message}</h4>
                    <div className="client__container d-flex justify-content-between align-items-center">
                      <p>{testimonial.client}</p>
                      <svg
                        width={40}
                        height={30}
                        viewBox="0 0 40 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.73544e-06 0H17.125L17.125 17.2429C17.125 21.7 16.6141 30 0 30V26.3389C7.98911 26.3389 8.98744 21.2316 8.54704 17.2454H0L4.73544e-06 0ZM22.8738 17.2429H31.422C31.8624 21.2366 30.8629 26.3364 22.875 26.3364V29.9975C39.4891 29.9975 40 21.6975 40 17.2404V2.38419e-06H22.8738L22.8738 17.2429Z"
                          fill="#0E6FC2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="newsletter__section">
        <div className="container">
          <div className="news__letter__container d-flex justify-content-center align-items-center flex-column">
            <h3>Newsletter</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac
              quis aliquam arcu lacus.
            </p>
            <form action="">
              <input type="text" placeholder="Your email" />
              <Button
                text="Subscribe"
                className={"news__letter__submit__button"}
              />
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
