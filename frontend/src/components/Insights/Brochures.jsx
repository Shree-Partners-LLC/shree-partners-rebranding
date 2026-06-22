import "./Brochures.css";
import heroImg from "../../assets/brochure-banner.webp";
import appService from "../../assets/app-service.jpg";
import dataAnalytics from "../../assets/data-analytics.jpg";
import enterprise from "../../assets/enterprise.jpg";
import aiMl from "../../assets/aiml.jpg";
import travel from "../../assets/travel.webp";
const brochures = [
  {
    image: appService,
    title: "Application Services and Automation",
    description: "Today’s forward-focused companies must develop new strategies to automate their businesses through applications that help them eliminate time-consuming, manual and costly tasks – and replace them with automated processes that reduce redundancy and operating costs.",
    pdf: "/pdf1.pdf",
  },
  {
    image: dataAnalytics,
    title: "Data Management and Analytics Solutions",
    description: "The Shree Partners team works closely with your organization to design and implement solutions that fit your specific requirements, and deliver a competitive advantage by providing real-time, actionable insights into your data.",
    pdf: "/pdf2.pdf",
  },
  {
    image: enterprise,
    title: "Enterprise Operations Transformation",
    description: "Our enterprise operations and transformation services help clients drive change through data centers, cloud migration, workplace transformation, network modernization, improved security and safety, and systems integration.",
    pdf: "/pdf3.pdf",
  },
  {
    image: aiMl,
    title: "Digital, AI and Machine Learning",
    description: "Shree Partners’ machine learning tools help clients implement AI-driven products and solutions to run more efficient and profitable operations, as well as go to market quicker. Our professional team of experts – data scientists, account managers, technologists and engineers – design, deploy and integrate solutions that are customized for your business.",
    pdf: "/pdf4.pdf",
  },
  {
    image: travel,
    title: "Travel and Hospitality",
    description: "Shree Partners provides innovative solutions, exceptional service and seamless support to ensure our clients’ end-to-end business success.",
    pdf: "/pdf5.pdf",
  },
];
function Brochures() {
  return (
    <div className="brochures">
      <section className="brochure-hero">
        <div className="brochure-hero-image"><img src={heroImg} alt="Brochures" /></div>
        <div className="brochure-title"><h1>Brochures</h1></div>
      </section>
      <section className="brochure-container">
        {brochures.map((item, index) => (
          <div className="brochure-card" key={index}>
            <div className="brochure-img"><img src={item.image} alt={item.title} /></div>
            <div className="brochure-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.pdf}download className="download-btn">DOWNLOAD &gt;</a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
export default Brochures;