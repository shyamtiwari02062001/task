import "./planCard.css";
type props = {
  type: string;
};
const PlanCards: React.FC<props> = ({ type }) => {
  console.log(type);
  return (
    <div
      className="planCardBody"
      style={{
        backgroundColor: type === "premium" ? "#7A3199" : "#fff",
        color: type !== "premium" ? "#7A3199" : "#fff",
      }}
    >
      <p className="heading">
        {type === "premium" ? "Premium Plan" : "Basic Plan"}
      </p>
      <p className="planSubText">
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p className="pricing">$ 54</p>
        <p className="perMonth">/month</p>
      </div>
        <li className="list">Free access to video class</li>
        <li className="list">Free access to video class</li>
        <li className="list">Free access to video class</li>
      <button className="buttonStyles">Start Free Trial
      </button>
    </div>
  );
};
export default PlanCards;
