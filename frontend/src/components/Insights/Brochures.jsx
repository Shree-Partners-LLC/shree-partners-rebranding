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
    description:
      "Today's forward-focused companies must develop new strategies to automate their businesses through applications that help eliminate time-consuming manual processes.",
  },
  {
    image: dataAnalytics,
    title: "Data Management and Analytics Solutions",
    description:
      "The Shree Partners team works closely with your organization to design and implement solutions that fit your specific requirements.",
  },
  {
    image: enterprise,
    title: "Enterprise Operations Transformation",
    description:
      "Our enterprise operations and transformation services help clients drive change through cloud migration, workplace transformation and systems integration.",
  },
  {
    image: aiMl,
    title: "Digital, AI and Machine Learning",
    description:
      "Our professional team of experts designs, deploys and integrates AI-driven solutions customized for your business.",
  },
  {
    image: travel,
    title: "Travel and Hospitality",
    description:
      "Shree Partners provides innovative solutions, exceptional service and seamless support to ensure our clients’ end-to-end business success.",
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
              <button>DOWNLOAD &gt;</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
export default Brochures;