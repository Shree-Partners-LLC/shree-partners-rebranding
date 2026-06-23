import "./new.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../../assets/images4.jpeg";
import networkDiagram from "../../assets/Network-Operation-services.jpg";

function DataCenterOperations() {
  return (
    <>
      
      <section className="test-hero">
        <div className="hero-content">
          <div className="hero-inner">
            <h4>Enterprise Operations Transformation</h4>

            <h1>Data Center <br/>Operations</h1>
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
          <h2>Placing Data in Trusted Hands</h2>

          <p>
            Heavy workloads of business-critical information require advanced
            enterprise storage solutions that offer the highest levels of
            professional management and remote monitoring. According to an IDG
            Technology report, businesses are shifting storage investment from
            legacy architectures to software-defined systems to improve agility
            and lower costs. The largest segment of software-defined storage is
            hyper-converged infrastructure (HCI), with revenues forecast to
            reach $7.15 billion in 2021. The benefits of enterprise storage
            include lower costs, faster deployment, greater uptime and reduced
            workload. Clearly, today’s businesses require uninterrupted access
            to resources – including reliable backup and recovery.
          </p>

          <p>
            At Shree Partners, our cutting-edge technology solutions support
            critical functions such as data backup, storage, virtual desktop
            infrastructure (VDI) and server support. Our automated processes,
            dedicated support teams, and global data centers enable our
            customers to benefit from industry-leading solutions in enterprise
            storage, disaster recovery and data restoration.
          </p>
        </div>
      </section>

      <section className="test-overview">
        <div className="container">
          <h2>Data Center Solutions Overview</h2>

          <div>
            <p>
              At <b>Shree Partners</b>, our solutions include building and
              managing Windows and virtual servers, network support, VDI,
              Structured Query Language (SQL) support and database management,
              active directory management and virtualization. We use
              state-of-the-art monitoring solutions such as Big Brother,
              SolarWinds and System Center Operations Manager (SCOM) for
              cross-platform data center monitoring.
            </p>
            <p>
              We deploy, manage, and monitor operations remotely; we also track
              operations, services and devices through advanced configurations
              that trigger alerts and notifications 24/7. Our support includes
              on-call rapid response to critical client requirements. Our backup
              and recovery tools ensure the highest levels of reliability when
              data replication or disaster recovery is needed in real time. We
              manage nearly 1,000 servers globally, using advanced backup and
              storage tools such as Dell EMC Avamar and Isilon. Our network
              support includes monitoring switches, firewalls, routers and VPNs
              to help clients improve security, eliminate vulnerabilities and
              block malware.
            </p>
          </div>
        </div>
      </section>
   
      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits</h2>

        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Business continuity with guaranteed SLAs</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Ultra-secure data centers ensure reliable storage </h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Provisioning, management, flexible backup and retrieval</h3>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Convenient backup solutions</h3>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>High-speed recovery to restore operations in record time</h3>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Versatile restoration to disparate hardware systems</h3>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Dashboard-based management for complete visibility</h3>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <h3>Dedicated, 24/7 support through remote monitoring and on-call support</h3>
          </div>
        </div>
      </section>
          
    </>
  );
}

export default DataCenterOperations;
