import PetalsBackground from "@/components/PetalsBackground";
import Hero from "@/components/Hero";
import BouquetButton from "@/components/BouquetButton";
import LetterCard from "@/components/LetterCard";
import SongSection from "@/components/SongSection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-warm-radial">
      <PetalsBackground />
      <Hero />
      <BouquetButton />
      <LetterCard />
      <SongSection />
      <Gallery />
      <Footer />
    </main>
  );
}
