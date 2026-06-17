import "./Blog1.css";
import banner from "../../assets/blog-banner.avif";
import hybridCloud from "../../assets/blog1.webp";
import author from "../../assets/author.png";
function Blog1() {
  return (
    <div className="blog1">
      <section className="blog1-hero">
        <div className="blog1-hero-image"><img src={banner} alt="Blogs" /></div>
        <div className="blog1-title"><h1>Blogs</h1></div>
      </section>
      <section className="blog1-container">
        <img src={hybridCloud} alt="Hybrid Cloud" className="blog1-main-image"/>
        <h1 className="blog1-heading">Why Hybrid Cloud Model is Ideal For Your Enterprise?</h1>
        <div className="blog1-content-wrapper">
          <aside className="blog1-author">
            <img src={author} alt="Author" />
            <h3>Himanshu Raja</h3>
            <h4>Senior Manager</h4>
            <h4>Cloud Practices</h4>
            <p>February 2021</p>
          </aside>
          <article className="blog1-content">
            <h3>Lifting Hybrid Cloud Infrastructure for the Businesses</h3>
            <p>Every organization has its infrastructure and applications developed either internally or provided by different vendors.</p>
            <p>A Private Cloud (Enterprise Cloud) is a cloud computing where all IT services reside on a private IT infrastructure.</p>
            <p>Whereas Public Cloud is an on-demand service model where all compute services are provided over the internet.</p>
            <h2>Benefits of Hybrid Cloud Management Solution</h2>
            <ol>
              <li>Activity Efficiency and transparency.</li>
              <li>Cost Improvements and visibility.</li>
              <li>Simplicity across environments.</li>
              <li>Automation and orchestration.</li>
              <li>Optimization and monitoring.</li>
            </ol>
            <h2>Why Hybrid Infrastructure Important</h2>
            <p>Organizations increasingly choose hybrid cloud architecture because it bridges the gap between private and public cloud infrastructure.</p>
            <p>In a Public Cloud all services are hosted on the provider's infrastructure while private cloud keeps critical data under organizational control.</p>
            <h2>Conclusion - Future of Hybrid Cloud</h2>
            <p>Hybrid cloud infrastructure continues to grow as organizations seek flexibility, scalability and cost efficiency.</p>
            <p className="blog1-email">For any questions, please mail us at<span> connect@shreepartners.com</span></p>
          </article>
        </div>
      </section>
    </div>
  );
}
export default Blog1;