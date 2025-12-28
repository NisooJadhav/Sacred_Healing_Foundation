import Hero from "../app/components/Hero";
import HomeAbout from "../app/components/HomeAbout";
import FreeSessions from "./components/FreeSessions";
import MyGoal from "./components/MyGoal";
import BrochureModal from "../app/components/BrochureModal";
import Loader from "./components/Loader";
import Divider from "./components/Divider";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (
    <div>
      <Loader />
      <BrochureModal />
      <Hero />
      <HomeAbout />
      <Divider />
      <MyGoal />
      <Divider />
      <FreeSessions />
      <Divider />
      <Testimonials />
      <Divider />
      <Contact />
    </div>
  );
}