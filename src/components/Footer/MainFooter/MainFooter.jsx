import "../../../style/Footer/MainFooter.css";
import ArtsFooter from "./ArtsFooter";
import OpinionFooter from "./OpinionFooter";
import LifestyleFooter from "./LifestyleFooter";
import MoreFooter from "./MoreFooter";
import NewsFooter from "./NewsFooter";

function MainFooter() {
    return (
        <div className="MainFooter">

            <div className="MainContainer">

            <section className="News">
                <NewsFooter />
            </section>

            <section className="Arts">
                <ArtsFooter />
            </section>

            <section className="Lifestyle">
                <LifestyleFooter />
            </section>

            <section className="Opinion">
                <OpinionFooter />
            </section>

            <section className="More">
                <MoreFooter />
            </section>

            </div>

        </div>
    )
}

export default MainFooter;