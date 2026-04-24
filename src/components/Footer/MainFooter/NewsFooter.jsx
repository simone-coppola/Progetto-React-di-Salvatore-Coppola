import {useFooter} from "../../../context/FooterContext";

function NewsFooter() {
    const { openSection, setOpenSection } = useFooter();

    const toggleSection = () => {
        setOpenSection((prev) => (prev === "news" ? null : "news"));
    };
    return(
        <div className="NewsFooter">
            <h3 onClick={toggleSection}>NEWS</h3>
            <ul className={openSection === "news" ? "open" : ""}>
                <li>Home Page</li>
                <li>U.S.</li>
                <li>World</li>
                <li>Politics</li>
                <li>New York</li>
                <li>Education</li>
                <li>Sports</li>
                <li>Business</li>
                <li>Tech</li>
                <li>Science</li>
                <li>Weather</li>
                <li>The Great Read</li>
                <li>Obituaries</li>
                <li>Headway</li>
                <li>Visual Investigations</li>
                <li>The Magazine</li>
            </ul>
        </div>
    )
}

export default NewsFooter;