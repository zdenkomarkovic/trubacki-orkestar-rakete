# 📁 Struktura Projekta - Trubacki Orkestar Rakete

## Pregled strukture nakon refaktorisanja

```
trubacki-orkestar-rakete/
│
├── app/                                 # Next.js App Router
│   ├── layout.tsx                       # Root layout (Header, Footer, globals)
│   ├── page.tsx                         # ⭐ Glavna stranica (25 linija!)
│   ├── kontakt/
│   │   └── page.tsx                     # Kontakt stranica
│   └── globals.css                      # Globalni stilovi
│
├── components/                          # Sve React komponente
│   │
│   ├── sections/                        # 🎯 Sekcije stranica (novo!)
│   │   ├── HeroSection.tsx             # Hero sa pozivom na akciju
│   │   ├── AboutSection.tsx            # O nama - info o orkestru
│   │   ├── ServiceCard.tsx             # Reusable kartica usluge
│   │   ├── ServicesSection.tsx         # Sve usluge (svadbe, slave...)
│   │   ├── GallerySection.tsx          # Galerija slika
│   │   ├── CitiesSection.tsx           # Gradovi koje pokrivamo
│   │   ├── WhyChooseUs.tsx            # Prednosti orkestra
│   │   ├── FAQSection.tsx             # Česta pitanja
│   │   ├── CTASection.tsx             # Poziv na akciju
│   │   └── AdditionalInfo.tsx         # SEO optimizovan tekst
│   │
│   ├── ui/                              # shadcn/ui komponente
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   └── ... (ostale UI komponente)
│   │
│   ├── Header.tsx                       # Navigacija
│   ├── Footer.tsx                       # Footer
│   ├── ButtonToTop.tsx                  # Scroll to top dugme
│   └── ContactForm.tsx                  # Kontakt forma
│
├── public/
│   └── images/                          # Slike orkestra
│       ├── IMG-94418cec...V.jpg        # Hero slika
│       └── ... (ostale slike)
│
├── KAKO_DA_CLAUDE_PRAVI_KOMPONENTE.md  # 📚 Vodič za dalje
└── STRUKTURA_PROJEKTA.md                # 📝 Ovaj fajl

```

---

## 🎯 Šta je promenjeno?

### BILO: `app/page.tsx` - **774 linije** 😱

```tsx
export default function Home() {
  return (
    <main>
      {/* 774 linije HTML/JSX koda... */}
      {/* Hero section - 50 linija */}
      {/* About section - 80 linija */}
      {/* Services - 200 linija */}
      {/* ... i tako dalje ... */}
    </main>
  );
}
```

### SADA: `app/page.tsx` - **25 linija** ✨

```tsx
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
// ... ostali importi ...

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <CitiesSection />
      <WhyChooseUs />
      <FAQSection />
      <CTASection />
      <AdditionalInfo />
    </main>
  );
}
```

---

## 📊 Breakdown komponenti

### 1. **HeroSection.tsx** (~55 linija)
- Hero slika sa overlay-om
- Glavni naslov i podnaslov
- CTA dugmad (Pozovi, Usluge)
- Poruka o najpovoljnijim cenama

### 2. **AboutSection.tsx** (~60 linija)
- Slika orkestra
- Opis orkestra i usluga
- 4 key points (iskustvo, proslave, kvalitet, repertoar)

### 3. **ServiceCard.tsx** (~35 linija) - REUSABLE! 🔄
- Props: `image`, `alt`, `title`, `description`, `features`
- Kartica sa slikom i listom prednosti
- Može se koristiti bilo gde u aplikaciji

### 4. **ServicesSection.tsx** (~145 linija)
- Array sa 6 različitih usluga
- Mapira preko `services` i renderuje `ServiceCard`
- Lako dodavanje novih usluga - samo dodaj u array!

### 5. **GallerySection.tsx** (~40 linija)
- Array sa imenima slika
- Grid galerija sa hover efektom

### 6. **CitiesSection.tsx** (~90 linija)
- Array sa gradovima
- Kartice sa lokacijama
- Highlight za "Cela Srbija" karticu

### 7. **WhyChooseUs.tsx** (~70 linija)
- 4 razloga zašto odabrati orkestar
- Ikonice i tekst
- Highlight za cene

### 8. **FAQSection.tsx** (~70 linija)
- Array sa FAQ pitanjima i odgovorima
- Accordion UI komponenta
- HTML u odgovorima za bold tekst

### 9. **CTASection.tsx** (~45 linija)
- Poziv na akciju
- Telefonski broj i link ka kontaktu
- Istaknuta poruka o cenama

### 10. **AdditionalInfo.tsx** (~130 linija)
- SEO optimizovan tekst
- Dodatne informacije za Google
- Highlight sekcije za ključne teme

---

## 🎨 Principi dizajna

### 1. **Separation of Concerns**
- Svaka komponenta ima **JEDNU** odgovornost
- `ServiceCard` = prikazuje jednu uslugu
- `ServicesSection` = organizuje sve usluge

### 2. **Reusability**
- `ServiceCard` se može koristiti i na drugim stranicama
- Komponente su nezavisne - mogu se prebaciti bilo gde

### 3. **Maintainability**
- Želiš promeniti Hero? Promeni samo `HeroSection.tsx`
- Bug u FAQ? Otvori samo `FAQSection.tsx`

### 4. **Scalability**
- Dodavanje nove sekcije = kreiraj novu komponentu + dodaj u `page.tsx`
- Lako dodavanje novih stranica sa istim komponentama

---

## 🚀 Kako dodati novu sekciju?

### Primer: Dodavanje "Testimonials" sekcije

1. **Kreiraj komponentu:**
```bash
components/sections/TestimonialsSection.tsx
```

2. **Napiši kod:**
```tsx
const testimonials = [
  { name: "Marko", text: "Odličan orkestar!" },
  // ... više testimonial-a
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4">
      {testimonials.map(t => <TestimonialCard {...t} />)}
    </section>
  );
}
```

3. **Import u page.tsx:**
```tsx
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main>
      {/* ... ostale sekcije ... */}
      <TestimonialsSection />  {/* Dodaj ovde */}
    </main>
  );
}
```

**GOTOVO!** ✅

---

## 📈 Benefiti nove strukture

| Aspekt | Bilo | Sada |
|--------|------|------|
| **Broj linija u page.tsx** | 774 | 25 |
| **Vreme navigacije** | ❌ Scroll forever | ✅ Direktno na komponentu |
| **Vreme promene** | ❌ 5-10 min (tražiš kod) | ✅ 30 sec (otvoriš komponentu) |
| **Reusability** | ❌ 0% | ✅ 100% |
| **Testability** | ❌ Teško | ✅ Lako |
| **Collaboration** | ❌ Git conflicts | ✅ Bez konflikata |

---

## 📚 Dokumenti za učenje

1. **KAKO_DA_CLAUDE_PRAVI_KOMPONENTE.md**
   - Saveti kako me navesti da pravim komponente
   - Best practices
   - Primeri promptova

2. **STRUKTURA_PROJEKTA.md** (ovaj fajl)
   - Pregled organizacije
   - Šta je gde
   - Kako dodati novo

---

## 🎓 Next Steps - Sledeći koraci

### Ideje za unapređenje:

1. **Dodaj animacije**
   - Framer Motion za smooth animacije
   - Scroll reveal efekti

2. **Testimonials sekcija**
   - Dodaj recenzije klijenata
   - Carousel sa slikama

3. **Blog sistem**
   - Dodaj blog sa člancima
   - SEO boost sa sadržajem

4. **Admin panel**
   - CMS za upravljanje sadržajem
   - Dodavanje novih usluga bez koda

5. **Performance optimizacije**
   - Lazy loading slika
   - Code splitting

---

**Sve je spremno za lakši development! 🚀**

Kreirao: Claude Code
Datum: 2025-10-18
