import {useFooter} from "../../../context/FooterContext";

function LifestyleFooter() {
    const { openSection, setOpenSection } = useFooter();

    const toggleSection = () => {
        setOpenSection((prev) => (prev === "lifestyle" ? null : "lifestyle"));
    };

    return(
        <div className="LifestyleFooter">
            <h3 onClick={toggleSection}>LIFESTYLE</h3>
            <ul className={openSection === "lifestyle" ? "open" : ""}>
                <li>Health</li>
                <li>Well</li>
                <li>Food</li>
                <li>Restaurant Reviews</li>
                <li>Love</li>
                <li>Travel</li>
                <li>Style</li>
                <li>Fashion</li>
                <li>Real Estate</li>
                <li>T Magazine</li>
            </ul>
        </div>

    )
}

export default LifestyleFooter;