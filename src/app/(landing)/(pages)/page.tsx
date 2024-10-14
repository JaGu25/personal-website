import NavBar from "@/app/(landing)/components/NavBar";
import HeroContent from "@/app/(landing)/components/HeroContent";

export default async function Home() {
  return (
    <div>
      <NavBar />
      <HeroContent />
    </div>
  );
}
