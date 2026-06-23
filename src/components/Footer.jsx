import "../styles/footer.css";

function Footer() {
  return (
    <footer>

      <div className="wrap foot">

        <div>
          © 2026 Shree Partners LLC · East Brunswick, New Jersey
        </div>

        <div className="foot-links">

          <a href="#services">
            Services
          </a>

          <a href="#approach">
            How we work
          </a>

          <a href="#about">
            About
          </a>

          <a
            href="https://www.linkedin.com/company/shree-partners"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;