import "../../style/Footer/Footer.css";
import MainFooter from "./MainFooter/MainFooter";
import AccountFooter from "./AccountFooter";
import FinallyFooter from "./FinallyFooter";

function Footer() {
  return (
    <footer>
      <section className="TitleFooter">
        <h2>The New York Times</h2>
      </section>

      <div className="footerWrapper">
        <section className="FooterMain">
          <MainFooter />
        </section>

        <section className="FooterAccount">
          <AccountFooter />
        </section>
      </div>

      <div className="FooterFinally">
        <FinallyFooter />
      </div>
    </footer>
  );
}

export default Footer;