import NavBar from "@/app/landing/components/navegation/NavBar";
import HeroContent from "@/app/landing/components/web/HeroContent";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <div className="relative">
      <NavBar lng={lng} />
      <HeroContent lng={lng} />
    </div>
  );
}
