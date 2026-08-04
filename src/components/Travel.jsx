import "./Travel.css";
import travelImg from "../assets/travel-and-hospitality.jpg";
function Travel() {
  return (
    <>
      <section className="travel-hero">
        <div className="travel-container">
          <div className="travel-left">
            <h1>Travel And Hospitality</h1>

            <p>
              Transform your business with
industry-leading technology
            </p>
          </div>

          <div className="travel-right">
            <img src={travelImg} alt="Travel Shree Partners" />
          </div>
        </div>
      </section>
    
     
    </>
  );
}
export default Travel;
