import "./centerFrame.css";
import CenterImg from "../../assets/CenterPic.png";
import PlanCards from "../../components/planCards/planCards";
import CardCarousel from "../../components/cardCrousel/cardCarousel";
const CenterFrame = () => {
  return (
    <>
      <article className="article">
        <img className="picture" src={CenterImg} alt="Paris" />
        <div className="centerContainer">
          <p className="plan">Choose your plan</p>
          <p className="planText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
          <div>
            <PlanCards type="basic" />
            <PlanCards type="premium" />
            <PlanCards type="basic" />
          </div>
          <div style={{ marginTop: "80px",marginLeft:'154px' }}>
            <p className="review">Review from customers</p>
            <p className="aboutReview">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry
            </p>
            <CardCarousel />
          </div>
        </div>
        <div></div>
        <div className="cardCarouselContainer" />
      </article>
    </>
  );
};
export default CenterFrame;
