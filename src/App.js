import React, { useState } from "react";

// Images
import logo from "./Assets/logo.png";
import menu from "./Assets/menu.png";
import img1 from "./Assets/image1.png";
import img2 from "./Assets/image2.png";
import img3 from "./Assets/image3.png";
import img4 from "./Assets/image4.png";
import placePng from "./Assets/place.png";
import logoWhite from "./Assets/logoWhite.png";
import mapPng from "./Assets/map.png";
import facebookPng from "./Assets/facebook.png";
import youtubePng from "./Assets/youtube.png";
import linkedinPng from "./Assets/linkedin.png";
import instagramPng from "./Assets/instagram.png";
import minusPng from "./Assets/minus.png";
import plusPng from "./Assets/plus.png";
import likePng from "./Assets/like.png";
import ratingPng from "./Assets/rating.png";
import arrowPng from "./Assets/arrow.png";

// CSS
import "./App.css";

function App() {
  const [showMobileDrawer, setShowMobileDrawer] = useState(false);
  let [person, setPerson] = useState(4);
  const topPickData = [
    { placeName: "Jaipur", placeImage: placePng },
    { placeName: "Jodhpur", placeImage: placePng },
    { placeName: "Alwar", placeImage: placePng },
    { placeName: "Kashmir", placeImage: placePng },
    { placeName: "Goa", placeImage: placePng },
    { placeName: "Udaipur", placeImage: placePng },
    { placeName: "Jaisalmer", placeImage: placePng },
    { placeName: "Kerela", placeImage: placePng },
  ];
  return (
    <div className="App">
      {/* SECTION FIRST  */}
      <div className="sectionOne" id="home">
        <div className="header">
          <div className="logo_container">
            <img src={logo} />
          </div>
          <div className="navigation">
            <nav>
              <span>
                <a href="#home">Home</a>
              </span>
              <span>
                <a href="#about">About</a>
              </span>
              <span>
                <a href="#products">Product</a>
              </span>
              <span>
                <a href="#footer">Sponsors</a>
              </span>
              <span>
                <a href="#footer">Help</a>
              </span>
            </nav>
          </div>
          <div>
            <button className="loginBtn">Login</button>
          </div>
          <div
            className="menuIcon"
            onClick={() => setShowMobileDrawer(!showMobileDrawer)}>
            <img src={menu} />
          </div>
          {showMobileDrawer && (
            <div className="mobileNavigation">
              <div
                className="menuIcon"
                onClick={() => setShowMobileDrawer(!showMobileDrawer)}>
                <img src={menu} />
              </div>
              <nav>
                <span>
                  <a href="#home">Home</a>
                </span>
                <span>
                  <a href="#about">About</a>
                </span>
                <span>
                  <a href="#products">Product</a>
                </span>
                <span>
                  <a href="#footer">Sponsors</a>
                </span>
                <span>
                  <a href="#footer">Help</a>
                </span>
              </nav>
            </div>
          )}
        </div>
        <div className="main">
          <div className="mainTitle">
            <h3>Ride of</h3>
            <h1>
              Incredible <br />
              India
            </h1>
          </div>

          <div className="contactForm">
            <form>
              <input
                type="text"
                className="formInputField"
                placeholder="Starting From*"
              />
              <input
                type="text"
                className="formInputField"
                placeholder="End Date*"
              />
              <div className="formPersonInput">
                <p>Persons*</p>
                <div>
                  <img
                    src={minusPng}
                    className="formRoundButton"
                    onClick={(e) => {
                      person > 1 && setPerson(--person);
                    }}
                  />
                  <span>{person}</span>
                  <img
                    src={plusPng}
                    className="formRoundButton"
                    onClick={(e) => {
                      setPerson(++person);
                    }}
                  />
                </div>
              </div>
              <button type="submit" className="formSubmitButton">
                SUBMIT
              </button>
              <div className="formBottomLine"></div>
            </form>
          </div>
        </div>
      </div>

      {/* SECTION SECOND */}
      <div className="sectionSecond" id="about">
        <div className="sectionSecond_imagesContainer">
          <div className="sectionSecond_imagesContainer_one">
            <img src={img1} />
            <img src={img2} />
          </div>
          <div className="sectionSecond_imagesContainer_two">
            <img src={img3} />
            <img src={img4} />
          </div>
        </div>
        <div className="introContainer">
          <h1>
            INCREDIBLE INDIA
            <br />
            2k22 EDITION
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in
            molestie magna. Quisque nec feugiat tellus. Quisque suscipit, enim
            viverra tempor ultricies, mauris augue accumsan ex, vitae sodales mi
            odio a lacus. Morbi placerat velit nec erat porttitor dapibus. Donec
            laoreet magna ligula, non malesuada lectus lobortis nec. Praesent
            consectetur nibh sed pharetra pharetra. Sed ipsum diam, malesuada
            sed dapibus eu, vehicula sit amet ante. Maecenas et pharetra ipsum.
            Nam sagittis lacinia nisl, ac sodales ante aliquam eu. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nulla in molestie
            magna. Quisque nec feugiat tellus. Quisque suscipit, enim viverra
            tempor ultricies, mauris augue accumsan ex, vitae sodales mi odio a
            lacus. Morbi placerat velit nec erat porttitor dapibus. Donec
            laoreet magna ligula, non malesuada lectus lobortis nec. Praesent
            consectetur nibh sed pharetra pharetra. Sed ipsum diam, malesuada
            sed dapibus eu, vehicula sit amet ante. Maecenas et pharetra ipsum.
            Nam sagittis lacinia nisl, ac sodales ante aliquam eu.
          </p>
        </div>
      </div>

      {/* THIRD SECTION */}
      <div className="sectionThird" id="products">
        <h1>TOP PICKS</h1>
        <h3>FOR YOUR TRIPS</h3>
        <div className="cardsContainer">
          {topPickData.map((data, index) => {
            return (
              <div className="card" key={index}>
                <div className="card_feedback">
                  <div className="card_like">
                    <img src={likePng} className="likeIcon" />
                    <span>Like</span>
                  </div>
                  <div className="card_Rating">
                    <img src={ratingPng} className="rating_Icon" />
                  </div>
                </div>
                <p className="card_placeName">{data.placeName}</p>
                <img src={data.placeImage} className="card_placeImage" />
                <div className="card_moreDetail">
                  <span>
                    <a href="#">More Details</a>
                  </span>

                  <span>
                    <a href="#">
                      Plans <img src={arrowPng} />
                    </a>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
      <div className="SectionFourth" id="footer">
        <div className="footer">
          <div className="footer_socialContact">
            <img className="footerlogo" src={logoWhite} />
            <div className="socialIconsContainer">
              <a href="#">
                <img src={facebookPng} />
              </a>
              <a href="#">
                <img src={youtubePng} />
              </a>
              <a href="#">
                <img src={linkedinPng} />
              </a>
              <a href="#">
                <img src={instagramPng} />
              </a>
            </div>
          </div>
          <div className="otherLinks">
            <div className="quiclinks">
              <h2>QUICK LINKS</h2>
              <a href="#">
                <nav>Home</nav>
              </a>
              <a href="#">
                <nav> About Us</nav>
              </a>
              <a href="#">
                <nav> Contact </nav>
              </a>
              <a href="#">
                <nav> Sponsors</nav>
              </a>
              <a href="#">
                <nav>Founders </nav>
              </a>
            </div>

            <div className="services">
              <h2>SERVICES</h2>
              <a href="#">
                <nav>Bus services </nav>
              </a>
              <a href="#">
                <nav>Ticket Booking </nav>
              </a>
              <a href="#">
                <nav>Flight Booking </nav>
              </a>
              <a href="#">
                <nav>Budget Planning</nav>
              </a>
              <a href="#">
                <nav>Safety</nav>
              </a>
            </div>
          </div>
          <div className="mapContainer">
            <img src={mapPng} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
