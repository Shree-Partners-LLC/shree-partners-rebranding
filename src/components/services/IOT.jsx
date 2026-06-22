import "./new.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../../assets/ai.jpg";
import iotDiagram from "../../assets/iot-image.png";
import Navbar from "../Navbar";
import Footer from "../Footer";

function IOT() {
  return (
    <>
      <Navbar />
      <section className="test-hero">
        <div className="hero-content">
          <div className="hero-inner">
            <h4>Digital, AI and Machine Learning</h4>

            <h1>Internet of Things<br/>(IoT) Solutions</h1>
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
          <h2>Connecting and Tracking a World of Things</h2>

          <p>
            The Internet of Things (IoT) continues to offer exciting
            possibilities for improving business routines, productivity and
            profitability. The concept of “things talking to things” enables
            devices to function autonomously, transmitting signals and
            communicating with each other quickly and reliably. IoT technologies
            focus on the development of enhanced human-to-machine and
            machine-to-machine interfaces to deliver real-time and online
            information about asset location, performance and condition.
          </p>

          <p>
            IoT solutions are growing exponentially with machine-to-machine
            communication and asset tracking solutions, making it possible to
            monitor moving (or running) objects with precision and accuracy.
            While legacy solutions typically require internet connectivity,
            advanced IoT solutions do not, relying instead on unique identifiers
            (UI) and low-energy transponders. Beacon technology – placing or
            embedding beacons to send location-based information and offers – is
            a growing subset of the Internet of Things that offers great promise
            for today’s organizations.
          </p>
        </div>
      </section>

      <section className="test-overview">
       
          <h2>Internet of Things Overview</h2>

          
            <div>
              <p>
                At Shree Partners, our IoT solutions use beacon receivers,
                transmitters and command posts to monitor the movement of
                multiple objects. These components work together in a
                coordinated effort to relay information or define a location.
                For example, beacon technology can be used in airport
                environments by installing remote sensors on motorized ground
                services equipment to track location or schedule maintenance.
                Beacon sensors can also help airports manage people flows on
                fixed assets such as elevators and escalators.
              </p>

              <p>
                Our plug-and-play solutions enable clients to quickly handle
                testing of repetitive requirements. Intelligent automation
                eliminates manual intervention and delivers faster
                deployment.Shree’s beacon application provides detailed
                information to users in real time about products and places like
                airports, hotels, retail stores, museums, hospitals, historical
                sites – and more. This information helps the user learn more
                about the place or product by providing additional insights that
                help promote a better customer experience. For example, Miami
                International Airport launched an app that uses beacons to help
                consumers find the correct departure gate while sending mobile
                notifications for restaurant and retail deals as they travel
                through the airport.
              </p>
            </div>

           
          
        
      </section>

      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits</h2>

        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Improve productivity with open platform end-to-end connectivity</h3>
        
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Cost-effective</h3>
          
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Improve revenues by leveraging big data and business intelligence</h3>
         
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Integrate multiple systems; vendor-agnostic</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Secure, reliable, scalable</h3>
           
          </div>

   
        </div>
      </section>

      <section className="diagram-section">
        <div className="container">
      

          <img
            src={iotDiagram}
            alt="Automation Testing Diagram"
            className="diagram-image"
          />
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default IOT;
