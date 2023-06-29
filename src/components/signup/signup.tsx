import "./signup.css";
import dot from "../../assets/Group 75.png";
import headphone from "../../assets/headphone.png";
import mic from "../../assets/mic.png";
import backPic from "../../assets/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime 1.png";
import frontPic from "../../assets/group-business-workers-smiling-happy-confident-working-together-with-smile-face-applauding-one-them-office 1.png";
import micImg from "../../assets/pngwing 1.png";
const SignUp = () => {
  return (
    <>
      <div className="left-content">
        <div className="content">
          <div className="boldTextBody">
            <p className="boldText">Learn how to launch a successful podcast</p>
          </div>
          <div className="smallTextBody">
            <p className="smallText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <button className="buttonBody">
            <p className="buttonText">Sign up Now</p>
          </button>
        </div>
      </div>
      {/* navbar right part */}
      <div className="right-content">
        <img className="dot" src={dot} alt="Paris" />
        <img className="headphone" src={headphone} alt="Paris" />
        <img className="mic" src={mic} alt="Paris" />
        <img className="backPic" src={backPic} alt="Paris" />
        <img className="frontPic" src={frontPic} alt="Paris" />
        <img className="micImg" src={micImg} alt="Paris" />
      </div>
    </>
  );
};
export default SignUp;
