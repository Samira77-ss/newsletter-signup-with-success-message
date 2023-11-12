import "./App.css";
import iconList from "./images/icon-list.svg";
import illustrationDesktop from "./images/illustration-sign-up-desktop.svg";
import illustrationMobile from "./images/illustration-sign-up-mobile.svg";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6 content">
            <h2>Stay updated!</h2>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>
                <img src={iconList} className="icon" alt="iconList" />
                <span>Product discovery and building what matters</span>
              </li>
              <li>
                <img src={iconList} className="icon" alt="iconList" />
                <span>Measuring to ensure updates are a success</span>
              </li>
              <li>
                <img src={iconList} className="icon" alt="iconList" />
                <span>And much more!</span>
              </li>
            </ul>
            <form>
              <div className="form">
                <div className="email">
                  <label for="email">Email address</label>
                </div>
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="email@company.com"
                ></input>
              </div>
              <button type="submit" className="btn">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          <div className="col-6">
            <img
              src={illustrationDesktop}
              className="desktopImage"
              alt="illustrationDesktop"
            />
            <img
              src={illustrationMobile}
              className="mobileImage d-none"
              alt="illustrationMobile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
