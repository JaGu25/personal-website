import NavBar from "@/app/(landing)/components/navegation/NavBar";
import HeroContent from "@/app/(landing)/components/web/HeroContent";

export default async function Home() {
  return (
    <div className="relative">
      <NavBar />
      <HeroContent />
    </div>
  );
}
