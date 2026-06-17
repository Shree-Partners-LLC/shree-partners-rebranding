import "./Blogs.css";
import banner from "../../assets/blog-banner.avif";
import blog1 from "../../assets/blog1.webp";
import blog2 from "../../assets/blog2.webp";
import blog3 from "../../assets/blog3.jpeg";
const blogs = [
  {
    image: blog1,
    title: "Why Hybrid Cloud Model is Ideal For Your Enterprise?",
    subtitle: "Lifting Hybrid Cloud Infrastructure for the Businesses",
    description: "Every organization has its infrastructure...",
    link: "/insights/blog1"
  },
  {
    image: blog2,
    title: "How Automation Testing Improves Service Quality in the Airline Industry?",
    description: "When I talk about Automation Testing...",
    link: "/insights/blog2"
  },
  {
    image: blog3,
    title: "Why Do Companies Struggle with Technology Innovation?",
    description: "In today's competitive marketplace...",
    link: "/insights/blog3"
  }
];
function Blogs() {
  return (
    <div className="blogs">
      <section className="blogs-hero">
        <div className="blogs-hero-image"><img src={banner} alt="Blogs" /></div>
        <div className="blogs-title"><h1>Blogs</h1></div>
      </section>
      <section className="blogs-container">
        {blogs.map((blog, index) => (
          <article className="blog-card" key={index}>
            <div className="blog-image"><img src={blog.image} alt={blog.title} /></div>
            <div className="blog-content">
              <h2>{blog.title}</h2>
              {blog.subtitle && (
                <h4>{blog.subtitle}</h4>
              )}
              <p>{blog.description}</p>
              <a href={blog.link}>READ MORE &gt;</a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
export default Blogs;