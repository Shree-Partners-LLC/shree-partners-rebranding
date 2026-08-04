import "./Travel.css";
import healthcareImg from "../assets/healthcare.jpg";
function Healthcare() {
  return (
    <>
      <section className="travel-hero">
        <div className="travel-container">
          <div className="travel-left">
            <h1>Healthcare</h1>

            <p>Harness the power of technology to deliver greater value</p>
          </div>

          <div className="travel-right">
            <img src={healthcareImg} alt="Travel Shree Partners" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Healthcare;
