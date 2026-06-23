import "./new.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../../assets/images4.jpeg";
import securityserviceDiagram from "../../assets/Security-Services-overview.png";

function CybersecurityThreatManagement() {
  return (
    <>
    
      <section className="test-hero">
        <div className="hero-content">
          <div className="hero-inner">
            <h4>Enterprise Operations Transformation</h4>

            <h1>Cybersecurity and <br/>Threat Management</h1>
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
          <h2>Data Security is Paramount</h2>

          <p>
            One of the most positive (yet highly disruptive) factors in the
            digital era has been the ubiquitous connectivity that unites
            countless disparate systems. Ironically, this connectivity is also
            one of the digital ecosystem’s most vulnerable threats. Shadow IT,
            BYOD (Bring Your Own Device), flimsy firewalls and poor response
            protocols have created some of the most damaging breaches on the
            global security stage.
          </p>

          <p>
            Research by Juniper predicts that a staggering 33 billion records
            will be stolen by 2023, and half of those security breaches are
            likely to occur in the US. The need of the hour is to rethink
            strategies and systems for foolproof security – to find the right
            balance between technology-centric and human-centric threat
            management.
          </p>
          <p>
            There are two types of assets – replaceable and irreplaceable. In
            terms of value, data is often considered irreplaceable, making it
            absolutely necessary to safeguard an organization’s data, systems
            and reputation. <b>Shree Partners</b> offers the highest levels of
            expertise in security protocols to help our customers protect their
            data, both in transit and at rest. Our risk management solutions
            help customers safely monitor and manage their critical security
            systems – so they can focus on their core business without the
            worry.
          </p>
        </div>
      </section>

         <section className="test-overview">
        <div className="container">
          <h2>Cybersecurity and Threat Management Overview</h2>

          <div className="overview-grid">
            <div>
              <p>
                Our solutions feature a risk-adaptive protocol that fully safeguards customer operations that depend on user mobility and the cloud. Our solutions constantly monitor activities through sophisticated incident response systems. In cases of abnormal, inconsistent or suspicious activity, our systems trigger alerts that proactively assess and manage the risk or threat, ensuring that a customer’s operation is not compromised by security breaches or cyberattacks.
              </p>

              <p>
                Digital transformation has ushered in a new era where data access does not always occur on-premises, making monitoring a challenge. Our processes adopt a combined human-centric, technology-centric and risk-adaptive approach. This approach delivers targeted solutions that ensure continuous, automatic endpoint monitoring, enabling greater visibility of data access – the “how and where” points.
              </p>
            </div>

            <ul className="overview-list">
              <p>The changing nature of cyberthreats requires that businesses adopt stronger security layers, including:</p>
              <li>Risk adaptive approaches</li>
              <li>Robust vendor management and due diligence</li>
              <li>Human-centric and technology-centric approaches</li>
              <li>Policies to help monitor and neutralize risks from BYOD and Shadow IT</li>
              <li>Data classification and monitoring</li>
              <li>Swift, automated incident detection and response</li>
              <li>Insider threat management</li>
              <li>Endpoint activity monitoring – network traffic, file access</li>
              <li>User behavior analytics</li>
              <li>Normal activity profiling – DNS logs, VPN, proxy and DHCP logs that help identify abnormal activity</li>
              <li>Activity categorization – accidental, compromised and malicious</li>
            </ul>
          </div>
        </div>
      </section>
          
  <section className="diagram-section">
          <div className="container">
            <h2>Security Services Overview</h2>
  
            <img
              src={securityserviceDiagram}
              alt="Automation Testing Diagram"
              className="diagram-image"
            />
          </div>
        </section>
       
    </>
  );
}

export default CybersecurityThreatManagement;
