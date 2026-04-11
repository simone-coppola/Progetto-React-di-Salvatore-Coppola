import "../../style/Footer/AccountFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

function AccountFooter() {
  return (
    <div className="AccountFooter">
      <section className="FirstSection">
        <h3>ACCOUNT</h3>
        <ul className="BoldList">
          <li>
            <span>T</span>Subscribe
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faUser} className="FooterIcon" />
            </span>
            Manage My Account
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faNewspaper} className="FooterIcon" />
            </span>
            Home Delivery
          </li>
          <li>
            <span>T</span>Gift Subscriptions
          </li>
        </ul>

        <ul className="RegularList">
          <li>Group Subscriptions</li>
          <li>Gift Articles</li>
          <li>Email Newsletters</li>
        </ul>
      </section>

      <section className="SecondSection">
        <ul>
          <li>NYT Licensing</li>
          <li>Replica Edition</li>
          <li>Times Store</li>
        </ul>
      </section>
    </div>
  );
}

export default AccountFooter;