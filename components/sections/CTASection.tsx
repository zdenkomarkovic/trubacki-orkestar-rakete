import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white mb-6">
          Rezervišite Trubački Orkestar Rakete Dejvida Stamenkovića!
        </h2>
        <p className="text-xl md:text-2xl mb-8">
          Najkvalitetnija usluga trubačkog orkestra po najpovoljnijim cenama u
          Srbiji
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            size="lg"
            className="text-xl px-10 py-7 bg-white text-primary hover:bg-gray-100"
            asChild
          >
            <a href="tel:0637894687">
              <Phone className="mr-2 h-6 w-6" />
              Pozovite: 063 789 4687
            </a>
          </Button>
        </div>
        <p className="text-lg">Dostupni 24/7 za vasa pitanja i rezervacije</p>
        <p className="text-2xl font-bold mt-4">
          GARANTUJEMO NAJPOVOLJNIJE CENE
        </p>
      </div>
    </section>
  );
}
