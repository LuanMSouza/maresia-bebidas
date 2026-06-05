import Hero from "@/blocos/hero";
import LLojas from "@/blocos/layoutLojas";
import Marcas from "@/blocos/marcas";
import Diferenciais from "@/blocos/deferenciais";
import Footer from "@/blocos/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <LLojas />
      <Marcas />
      <Diferenciais />
      <Footer />
    </main>
  );
}
