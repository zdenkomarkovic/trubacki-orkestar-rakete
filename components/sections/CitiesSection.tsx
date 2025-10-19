import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const cities = [
  {
    name: "Velika Plana",
    description:
      "Trubači za svadbe i proslave u Velikoj Plani i okolini. Dugogodišnje iskustvo sa najboljim cenama na tržištu.",
  },
  {
    name: "Smederevo",
    description:
      "Trubački orkestar u Smederevu za sve vrste proslava. Pozovite nas za najpovoljniju ponudu.",
  },
  {
    name: "Požarevac",
    description:
      "Trubači Rakete za proslave u Požarevcu. Profesionalan nastup po konkurentnim cenama.",
  },
  {
    name: "Svilajnac",
    description:
      "Trubači za svadbe i slave u Svilajncu. Najbolji odnos cene i kvaliteta.",
  },
  {
    name: "Despotovac",
    description:
      "Trubački orkestar za proslave u Despotovcu. Bogat repertoar i pristupačne cene.",
  },
  {
    name: "Jagodina",
    description:
      "Trubači u Jagodini za sve vaše proslave. Pozovite za besplatnu procenu.",
  },
  {
    name: "Kragujevac",
    description:
      "Najpovoljniji trubači u Kragujevcu. Garantujemo vrhunsku muziku i nezaboravnu atmosferu.",
  },
  {
    name: "Valjevo",
    description:
      "Trubački orkestar za svadbe i proslave u Valjevu po najpovoljnijim cenama.",
  },
  {
    name: "Kraljevo",
    description:
      "Trubači Rakete u Kraljevu - profesionalne usluge po pristupačnim cenama.",
  },
  {
    name: "Užice",
    description:
      "Trubači za sve prilike u Užicu i zapadnoj Srbiji. Najpovoljnije cene garantovane.",
  },
  {
    name: "Leskovac",
    description:
      "Trubački orkestar Rakete u Leskovcu. Kvalitet i tradicija po najboljim cenama.",
  },
];

export default function CitiesSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-black to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-4">
          Pokrivamo Celu Srbiju - Trubači Rakete Dejvida Stamenkovića na Vasoj
          Lokaciji
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-muted">
          Trubački orkestar Rakete nastupa širom Srbije. Bez obzira gde se
          nalazi vaša proslava, mi smo tu za vas sa{" "}
          <strong className="text-primary">najpovoljnijim cenama</strong> i
          profesionalnim pristupom.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <MapPin className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-xl font-bold mb-2">{city.name}</h3>
              <p className="text-sm">{city.description}</p>
            </Card>
          ))}
          <Card className="p-6 hover:shadow-lg transition-shadow bg-primary/10">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h3 className="text-xl font-bold mb-2">Cela Srbija</h3>
            <p className="text-sm font-semibold text-white">
              Bez obzira gde se nalazite, mi dolazimo do vas! Kontaktirajte nas
              za vašu lokaciju.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
