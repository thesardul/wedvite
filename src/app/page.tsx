import Navigation from "./navigation";
import WeddingPage from "./wedding";
import Footer from "./components/footer";
import About from "./components/about";
import Venue from "./components/venue";
import Gallery from "./components/gallery";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div>
      <Navigation />
      <WeddingPage />
      <About />
      <Venue />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
