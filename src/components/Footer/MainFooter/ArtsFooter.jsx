import {useFooter} from "../../../context/FooterContext";

function ArtsFooter() {
    const { openSection, setOpenSection } = useFooter();

    const toggleSection = () => {
        setOpenSection((prev) => (prev === "arts" ? null : "arts"));
    };

    return(
        <div className="ArtsFooter">
            <h3 onClick={toggleSection}>ARTS</h3>
            <ul className={openSection === "arts" ? "open" : ""}>
                <li>Book Review</li>
                <li>Best Sellers Book List</li>
                <li>Dance</li>
                <li>Movies</li>
                <li>Music</li>
                <li>Pop Colture</li>
                <li>Television</li>
                <li>Theater</li>
                <li>Visual Arts</li>
            </ul>
        </div>
    )
}

export default ArtsFooter;