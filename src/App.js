import "./App.css";
import Card from "./components/Card";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import img1 from "./Assets/image1.png";
import img2 from "./Assets/image2.png";
import img3 from "./Assets/image3.png";
import img4 from "./Assets/image4.png";
import placePng from "./Assets/place.png";
function App() {
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
      <div className="sectionOne">
        <Header />
        <div className="main">
          <div className="mainTitle">
            <h3>Ride of</h3>
            <h1>
              Incredible <br />
              India
            </h1>
          </div>
          <ContactForm />
        </div>
      </div>

      {/* SECTION SECOND */}
      <div className="sectionSecond">
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
      <div className="sectionThird">
        <h1>TOP PICKS</h1>
        <h3>FOR YOUR TRIPS</h3>
        <div className="cardsContainer">
          {topPickData.map((data, index) => {
            return <Card data={data} key={index} />;
          })}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
