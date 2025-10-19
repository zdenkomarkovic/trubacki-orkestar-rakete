import { Card } from "@/components/ui/card";
import { Star, Music, Award, Users } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-black to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12">Zašto Odabrati Trubački Orkestar Rakete?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Star className="h-8 w-8 text-primary" />
              Vrhunski Kvalitet
            </h3>
            <p className="text-lg">
              Svaki član naseg orkestra je iskusan profesionalac sa
              dugogodišnjim iskustvom. Garantujemo vrhunski kvalitet svirke na
              svakom nastupu, bilo da se radi o svadbi, slavi ili bilo kojoj
              drugoj proslavi. Naša muzika ce ulepšati vašu proslavu i ostaviti
              nezaboravan utisak na sve goste.
            </p>
          </Card>
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Music className="h-8 w-8 text-primary" />
              Bogat Repertoar
            </h3>
            <p className="text-lg">
              Naš repertoar obuhvata preko 500 pesama - od tradicionalnih
              srpskih narodnih pesama, preko starogradskih klasika, do
              savremenih hitova. Prilagodjavamo se vašim željama i potrebama.
              Bilo da želite tradicionalnu kolo muziku ili moderne pesme, mi smo
              tu za vas.
            </p>
          </Card>
          <Card className="p-8 bg-primary/10">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              Najpovoljnije Cene
            </h3>
            <p className="text-lg font-semibold text-muted">
              Nudimo najbolji odnos cene i kvaliteta na tržištu! Naše cene su
              pristupačne i transparentne bez skrivenih troškova. Dobijate
              profesionalnu uslugu vrhunskog trubačkog orkestra po cenama koje
              su najkonkurentnije u Srbiji. Tražite ponudu i uverite se sami!
            </p>
          </Card>
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              Profesionalan Pristup
            </h3>
            <p className="text-lg">
              Punktualnost, profesionalnost i posvećenost su naše glavne
              karakteristike. Dolazimo na vreme, profesionalno obučeni sa
              kompletnom opremom. Prilagodjavamo se vašem rasporedu i potrebama.
              Vaše zadovoljstvo je naša primarna briga i trudimo se da svaka
              proslava bude savršena.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
