import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./land.css";
export default function Lands() {
  return (
    <div>
      <div className="carou">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/sstt 1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="clr">
                <h3>Best Faculty</h3>
                <p>We provide experienced and qualified teachers</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/sstt2 1.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className="clr">
                <h3>Student Friendly Approach</h3>
                <p>
                  Creates A friendly and informative environment for students
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/st 1.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className="clr">
                <h3>Individual Attention</h3>
                <p>All students will reciev Individual Attention</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h2 style={{ textAlign: "center", marginTop: "3%" }} className="fn">
          {" "}
          Some tagline for the educational institution
        </h2>
      </div>

      {/* Services */}
      
      <div className="flexingservice">
        <img src="images\service.png" alt="service"></img>
        <div className="hed">
          <h4>Our Services</h4>
        </div>
      </div>
      <div className="flexes">
        <div className="sb">
          <img src="images/undraw_certification_aif8.svg" alt="service 1"></img>
          <b>
            <p>Service 1</p>
          </b>
          <p>
            Something about the service offered by the educational institution.
            Something about the service
          </p>
        </div>
        <div className="sb">
          <img src="images\undraw_exams_g4ow.png" alt="service 1"></img>
          <b>
            <p>Service 2</p>
          </b>
          <p>
            Something about the service offered by the educational institution.
            Something about the service
          </p>
        </div>
        <div className="sb">
          <img
            src="images\undraw_predictive_analytics_kf9n 1.png"
            alt="service 1"
          ></img>
          <b>
            <p>Service 3</p>
          </b>
          <p>
            Something about the service offered by the educational institution.
            Something about the service
          </p>
        </div>
      </div>

      {/* red */}

      <div className="reds flexes">
        <div>
          <img
            src="images\bald-head-side-view-with-three-question-marks 1.png"
            alt="results"
          ></img>
          <h4 className="hd">1000</h4>
          <p>Previous Questions</p>
        </div>
        <div>
          <img src="images\mobile-app 1.png" alt="results"></img>
          <h4 className="hd">3000</h4>
          <p>App Downloads</p>
        </div>
        <div>
          <img src="images\verified-text-paper 1.png" alt="results"></img>
          <h4 className="hd">10000</h4>
          <p>Mock Tests</p>
        </div>
        <div>
          <img src="images\question 1.png" alt="results"></img>
          <h4 className="hd">10000</h4>
          <p>Questions Solved</p>
        </div>
        <div>
          <img src="images\date 1.png" alt="results"></img>
          <h4 className="hd">10</h4>
          <p>Upcoming Events</p>
        </div>
      </div>

      {/* aboutus */}
      
      <div className="bb">
        <div className="flexing">
          <img src="images\Group.png" alt="group"></img>
          <h4 className="abth">About Us</h4>
        </div>
        <div className="flexes cnt">
          <div>
            <img src="images\undraw_certificate_343v.png" alt="abt"></img>
          </div>
          <div className="abttxt">
            <p>
              Something about the instituion is to be shown. Something about the
              instituion is to be shown. Something about the instituion is to be
              shown. Something about the instituion is to be shown. Something
              about the instituion is to be shown. Something about the
              instituion is to be shown
            </p>
          </div>
        </div>
      </div>

      {/* Downloads */}
      
      <div className="bb">
        <div className="flexes">
          <div className="downdiv">
            <div>
              <img src="images\undraw_online_test_gba7.png" alt="download1"></img>
            </div>
            <div className="downtext">
              <p>
                <h4> Download our Engineering app</h4>
              </p>
            </div>
            <div>
              <button className="downbtn">Click here to Download</button>
            </div>
          </div>
          <div className="downdiv">
            <div>
              {" "}
              <img src="images\undraw_learning_2q1h 1.png" alt="download2"></img>
            </div>
            <div className="downtext">
              <p>
                <h4> Download our Medicine app</h4>
              </p>
            </div>{" "}
            <div>
              <button className="downbtn">Click here to Download</button>
            </div>
          </div>
          <div className="downdiv">
            <div>
              {" "}
              <img src="images\undraw_book_lover_mkck.png" alt="download3"></img>
            </div>
            <div className="downtext">
              <p>
                <h4> Download our Brochure now</h4>
              </p>
            </div>{" "}
            <div>
              <button className="downbtn">Click here to Download</button>
            </div>
          </div>
        </div>
      </div>

      {/* Residential */}
      
      <div className="bb">
        <div className="flexingres">
          <img className="house" src="images\snowfall 1.png" alt="house"></img>
          <h4 className="abth">Our Residential Program</h4>
        </div>
        <div className="flexes">
          <div className="abttxt restxt">
            <p>
              Some random one line about the service.Some random one line about
              the service. Some random one line about the service. Some random
              one line about the service
            </p>
          </div>

          <div>
            <img src="images\undraw_reading_time_gvg0.png" alt="abt"></img>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      
      <div className="flexingtest">
        <img src="images\testimonials 1.png" alt="test1"></img>
        <div className="hed">
          <h4>Testimonials</h4>
        </div>
      </div>
      <div className="flexes testdiv">
        <div className="test">
          <img src="images\download (1) 1.png " alt="test2"></img>
          <h5 className="mrinalini">Miss Mrinalini</h5>
          <p>
            something that miss will have to say about the experience with this
            organisation
          </p>
        </div>
        <div className="test">
          <img src="images\download 1.png" alt="test3"></img>
          <h5 className="mrinalini">Miss Mrinalini</h5>
          <p>
            something that miss will have to say about the experience with this
            organisation
          </p>
        </div>
        <div className="test">
          <img src="images\teaching-website 1.png" alt="test4"></img>
          <h5 className="mrinalini">Miss Mrinalini</h5>
          <p>
            something that miss will have to say about the experience with this
            organisation
          </p>
        </div>
      </div>
    </div>
  );
}
