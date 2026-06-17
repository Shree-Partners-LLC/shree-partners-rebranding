import "./Leadership.css";
import heroImg from "../../assets/leadership-banner.jpg";
import rajivImg from "../../assets/rajiv.png";
import tripurImg from "../../assets/tripur.png";
function Leadership() {
  const leaders = [
    {
      image: rajivImg,
      name: "Rajiv Dahiya",
      role: "Chairman & CEO",
      description:
        "A technologist at heart, Rajiv brings 25+ years of experience in technology strategy, offshore delivery and executing large-scale implementations. Bridging the gap between a client’s business and technology is Rajiv’s forte; he strives to provide solutions that align with the client’s business needs. Rajiv builds high-performance teams that deliver enterprise-scale projects on time and on budget; he is passionate about delivering operational excellence through a unique blend of strategic innovation and tactical execution.",
      linkedin: "https://www.linkedin.com/in/rajiv-dahiya-822b471/"
    },
    {
      image: tripurImg,
      name: "Tripur Patel",
      role: "Delivery Head",
      description:
        "Tripur brings over 20 years of expertise in planning and delivering technology projects, with a focus on creating impactful software solutions. With a strong commitment to results, Tripur ensures that projects are completed on time and within budget, consistently exceeding client expectations. Renowned for building and leading high-performing teams, Tripur confidently tackles complex challenges and oversees large-scale implementations that drive operational excellence and fuel sustainable business growth.",
      linkedin: "https://www.linkedin.com/in/tripurpatel/"
    },
  ];
  return (
    <div className="leadership">
      <section className="leadership-hero">
        <div className="leadership-hero-image"><img src={heroImg} alt="Leadership" /></div>
        <div className="leadership-title"><h1>Leadership</h1></div>
      </section>
      <section className="leadership-intro">
        <p>Shree’s highly seasoned leadership team includes entrepreneurs, visionaries and technical architects, and experts in business, operations and project management. Our key principals bring decades of industry experience to every client’s business.</p>
        <h2>Meet our leaders</h2>
      </section>
      <section className="leaders-container">
        {leaders.map((leader, index) => (
          <div className="leader-card" key={index}>
            <div className="leader-image"><img src={leader.image} alt={leader.name} /></div>
            <div className="leader-content">
              <h3>{leader.name}</h3>
              <h4>{leader.role}</h4>
              <p>{leader.description}</p>
            </div>
            <a href={leader.linkedin}className="linkedin-icon"target="_blank"rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        ))}
      </section>
    </div>
  );
}
export default Leadership;