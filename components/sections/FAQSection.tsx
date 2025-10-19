import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Koliko kosta angažovanje trubackog orkestra Rakete?",
    answer:
      "Cena nasih usluga zavisi od vrste proslave, trajanja nastupa i lokacije. Ponudimo vam <strong>najpovoljnije cene na trzistu</strong> uz garanciju vrhunskog kvaliteta. Kontaktirajte nas na 063 789 4687 za besplatnu procenu i personalizovanu ponudu. Specijalne cene dostupne za visestruke dogadjaje i grupne rezervacije.",
  },
  {
    question: "Koji repertoar pesama pokrivate?",
    answer:
      "Nas orkestar ima bogat repertoar koji obuhvata preko 500 pesama. Sviramo tradicionalne srpske narodne pesame, starogradske klasike, kolo, coceke, zabavnu muziku, ljubavne balade i moderne hitove. Prilagodjavamo se vasim zeljama i mozemo nauciti specificne pesme po zelji. Samo nam recite šta bi ste voleli da cujete!",
  },
  {
    question: "Gde nastupate - koje gradove pokrivate?",
    answer:
      "Trubacki orkestar Rakete nastupa širom Srbije. Posebno smo aktivni u regionima: Velika Plana, Smederevo, Požarevac, Svilajnac, Despotovac, Jagodina, Kragujevac, Valjevo, Kraljevo, Užice i Leskovac. Takodje nastupamo i u drugim gradovima i mestima sirom zemlje. Kontaktirajte nas bez obzira gde se nalazi vasa proslava!",
  },
  {
    question: "Koliko dugo traje nastup trubackog orkestra?",
    answer:
      "Trajanje nastupa potpuno prilagodjavamo vasim potrebama. Tipican nastup na svadbi moze trajati od 3 do 6 sati, ali mozemo organizovati i kraci ili duži nastup po vašoj zelji. Za slave, krstenja i druge proslave trajanje definišete vi. Fleksibilni smo i prilagodjavamo se vasem rasporedu dogadjaja.",
  },
  {
    question: "Koliko unapred treba rezervisati orkestar?",
    answer:
      "Preporucujemo da nas kontaktirate sto pre, narocito za svadbe koje se obicno planiraju mesecima unapred. Ipak, razumemo da nekad postoje i hitni zahtevi - kontaktirajte nas i pokušacemo da se prilagodimo i vasim last-minute potrebama.Sto ranije nas rezervisete, vece su šanse da budemo dostupni za vas termin.",
  },
  {
    question: "Šta je uključeno u vašu uslugu?",
    answer:
      "Nasa usluga uključuje kompletnu muzičku postavu profesionalnih muzicara, svu potrebnu zvucnu opremu, punktualan dolazak i profesionalan nastup tokom dogovorenog vremena. Dolazimo profesionalno obučeni i spremni da ulepšamo vašu proslavu. Transport do vase lokacije je takodje uključen u cenu za lokacije širom Srbije.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-black to-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12">Česta Pitanja o Trubačima Rakete</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="bg-background px-6 rounded-lg"
            >
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base pt-4">
                <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
