import "./Cookie_Policy.css";
function Cookie_Policy() {
  return (
    <section className="cookie">
      <div className="cookie-container">
        <h1 className="cookie-title">Cookie Policy</h1>
        <p className="cookie-text">Cookies are small text files that are downloaded on your device (computer hard drive, tablet or mobile) while you are accessing our website. We recognize your device while you are in a session with our website. Cookies will not provide us with your personal information (i.e. email address and phone number) until you register with us on our website. </p>
        <p className="cookie-text">We use cookies and similar technologies for various reasons, including measuring your visits on our website, understanding how you use our website, and recognizing and remembering your preferences. We use cookies to improve our offerings and content on our webpages. Other third-party organizations may also collect user information on our website through cookies to help analyze how the website is being used and measure the number of website visitors.</p>
        <div className="cookie-section">
          <h2>Manage Your Browser Cookies</h2>
          <p>If you wish to control cookies, you can configure your browser settings by accepting all cookies. If you want to delete existing cookies or do not wish to receive cookies, you can change your browser settings.</p>
          <ul className="browser-list">
            <li><a href="https://support.google.com/chrome/answer/95647?hl=en-GB">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/delete-browsing-search-download-history-firefox">Mozilla Firefox</a></li>
            <li><a href="https://support.microsoft.com/en-us/help/278835/how-to-delete-cookie-files-in-internet-explorer">Microsoft Edge / Internet Explorer</a></li>
            <li><a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac">Apple Safari</a></li>
          </ul>
        </div>
        <p className="cookie-text">Configure your browser settings to accept all cookies or to alert you whenever a website’s server offers a cookie. You can clear your browser history if you wish to delete previously placed cookies by selecting the “delete” or “clear cookies” option.</p>
      </div>
    </section>
  );
}
export default Cookie_Policy;