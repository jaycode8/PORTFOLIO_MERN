import "./Landing.css";
import jay from "../../resources/images/jay.png";

const Landing = () => {
  return (
    <div className="landing" id="homePage">
      <div className="my-text">
        <div>
          <p>Hello.</p>
          <h1>I am James Mumo</h1>
          <h4>
            Freelance Full Stack <span>DEV.</span>
          </h4>
          <a href="#contacts">HIRE</a>
        </div>
      </div>
      <div className="my-pic">
        <div className="image">
          <img src={jay} alt="jay" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
