import NavBar from "@/app/landing/(components)/navegation/NavBar";
import Experience from "@/app/landing/(components)/web/Experience";
import Footer from "@/app/landing/(components)/web/Footer";
import HeroContent from "@/app/landing/(components)/web/HeroContent";
import Skills from "@/app/landing/(components)/web/Skills";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <div className="relative">
      <NavBar lng={lng} />
      <div className="px-8 lg:px-40 xl:px-60 bg-darkmode">
        <HeroContent lng={lng} />
        <Experience lng={lng} />
        <Skills lng={lng} />
        <Footer lng={lng} />
      </div>
    </div>
  );
}
