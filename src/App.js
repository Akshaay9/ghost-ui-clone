import React from "react";
import "./App.scss";
function App() {
  return (
    <div>
      <div className="nav">
        <div className="nav-left">
          <ul>
            <li>Home</li>
            <li>Tag</li>
            <li>Author</li>
            <li>Helo</li>
          </ul>
        </div>
        <div className="nav-right">
          <ul>
            <li>
              <i class="fab fa-facebook-f"></i>
            </li>
            <li>
              <i class="fab fa-twitter"></i>
            </li>
            <li>
              <i class="fas fa-moon"></i>
            </li>
            <li>Subscribe</li>
          </ul>
        </div>
      </div>
      <div className="hero-banner">
        <div className="hero-title">
          <div className="hero-title-top">
            <img
              src="https://ghost-blog-layout.netlify.app/images/ghost.png"
              alt=""
            />
            <p className="hero-title-name">ghost</p>
          </div>
          <div className="hero-title-bottom">
            <div className="hero-desc">Thoghts,Stories and Ideas</div>
          </div>
        </div>
      </div>
      <div className="main-body-one">
        <div className="main-body-one-left">
          <img
            src="https://static.ghost.org/v3.0.0/images/welcome-to-ghost.png"
            alt=""
          />
        </div>
        <div className="main-body-one-right">
          <p style={{ color: "#60b0e9" }}>Getting Started</p>
          <p className="welcome">Welcome To Ghost</p>
          <p>
            Welcome, it's great to have you here. We know that first impressions
            are important, so we've populated your new site with some initial
            getting started posts that will help you get familiar with
            everything in no time.
          </p>
          <div className="main-body-one-bottom">
            <div className="img">
              <img
                src="https://static.ghost.org/v3.0.0/images/ghost.png"
                alt=""
              />
            </div>
            <div className="main-body-one-footer-right">
              <p>Ghost</p>
              <p>5 Feb 2020 - 2 Min read</p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "90%",
          height: "0.1vh",
          border: "1px solid rgb(83, 80, 80)",
          margin: "9px auto",
        }}
        className="line"
      ></div>
      <div className="main-body-two">
        <div className="card1">
          <div className="card1-top">
            <img
              src="https://static.ghost.org/v3.0.0/images/writing-posts-with-ghost.png"
              alt=""
            />
          </div>
          <div className="card1-bottom">
            <div className="main-body-one-right">
              <p style={{ color: "#60b0e9" }}>Writing posts with Ghost ✍️</p>
              <p className="welcome">Welcome To Ghost</p>
              <p>
                {" "}
                familiar formatting options in a functional toolbar and the
                ability to add dynamic content seamlessly.
              </p>
              <div className="main-body-one-bottom">
                <div className="img">
                  <img
                    src="https://static.ghost.org/v3.0.0/images/ghost.png"
                    alt=""
                  />
                </div>
                <div className="main-body-one-footer-right">
                  <p>Ghost</p>
                  <p>5 Feb 2020 - 2 Min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card2">
          <div className="card1-top">
            <img
              src="https://static.ghost.org/v3.0.0/images/publishing-options.png"
              alt=""
            />
          </div>
          <div className="card1-bottom">
            <div className="main-body-one-right">
              <p style={{ color: "#60b0e9" }}>Writing posts with Ghost ✍️</p>
              <p className="welcome">Welcome To Ghost</p>
              <p>
                {" "}
                familiar formatting options in a functional toolbar and the
                ability to add dynamic content seamlessly.
              </p>
              <div className="main-body-one-bottom">
                <div className="img">
                  <img
                    src="https://static.ghost.org/v3.0.0/images/ghost.png"
                    alt=""
                  />
                </div>
                <div className="main-body-one-footer-right">
                  <p>Ghost</p>
                  <p>5 Feb 2020 - 2 Min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card3">
          <div className="card1-top">
            <img
              src="https://static.ghost.org/v3.0.0/images/admin-settings.png"
              alt=""
            />
          </div>
          <div className="card1-bottom">
            <div className="main-body-one-right">
              <p style={{ color: "#60b0e9" }}>Writing posts with Ghost ✍️</p>
              <p className="welcome">Welcome To Ghost</p>
              <p>
                {" "}
                familiar formatting options in a functional toolbar and the
                ability to add dynamic content seamlessly.
              </p>
              <div className="main-body-one-bottom">
                <div className="img">
                  <img
                    src="https://static.ghost.org/v3.0.0/images/ghost.png"
                    alt=""
                  />
                </div>
                <div className="main-body-one-footer-right">
                  <p>Ghost</p>
                  <p>5 Feb 2020 - 2 Min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-body-three">
        <div className="card3">
          <div className="card1-top">
            <img
              src="https://static.ghost.org/v3.0.0/images/organising-your-content.png"
              alt=""
            />
          </div>
          <div className="card1-bottom">
            <div className="main-body-one-right">
              <p style={{ color: "#60b0e9" }}>Writing posts with Ghost ✍️</p>
              <p className="welcome">Welcome To Ghost</p>
              <p>
                {" "}
                familiar formatting options in a functional toolbar and the
                ability to add dynamic content seamlessly.
              </p>
              <div className="main-body-one-bottom">
                <div className="img">
                  <img
                    src="https://static.ghost.org/v3.0.0/images/ghost.png"
                    alt=""
                  />
                </div>
                <div className="main-body-one-footer-right">
                  <p>Ghost</p>
                  <p>5 Feb 2020 - 2 Min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card3">
          <div className="card1-top">
            <img
              src="https://static.ghost.org/v3.0.0/images/app-integrations.png"
              alt=""
            />
          </div>
          <div className="card1-bottom">
            <div className="main-body-one-right">
              <p style={{ color: "#60b0e9" }}>Writing posts with Ghost ✍️</p>
              <p className="welcome">Welcome To Ghost</p>
              <p>
                {" "}
                familiar formatting options in a functional toolbar and the
                ability to add dynamic content seamlessly.
              </p>
              <div className="main-body-one-bottom">
                <div className="img">
                  <img
                    src="https://static.ghost.org/v3.0.0/images/ghost.png"
                    alt=""
                  />
                </div>
                <div className="main-body-one-footer-right">
                  <p>Ghost</p>
                  <p>5 Feb 2020 - 2 Min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
