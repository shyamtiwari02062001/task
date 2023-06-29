import "./footerFrame.css";
import footer from "../../assets/FooterPic.png";
import facebook from '../../assets/mdi_facebook.png'
import tweter from '../../assets/Vector.png'
import youtube from '../../assets/uil_youtube.png'
import insta from '../../assets/basil_instagram-solid.png'
const FooterFrame = () => {
  return (
    <article className="article">
      <img className="picture" src={footer} alt="Paris" />
      <div className="container">
        <p className="footerHeading">We have what you’re looking for</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <p className="footerHeadings">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            a
          </p>
          <div>
            <button className="buttonsBody">
              <p className="buttonText">Get Started Now</p>
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="line" />
        <div className="footerBody">
          <p className="copyright">All Right Reserved @Copyright 2023</p>
          <div className="footernavbar">
            <p className="copyright">Terms of Service</p>
            <p className="copyright">Privacy Policy</p>
            <p className="copyright">Product</p>
          </div>
          <div className="footericons">
           <img src={facebook} alt="facebook"/>
           <img src={youtube} alt="youtube"/>
           <img src={insta} alt="insta"/>
           <img src= {tweter}alt="tweeter"/>
          </div>
        </div>
      </div>
    </article>
  );
};
export default FooterFrame;
