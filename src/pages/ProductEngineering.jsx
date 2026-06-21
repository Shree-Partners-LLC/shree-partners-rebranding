import "./new.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../assets/application-services.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function ProductEngineering() {
  return (
    <>
      <Navbar />
      <section className="test-hero">
        <div className="hero-content">
          <div className="hero-inner">
            <h4>APPLICATION SERVICES AND AUTOMATION</h4>

            <h1>Product Engineering</h1>
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
          <h2>Designing Future-proof Solutions</h2>

          <p>
            The product engineering services (PES) market is expected to reach
            $1 trillion by 2021, underscoring the industry’s growing reliance on
            this business-critical function. Rather than building independent IT
            laboratories, many of today’s companies rely on specialized IT labs
            to help them create outstanding products and leverage emerging
            technologies. From drawing board to dashboard, innovation labs are
            typically well positioned to offer the broadest array of product
            engineering services: ideation, design, testing, deployment, support
            – and more. As early technology adopters, PES providers are often
            best equipped to deliver tech-superior, future-proof products and
            services.
          </p>

          <p>
            At <b>Shree Partners</b>, our forward-thinking approach to new
            product development – plus our industry-leading development
            expertise – enables us to deliver state-of-the-art technology
            solutions for our customers. We consistently help clients leverage
            innovative processes to achieve successful business outcomes. Our
            offshore product development center in India is one of the most
            advanced IT innovation labs, producing world-class solutions that
            help our clients compete and grow.
          </p>
        </div>
      </section>

      <section className="test-overview">
        <div className="container">
          <h2>Product Engineering Overview</h2>

          <div className="overview-grid">
            <div>
              <p>
                Throughout the product lifecycle, our teams work closely with
                clients on ideation, architecture, design, testing, and
                maintenance. We use leading technologies to add value to every
                client we serve. Our product engineering services are faster to
                market, lower in development costs, scalable, and delivered on
                time and on budget.
              </p>

              <p>
                At Shree Partners, our cross-functional development teams work
                side-by-side with you to solve your issues quickly and easily.
                In an ecosystem where speed-to-market is the key differentiator,
                Shree Partners consistently delivers solutions that have the
                greatest impact on your operations. We solve problems creatively
                with the sole goal of maximizing business success through
                innovation and technological expertise.
              </p>
            </div>

            <ul className="overview-list">
                
              <li> We work with independent software vendors (ISV) and clients requiring outsourced product development services</li>
              <li>We serve all phases of product engineering: design, development, test engineering, deployment, maintenance, and support</li>
              <li>24/7 support</li>
              <li>Multiple operating models and methodologies: Agile, Waterfall and RUP</li>
              <li>State-of-the-art development center in India</li>
             
            </ul>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default ProductEngineering;
