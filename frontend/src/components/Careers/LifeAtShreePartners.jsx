import "./LifeAtShreePartners.css";
import banner from "../../assets/life-banner.avif";
import team from "../../assets/team.png";
import learning from "../../assets/learning.png";
import fun from "../../assets/fun.png";
function LifeAtShreePartners() {
  return (
    <div className="life-shree">
      <section className="life-hero">
        <div className="life-image"><img src={banner} alt="Life at Shree Partners" /></div>
        <div className="life-title"><h1>Life at Shree Partners</h1></div>
      </section>
      <section className="life-shree-about">
        <div className="life-shree-img"><img src={team} alt="Shree Team" /></div>
        <div className="life-shree-text">
          <p>At Shree Partners, you get to do great work with some of the brightest people on the planet. We promote a culture of transparency, openness, enthusiasm and passion.</p>
          <p>If you have what it takes, we would like to meet you. Whether that means working on emerging technology, solving business challenges or becoming a cross-disciplined practitioner, let’s chat!</p>
          <p>A passion for technology and interesting work brings people together at Shree Partners. Teamwork, growth and collaboration support both individual and collective growth.</p>
        </div>
      </section>
      <section className="life-shree-learning">
        <div className="life-shree-text">
          <h2>Learning and Development</h2>
          <p>We hire the best people and help make them even better.Learning and development is the cornerstone of life at Shree Partners.</p>
          <ul>
            <li>
              <strong>Intellectual Growth:</strong>Knowledge sharing, discussions, competitions and quizzes.
            </li>
            <li>
              <strong>Personal Development:</strong>Activities that expand social and cultural awareness.
            </li>
          </ul>
        </div>
        <div className="life-shree-img"><img src={learning} alt="Learning" /></div>
      </section>
      <section className="life-shree-fun">
        <div className="life-shree-img"><img src={fun} alt="Fun at work" /></div>
        <div className="life-shree-text">
          <h2>Fun at Work</h2>
          <p>We believe in the mantra <strong>Work Hard, Party Harder.</strong>We celebrate birthdays, holidays and professional milestones throughout the year with enthusiasm.</p>
        </div>
      </section>
    </div>
  );
}
export default LifeAtShreePartners;