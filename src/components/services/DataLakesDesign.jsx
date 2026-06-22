import "./new.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../../assets/images.jpeg";
import datalakeDiagram from "../../assets/Enterprise-Data-Lake-Technology.png";
import Navbar from "../Navbar";
import Footer from "../Footer";

import datalakeImg from "../../assets/StreamingData.jpg";
function DataLakesDesign() {
  return (
    <>
      <Navbar />
      <section className="test-hero">
        <div className="hero-content">
          <div className="hero-inner">
            <h4>Data Management and Analytics</h4>

            <h1>Data Lakes Design, Strategy and Implementation</h1>
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
          <h2>Storing Data with Data Lakes</h2>

          <p>
            In a data-driven world, the ability to leverage insights from
            disparate data is a key decision-making differentiator. Storage
            repositories containing raw data in native formats enable businesses
            to run every conceivable type of analytics: dashboards, real-time,
            machine learning and big data. Data lakes have helped businesses
            slash IT costs for storage and data management by as much as 71%,
            which explains the growing popularity. In today’s evolving
            technology landscape, proper integration of data lakes with existing
            / planned technology architecture is critical.
          </p>
          <p>
            The global data lakes market is expected to expand to $14 billion by
            2023. At Shree Partners, our expertise in data science and analytics
            helps us optimize our clients’ storage repositories to ensure their
            applications are deployed fast and seamlessly, with negligible
            downtime. The integration of emerging technologies into data –
            including machine learning – offers a wide range of solutions that
            expand upon traditional repository options.
          </p>
          <h2>Creating a Data Lakes Strategy</h2>

          <p>
            Implementing a sound data management strategy requires comprehensive
            understanding of actual data usage, i.e. the intended applications,
            integrations, governance requirements, and access controls. For
            example, data lakes may not require a single cluster, as some
            organizations choose to add data lakes incrementally for specific
            purposes like archiving, workloads, analytics and data science.
            Therefore, a comprehensive management strategy requires a holistic
            approach based on actual usage.
          </p>
          <p>
            At <b>ShreePartners</b>, we leverage our expertise in various
            platforms, open sources, and proprietary software to design and
            build data lakes. Our services include in-depth assessments, big
            data testing, and integration with emerging technologies like
            analytics and machine learning. Our dedicated team of data
            management experts oversees implementation, ensuring projects are
            delivered on time, on specification and on budget. Our services can
            be extended beyond implementation to include managed services and
            support.
          </p>
        </div>
      </section>

      <section className="test-overview">
        <div className="container">
          <div className="overview-grid">
            <div>
              <ul className="overview-list">
                <h2>How Data Lakes Adds Value</h2>
                <li> Acquiring and storing disparate data</li>
                <li>
                  {" "}
                  Easy searching with 360-degree views of enterprise data
                </li>
                <li> Simple, intuitive searches / queries</li>
                <li> Data security</li>
                <li>Scaling to address specific and complex requirements</li>
              </ul>
            </div>

            <ul className="overview-list">
              <h2>Data Lakes Strategy Phases</h2>
              <li>
                <b>Data Capture </b>- The data lake is built separately from
                core IT systems for data capture only
              </li>
              <li>
                <b>Analysis</b> – Data is analyzed in native formats; analytics
                guide testing and learning
              </li>
              <li>
                <b>Data Querying</b> – Data queries are launched without
                indexing to uncover key information
              </li>
              <li>
                <b>Data Lakes Implementation</b> – Interfaces use and apply the
                data for intensive searches / analytics
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mobility-usecase">
        <div className="wrap">
          <h2>Streaming Data and Data Lakes</h2>

          <div className="mobility-content">
            <div className="mobility-image">
              <img src={datalakeImg} alt="Enterprise Mobility" />
            </div>

            <div className="mobility-text">
              <p>
                Streaming data – including event-based data from Internet of
                Things (IoT) devices, clickstream tracking, server logs, and
                information from app activity – are the most common data streams
                used for data lakes architecture. By nature, this streaming data
                is semi-structured in huge quantities. One of the most exciting
                data lakes applications is the ability to leverage predictive
                analytics and machine learning. Use cases include analyzing data
                streams that identify specific trends and insights. This
                architecture is essential for operations that rely on real-time
                data for recommendations, decision-making and anomaly detection.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="diagram-section">
        <div className="container">
          <h2>Enterprise Data Lake – Technology Components</h2>

          <img
            src={datalakeDiagram}
            alt="Automation Testing Diagram"
            className="diagram-image"
          />
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default DataLakesDesign;
