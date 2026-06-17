import "./Blog2.css";
import banner from "../../assets/blog-banner.avif";
import blogImage from "../../assets/blog2.webp";
import author from "../../assets/salim.png";
function Blog2() {
  return (
    <div className="blog-details">
      <section className="blogs-hero">
        <div className="blogs-hero-image"><img src={banner} alt="Blogs" /></div>
        <div className="blogs-title"><h1>Blogs</h1></div>
      </section>
      <div className="blog-details-container">
        <img src={blogImage} alt="Automation Testing" className="blog-main-image"/>
        <div className="blog-layout">
          <aside className="blog-author">
            <img src={author} alt="Salim Ansari" className="author-image"/>
            <h3>Salim Ansari</h3>
            <h4>Automation Manager</h4>
            <p>October 2020</p>
          </aside>
          <article className="blog-content-area">
            <h1>How Automation Testing Improves Service Quality in the Airline Industry?</h1>
            <p>When I talk about Automation Testing in Airlines Industry, the first question that everyone asks is, how will automation testing help the Industry? </p>
            <p>Airlines have frequently changing metrics and other issues like dynamic pricing, bookings across cross platforms and browsers which impact user experience. </p>
            <h2>Dynamic Pricing</h2>
            <p>Dynamic prices are uploaded into airline-specific systems and traditionally verified manually. Automation helps validate pricing faster and more accurately.</p>
            <p>Automation scripts can execute tests across platforms simultaneously and reduce manual effort.</p>
            <h2>Mobile Devices and Browsers</h2>
            <p>Airlines customers use Windows, Mac, Android and iOS devices.Testing manually on thousands of combinations is difficult.</p>
            <p>Automation enables simulators, real devices and parallel execution to increase coverage.</p>
            <h2>KIOSK Machine</h2>
            <p>Airlines use KIOSK machines for check-ins and reservations. Automation can validate business rules and booking data without extensive manual intervention.</p>
            <h2>Desktop Applications</h2>
            <ul>
              <li><strong>Flight Scheduling:</strong> Verify fare changes when schedules are updated.</li>
              <li><strong>PNR Refund Process:</strong> Validate cancellation rules and refunds automatically.</li>
              <li><strong>Seat Price Verification:</strong> Check seat pricingconsistency between systems.</li>
              <li><strong>Special Fee / Taxes:</strong> Ensure taxes and feesare correctly reflected.</li>
            </ul>
            <h2>Heartbeat</h2>
            <p>Automated health checks can continuously monitor production systems and identify issues before customers are affected.</p>
            <p>By running scheduled tests, organizations can detect failures quickly and improve reliability.</p>
            <p className="blog-contact">For any questions, please mail us at<a href="mailto:connect@shreepartners.com">{" "}connect@shreepartners.com</a></p>
          </article>
        </div>
      </div>
    </div>
  );
}
export default Blog2;