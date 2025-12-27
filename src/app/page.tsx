import Hero from "../app/components/Hero";
import HomeAbout from "../app/components/HomeAbout";
import MyGoal from "./components/MyGoal";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <MyGoal />
    </div>
  );
}
