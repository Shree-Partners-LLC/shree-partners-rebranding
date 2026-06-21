import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./ApplicationServices.css";
import serviceImg from "../assets/images.jpeg";
import detailsImg from "../assets/images2.jpeg";
import storyImg from "../assets/images3.jpeg";
import {
  FaDatabase,
  FaWater,
  FaChartLine,
  FaChartBar,
} from "react-icons/fa";
export default function DataManagement() {
  return (
    <>
      <Navbar />
      <section className="app-services">
        <div className="left-panel">
          <div className="content">
            <h1>
              <span>Data Management</span>
              <br />
              <span>and Analytics</span>
            </h1>

            <p>
              Deliver actionable business insights through better, faster
              decision-making
            </p>
          </div>
        </div>
        <div
          className="right-panel"
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
      <section className="app-details">
        <div className="app-details-content">
          <div className="app-text">
            

            <p>
              In today’s digital world, organizations are faced with the
              challenge of leveraging data gathered from multiple, disparate
              sources to unlock their business potential. By effectively
              utilizing this data, companies can improve overall
              decision-making, increase operational efficiencies, enhance the
              customer experience, and gain new competitive advantages.
            </p>

            <p>
              Shree Partners helps you understand and apply the data while
              ensuring security, quality and regulatory compliance – fast, in
              real time. This enables you to deliver keen insights that
              facilitate better, stronger decision-making across the
              organization. Our data management and analytics solutions can be
              seamlessly integrated with any legacy system. We help you exploit
              the power of data – AI and cognitive computing, data science, data
              lakes consulting and big data solutions – to help you achieve your
              business goals.
            </p>

            <button className="contact-btn">Contact Us</button>
          </div>

          <div className="app-image">
            <img src={detailsImg} alt="Application Services" />
          </div>
        </div>
      </section>
      <section className="service-offerings">
        <h2>Service Offerings</h2>

        <div className="offerings-grid">
          <a href="/big-data-solutions" className="offering-card">
            <FaDatabase className="offering-icon" />
            <h3>Big Data Solutions</h3>
          </a>

          <a href="/data-lakes" className="offering-card">
            <FaWater className="offering-icon" />
            <h3>Data Lakes Design, Strategy and Implementation</h3>
          </a>

          <a href="/data-science" className="offering-card">
            <FaChartLine className="offering-icon" />
            <h3>Data Science, Predictive and Prescriptive Analytics</h3>
          </a>

          <a href="/business-intelligence" className="offering-card">
            <FaChartBar className="offering-icon" />
            <h3>Business Intelligence and Analytics</h3>
          </a>
        </div>
      </section>
      <section className="success-story">
        <div className="story-header">
          <span>Success Story</span>
          <h2>Travel Management Company</h2>
          <p>
            Needed to boost revenue by applying actionable insights from
            predictive analytics
          </p>
        </div>

        <div className="story-grid">
          <div className="story-card">
            <h3>Solution</h3>

            <ul>
              <li>
                Improved data architecture by better understanding workforce
                data requirements
              </li>

              <li>
                Designed and developed dashboards to simplify and visualize data
                better
              </li>

              <li>
                Generated reports from aggregated data to create multiple “what
                if” scenarios to predict customer behaviors
              </li>
            </ul>
          </div>

          <div className="story-card">
            <h3>Results</h3>

            <ul>
              <li>
                Client experienced significant improvements in conversion rates
                across product and service offerings
              </li>

              <li>
                Accurate, consistent insights helped client make better business
                decisions based on historical data
              </li>
            </ul>
          </div>

          <div className="story-image">
            <img src={storyImg} alt="Automation Testing" />
          </div>
        </div>

        <div className="story-buttons">
          <button className="contact-btn">Contact Us</button>

          <button className="brochure-btn">Download Brochure</button>
        </div>
      </section>

      <Footer />
    </>
  );
}
