import {useFooter} from "../../../context/FooterContext";

function MoreFooter() {
    const { openSection, setOpenSection } = useFooter();

    const toggleSection = () => {
        setOpenSection((prev) => (prev === "more" ? null : "more"));
    };

    return(
        <div className="MoreFooter">
            <h3 onClick={toggleSection}>MORE</h3>
            <ul className={openSection === "more" ? "open" : ""}>
                <li>Audio</li>
                <li>Games</li>
                <li>Cooking</li>
                <li>Wirecutter</li>
                <li>The Athletic</li>
                <li>Jobs</li>
                <li>Video</li>
                <li>Graphics</li>
                <li>Trending</li>
                <li>Live Events</li>
                <li>Corrections</li>
                <li>Reader Center</li>
                <li>TimesMachine</li>
                <li>The Learning Network</li>
                <li>School of The NYT</li>
                <li>inEducation</li>
            </ul>
        </div>
    )
}

export default MoreFooter;