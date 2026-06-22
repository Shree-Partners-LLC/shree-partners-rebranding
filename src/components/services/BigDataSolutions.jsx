import "./new.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../../assets/images.jpeg";
import BigDataDiagram from "../../assets/Big-Data-Challenges.png";
import Footer from "../Footer";
import DataPyramidDiagram from "../../assets/Data-Value-Pyramid.png";
import Navbar from "../Navbar";
function BigDataSolutions() {
  return (
    <>
      <Navbar />
      <section className="test-hero">
        <div className="hero-content">
          <div className="hero-inner">
            <h4>Data Management and Analytics</h4>

            <h1>Big Data Solutions</h1>
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
          <h2>The Power of Data</h2>

          <p>
            In today’s data-driven world, data is everywhere, in mass
            quantities. Not only is this adding to the decision-making process;
            it is rewriting the rules of decision-making. Today’s successful
            businesses rely on key insights they collect from disparate sources
            in every conceivable format. A report compiled by Information Week
            reveals that companies only leverage about 12 percent of this
            information, leading to lost opportunities.
          </p>

          <p>
            An organization’s most valuable asset is not just data, but the
            ability to exploit that data using critical thinking to draw
            powerful, intelligent, timely conclusions. At Shree Partners, we
            help clients exploit this advantage by analyzing data using AI and
            cognitive computing solutions, data science, data lake consulting
            and big data solutions. We have the infrastructure to carry out
            large-scale data processing, and our extensive cloud management
            expertise enables us to store data and leverage the power of AI to
            deliver client solutions. We can also help clients harvest insights
            in real time from diverse and disparate sources.
          </p>
        </div>
      </section>

      <section className="test-overview">
        <div className="container">
          <h2>Big Data Solutions Overview</h2>

          
            <div>
              <p>
                The digital ecosystem is slowly moving from “digital-first” to
                fully digital. At Shree Partners, we help clients become early
                adopters of technology using advanced, innovative solutions. In
                an environment where most business models seem similar, the
                differentiator is the speed of decision-making. Enterprises need
                access to data – fast, in real time – so they can deliver keen
                insights that facilitate quick decision-making at all levels.
                While the democratization of data can aid a company’s growth,
                the most powerful change agent is leveraging insights through
                data.
              </p>

              <p>
                When companies work in isolated data silos, they limit their
                view of information, which hampers growth. At Shree Partners,
                our big data solutions help clients generate on-demand insights,
                offering simple access to data to usher in transformation.
                Through our big data solutions, businesses can maximize value
                and expand their ability to create new revenue streams.
              </p>
            </div>
          
        </div>
      </section>

      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits</h2>

        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Quick, easy access to data</h3>
            
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Keen decision-making in emerging or complex situations</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Integrated 360-degree views and critical decision-making</h3>
          
          </div>

          
        </div>
      </section>

      <section className="diagram-section">
        <div className="container">
          <h2>Big Data Challenges</h2>

          <img
            src={BigDataDiagram}
            alt="Automation Testing Diagram"
            className="diagram-image"
          />
        </div>
      </section>
            <section className="diagram-section">
        <div className="container">
          <h2>Data Value Pyramid</h2>

          <img
            src={DataPyramidDiagram}
            alt="Automation Testing Diagram"
            className="diagram-image"
          />
        </div>
      </section>
   <Footer/>
    </>
  );
}

export default BigDataSolutions;
