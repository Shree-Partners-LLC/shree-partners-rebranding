import "./new.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../../assets/ai.jpg";

function RealTimeAI() {
  return (
    <>
     
      <section className="test-hero">
        <div className="hero-content">
          <div className="hero-inner">
            <h4>Digital, AI and Machine Learning</h4>

            <h1>Real-time AI on Cloud – IVR</h1>
          </div>
        </div>

        <div
          className="hero-image"
          style={{
            backgroundImage: `
        linear-gradient(
          rgba(11,20,53,0.55),
          rgba(11,20,53,0.55)
        ),
        url(${serviceImg})
      `,
          }}
        ></div>
      </section>

      <section className="test-intro">
        <div className="container">
          <h2>
            Succeed in the Age of Digital Disruption with AI-powered Solutions
          </h2>

          <p>
            Today’s businesses are facing disruption like never before with the
            advancement of technologies like artificial intelligence (AI),
            machine learning (ML) and deep learning. Cognitive computing is
            changing legacy platforms, systems, and business models; as a
            result, we are witnessing a new era where machines can mimic any
            interaction, redefining existing benchmarks in the digital space.
          </p>

          <p>
            At Shree Partners, we leverage the power of technology –
            custom-built models and open source frameworks that process data and
            run sophisticated algorithms – to deliver tailored solutions that
            meet your business needs. Using deep learning algorithms, we
            transform your complex data into actionable business insights that
            provide tremendous growth opportunities in real time. Our experts
            identify and recommend the right blend of AI and machine learning
            solutions to help you optimize business processes across the value
            chain, resulting in greater profitability and productivity.
          </p>

       
        </div>
      </section>

     

      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits</h2>

        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Enable better decision-making</h3>
        
      
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Increase productivity and profitability</h3>
            
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Reduce or eliminate manual processes with automation</h3>
            
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Detect anomalies and changes in real time</h3>
           
          </div>


        </div>
      </section>
            
    </>
  );

}

export default RealTimeAI;
