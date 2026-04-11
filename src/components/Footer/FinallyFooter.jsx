import "../../style/Footer/FinallyFooter.css";

function FinallyFooter() {
  return (
    <div className="FinallyFooter">
      <div className="footerRows">
        <ul>
          <li className="copyright">© 2026 The New York Times Company</li>
        </ul>

        <ul className="footerRow">
          <li>NYTCo</li>
          <li>Contact Us</li>
          <li>Accessibility</li>
          <li>Work with us</li>
          <li>Advertise</li>
        </ul>

        <ul className="footerRow">
          <li>T Brand Studio</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Terms of Service</li>
        </ul>

        <ul className="footerRow">
          <li>Terms of Sale</li>
          <li>Site Map</li>
          <li>Help</li>
          <li>Subscriptions</li>
        </ul>
      </div>

      <p>Manage Privacy Preferences</p>
    </div>
  );
}

export default FinallyFooter;