import "./new.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../assets/application-services.jpg";
import intranetDiagram from "../assets/intanet-solutions-diagram.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Intranet() {
  return (
    <>
      <Navbar />
      <section className="test-hero">
        <div className="hero-content">
          <div className="hero-inner">
            <h4>APPLICATION SERVICES AND AUTOMATION</h4>

            <h1>Intranet Solutions</h1>
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
          <h2>Synchronizing Operations through Collaboration Tools</h2>

          <p>
            Clients with global operations – and employees working on multiple
            platforms, devices, and locations – require solutions that offer
            seamless collaboration across diverse internal teams and external
            stakeholders. Such requirements include meeting management modules,
            collaboration tools, and content management systems. In the past,
            businesses have relied on multiple applications to handle specific
            needs, which can add layers of complexity to work processes. In
            today’s business world, however, applications must run on multiple
            platforms and be compatible with various devices, leading to greater
            efficiencies, improved productivity and increased revenues.
          </p>
        </div>
      </section>

      <section className="test-overview">
     
          <h2>Intranet Solutions Overview</h2>

         
            <div>
              <p>
                In today’s business environment, clients need a comprehensive
                intranet solution that integrates with their existing systems –
                a platform-agnostic offering that works across all devices and
                facilitates optimal access, collaboration, and sharing.
                Additionally, client operations must be agile enough to scale up
                or down as required, with solutions that are cost-effective and
                efficient.
              </p>

              <p>
                At <b>ShreePartners</b>, our intranet solutions feature a suite
                of collaborative applications, including Microsoft Teams, Skype
                for Business and SharePoint. By implementing these solutions,
                clients enjoy greater collaboration among teams and participants
                – with seamless workflows and enhanced productivity as the
                outcome.
              </p>
              <p>
                Our delivery teams are skilled at implementing voice, messaging,
                conferencing and collaboration modules to address a company’s
                local and global requirements. The result is greater
                transparency, more efficient meetings, improved
                accountabilities, and faster decision-making. Shree Partners can
                also help your company organize and manage your content with a
                dedicated content management program featuring internal
                knowledge bases, repositories, SharePoint sites – and more.
              </p>
            </div>

         
    
        
      </section>

      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits</h2>

        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Facilitate cross-platform business communication and collaboration with Skype for Business and SharePoint</h3>
          
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Synchronize usage across multiple devices</h3>
            
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Deliver seamless, value-added communication with Microsoft Teams</h3>
            
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Scale up or down with customized cloud solutions that enable users to work remotely from diverse locations</h3>
            
          </div>

          
        </div>
      </section>

      <section className="diagram-section">
        <div className="container">
          

          <img
            src={intranetDiagram}
            alt="Automation Testing Diagram"
            className="diagram-image"
          />
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Intranet;
