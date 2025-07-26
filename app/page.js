import Profile from "./components/Profile";
import TechStacks from "./components/TechStacks";
import SocialLinks from "./components/SocialLinks";

export default function Home() {
  return (
    <main>
      <div className="bg-black">
        <Profile/>
        <TechStacks />
        <SocialLinks />
      </div>
    </main>
  );
}
