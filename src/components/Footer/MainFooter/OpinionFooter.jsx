import {useFooter} from "../../../context/FooterContext";

function OpinionFooter() {
    const { openSection, setOpenSection } = useFooter();

    const toggleSection = () => {
        setOpenSection((prev) => (prev === "opinion" ? null : "opinion"));
    };

    return (
        <div className="OpinionFooter">
            <h3 onClick={toggleSection}>OPINION</h3>
            <ul className={openSection === "opinion" ? "open" : ""}>
                <li>Today's Opinion</li>
                <li>Columnist</li>
                <li>Editorials</li>
                <li>Guest Essays</li>
                <li>Op-Docs</li>
                <li>Letters</li>
                <li>Sunday Opinion</li>
                <li>Opinion Video</li>
                <li>Opinion Audio</li>
            </ul>
        </div>
    )
}
export default OpinionFooter;