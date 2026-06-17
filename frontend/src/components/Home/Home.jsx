import "./Home.css";
import { useEffect, useState } from "react";
import insurance from "../../assets/insurance.avif";
import travel from "../../assets/travel.webp";
import healthcare from "../../assets/healthcare.jpg";
import banking from "../../assets/banking.webp";
import professional from "../../assets/professional.webp";
import claims from "../../assets/claims.jpg";
import predictive from "../../assets/predictive.webp";
import aws from "../../assets/aws.jpg";
function Home() {
  const slides = [
    {
      title: "Insurance",
      image: insurance,
      link: "/industries/insurance",
    },
    {
      title: "Travel & Hospitality",
      image: travel,
      link: "/industries/travel-hospitality",
    },
    {
      title: "Healthcare",
      image: healthcare,
      link: "/industries/healthcare",
    },
    {
      title: "Banking & Finance",
      image: banking,
      link: "/industries/banking-finance",
    },
    {
      title: "Professional Services",
      description: "Technology solutions that optimize business operations",
      image: professional,
      link: "/industries/professional-services",
    },
  ];
  const stories = [
    {
      title: "Global Claims Management",
      description:"Leading global claims management company ensures business continuity with a Network Operations Center.",
      image: claims,
      link: "/success1.pdf",
    },
    {
      title: "Travel Management",
      description:"See how we developed a DevOps consulting solution to enable faster support for travel apps 24/7, reducing costly escalations by up to 85%.",
      image: travel,
      link: "/success2.pdf",
    },
    {
      title: "Predictive Analytics",
      description:"Leading travel management company significantly boosts revenue with actionable insights from predictive analytics.",
      image: predictive,
      link: "/success3.pdf",
    },
    {
      title: "Big Data Solution on AWS",
      description:"Shree Partners collaborated with one of the world's largest travel management consortiums to process large amounts of data using big data technologies on AWS cloud.",
      image: aws,
      link: "/success4.pdf",
    }
  ];
  const reviews = [
    {
      text: "Let me be the first to congratulate you on the successful deployment of business technology. You all have played a major role in making this a reality, and I want to personally thank you for your dedication and efforts. I am humbled by how much this team has accomplished, and feel proud to work with such a strong group.",
      author: "VP of Data Services, Large Travel Management Company"
    },
    {
      text: "With Shree as our digital and infrastructure technology partner, we've seen several quantifiable business outcomes, including improved back-end processes, better workflows across our operation, and an uptick in revenue.",
      author: "CIO, One of World's Largest Insurance Company"
    },
    {
      text: "Our decade-long association with Shree Partners has enabled us to improve our operations while staying focused on our core business. Shree's extensive experience in customer service and delivery, emerging technologies around data, and ML/AI knowledge has significantly contributed to our business growth.",
      author: "Executive VP, A Global Corporate Travel Management Company"
    }
  ];
  const [reviewIndex, setReviewIndex] = useState(0);
  const extendedSlides = [
    slides[slides.length - 1],
    ...slides,
    slides[0],
  ];
  const [storyIndex, setStoryIndex] = useState(0);
  const [current, setCurrent] = useState(1);
  const [transition, setTransition] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setReviewIndex(prev =>prev === reviews.length - 1 ? 0 : prev + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    if (current === extendedSlides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(1);
      }, 1000);
    }
    if (current === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(slides.length);
      }, 1000);
    }
  }, [current]);
  useEffect(() => {
    if (!transition) {
      const timeout = setTimeout(() => {
        setTransition(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [transition]);
  const nextSlide = () => {setCurrent(prev => prev + 1);};
  const prevSlide = () => {setCurrent(prev => prev - 1);};
  const nextStory = () => {setStoryIndex((prev) =>prev + 2 >= stories.length ? 0 : prev + 2);};
  const prevStory = () => {setStoryIndex((prev) =>prev === 0 ? stories.length - 2 : prev - 2);};
  return (
    <>
    <section className="slider">
      <div className="slider-track"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: transition?"transform 1s ease-in-out":"none"
        }}
      >
        {extendedSlides.map((item, index) => (
          <div className="slide" key={index}>
            <img src={item.image} alt={item.title} className="slider-image"/>
            <div className="overlay"></div>
            <div className="content">
              <h1>{item.title}</h1>
              <br></br>
              <a href={item.link} className="find-btn">FIND OUT MORE →</a>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        ))}
      </div>
      <button className="arrow left" onClick={prevSlide}>&#10094;</button>
      <button className="arrow right" onClick={nextSlide}>&#10095;</button>
    </section>
    <section className="about-shree">
      <div className="about-container">
        <h2>About Shree Partners</h2>
        <p>We are a digital transformation and technology solutions company that helps customers increase profitability by designing, developing, implementing and maintaining innovative business solutions that drive revenue and reduce cost.</p>
      </div>
    </section>
    <section className="services-section">
      <h2>Service Offerings</h2>
        <div className="services-grid">
          <div className="service-card ">
            <h3>
              <a href="/services/application-services">Application Services and Automation</a>
            </h3>
            <ul>
              <li><a href="/services/test-automation">Test Automation</a></li>
              <li><a href="/services/full-stack-development">Full Stack Development</a></li>
              <li><a href="/services/mobility">Mobility</a></li>
              <li><a href="/services/digital-marketing">Digital Marketing and Collaboration</a></li>
              <li><a href="/services/intranet">Intranet Solutions</a></li>
              <li><a href="/services/product-engineering">Product Engineering</a></li>
            </ul>
          </div>
          <div className="service-card">
            <h3>
              <a href="/services/ai-ml">Digital, AI and Machine Learning</a>
            </h3>
            <ul>
              <li><a href="/services/nlp">Domain-specific NLP Engines</a></li>
              <li><a href="/services/rpa">Intelligent RPA</a></li>
              <li><a href="/services/deep-learning">Development, Machine Learning and Deep Learning</a></li>
              <li><a href="/services/ivr-ai">Real-time AI on Cloud – IVR</a></li>
              <li><a href="/services/ai-consulting">Digital and AI Consulting</a></li>
              <li><a href="/services/iot">Internet of Things (IoT) Solutions</a></li>
            </ul>
          </div>
          <div className="service-card">
            <h3>
              <a href="/services/data-management">Data Management and Analytics</a>
            </h3>
            <ul>
              <li><a href="/services/big-data">Big Data Solutions</a></li>
              <li><a href="/services/data-lakes">Data Lakes Design, Strategy and Implementation</a></li>
              <li><a href="/services/data-science">Data Science, Predictive and Prescriptive Analytics</a></li>
              <li><a href="/services/business-intelligence">Business Intelligence and Analytics</a></li>
            </ul>
          </div>
          <div className="service-card">
          <h3>  
            <a href="/services/enterprise-operations">Enterprise Operations Transformation</a>
          </h3>
          <ul>
            <li><a href="/services/network-operations">Network Operations Center</a></li>
            <li><a href="/services/data-center">Data Center Operations</a></li>
            <li><a href="/services/cybersecurity">Cyber Security and Threat Management</a></li>
            <li><a href="/services/cloud">Cloud Management</a></li>
            <li><a href="/services/devops">DevOps Consulting and Implementation</a></li>
          </ul>
        </div>
      </div>
    </section>
    <section className="success-section">
      <h2>Success Stories</h2>
      <br></br>
      <div className="success-grid">
        {stories.map((story, index) => (
          <div className="success-card" key={index}>
            <img src={story.image} alt={story.title}/>
            <div className="success-content">
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              <a href={story.link}download>READ MORE &gt;</a>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="reviews-section">
      <h2>Reviews from Our Customers</h2>
      <div className="review-card">
        <p className="review-text">"{reviews[reviewIndex].text}"</p>
        <h3 className="review-author">{reviews[reviewIndex].author}</h3>
      </div>
    </section>
  </>
);}
export default Home;