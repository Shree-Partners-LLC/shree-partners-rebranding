import "./Travel.css";
import financeImg from "../assets/insurance.avif";
function FinancialServices() {
  return (
    <>
      <section className="travel-hero">
        <div className="travel-container">
          <div className="travel-left">
            <h1>Banking and Finance</h1>

            <p>
             Fortify your IT foundation to meet
changing customer needs
            </p>
          </div>

          <div className="travel-right">
            <img src={financeImg} alt="Travel Shree Partners" />
          </div>
        </div>
      </section>
    
     
    </>
  );
}
export default FinancialServices;
