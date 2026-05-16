import Header from "../components/Header/Header";
import Video from "../components/Header/Navbar/Video";
import Footer from "../components/Footer/Footer";

function VideoPage() {
  return (
    <div className="App">
      <section className="HeaderSection">
        <Header />
      </section>

      <section className="Article">
        <Video />
      </section>

      <section className="Footer">
        <Footer />
      </section>
    </div>
  );
}

export default VideoPage;
