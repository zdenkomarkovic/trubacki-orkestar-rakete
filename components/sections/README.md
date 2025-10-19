# 📦 Components/Sections

Ovaj folder sadrži sve **sekcije glavne stranice** podeljene u logičke komponente.

## 🎯 Filozofija

> "Jedna sekcija = Jedna komponenta"

Svaka vizuelna sekcija glavne stranice je **nezavisna komponenta** koja:
- ✅ Ima jednu jasnu odgovornost
- ✅ Može se lako izmeniti bez uticaja na ostale
- ✅ Može se koristiti na drugim stranicama (reusable)
- ✅ Lako se testira

---

## 📋 Lista Komponenti

| Komponenta | Linija | Reusable | Opis |
|------------|--------|----------|------|
| `HeroSection.tsx` | 55 | ❌ | Hero sekcija sa glavnom slikom i CTA |
| `AboutSection.tsx` | 60 | ✅ | O nama - može se koristiti i na /o-nama |
| `ServiceCard.tsx` | 35 | ✅✅✅ | **Univerzalna kartica usluge** |
| `ServicesSection.tsx` | 145 | ✅ | Prikaz svih usluga |
| `GallerySection.tsx` | 40 | ✅ | Galerija - može se koristiti bilo gde |
| `CitiesSection.tsx` | 90 | ✅ | Gradovi - može za lokacije stranicu |
| `WhyChooseUs.tsx` | 70 | ✅ | Prednosti - može se koristiti u marketing |
| `FAQSection.tsx` | 70 | ✅ | FAQ - može na support stranici |
| `CTASection.tsx` | 45 | ✅✅ | **Poziv na akciju - koristi svuda!** |
| `AdditionalInfo.tsx` | 130 | ❌ | SEO tekst - specifičan za homepage |

---

## 🔥 Najvažnije komponente

### 1. `ServiceCard.tsx` - **⭐ SUPER REUSABLE**

Univerzalna kartica koja prikazuje jednu uslugu.

**Props:**
```typescript
interface ServiceCardProps {
  image: string;        // Path do slike
  alt: string;          // Alt text za SEO
  title: string;        // Naslov usluge
  description: string;  // Opis
  features: string[];   // Lista prednosti
}
```

**Primeri upotrebe:**
```tsx
// Na glavnoj stranici
<ServiceCard
  image="/images/svadba.jpg"
  alt="Trubaci za svadbu"
  title="Trubaci za Svadbu"
  description="Ulepšajte najvažniji dan..."
  features={["✓ Docek mladenaca", "✓ Igranka"]}
/>

// Na stranici /usluge
<ServiceCard {...uslugeData} />

// U blogu
<ServiceCard {...blogUsluga} />
```

---

### 2. `CTASection.tsx` - **⭐ KORISTI ČESTO**

Call-to-action sekcija sa pozivom na akciju.

**Gde koristiti:**
- Na kraju svake stranice
- Pre kontakt forme
- Posle testimonials
- U popup-u za promociju

**Primer:**
```tsx
import CTASection from "@/components/sections/CTASection";

// Na bilo kojoj stranici
export default function UslugePage() {
  return (
    <>
      {/* Sadržaj stranice */}
      <CTASection />  {/* Poziv na akciju */}
    </>
  );
}
```

---

## 🎨 Kako kreirati novu sekciju?

### Template za novu komponentu:

```tsx
// components/sections/NovaSekcija.tsx

import { Card } from "@/components/ui/card";

// Ako treba, kreiraj interface za Props
interface NovaSekcijaProps {
  title?: string;
  data?: any[];
}

// Podatke stavi izvan komponente
const sampleData = [
  { id: 1, name: "Primer 1" },
  { id: 2, name: "Primer 2" },
];

export default function NovaSekcija({ title, data = sampleData }: NovaSekcijaProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12">{title || "Default Naslov"}</h2>

        {/* Tvoj sadržaj ovde */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.map(item => (
            <Card key={item.id}>
              {item.name}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Koraci:

1. **Kreiraj fajl** u `components/sections/NovaSekcija.tsx`
2. **Kopiraj template** odozgo
3. **Prilagodi** sadržaj svojoj sekciji
4. **Import** u `app/page.tsx`:
   ```tsx
   import NovaSekcija from "@/components/sections/NovaSekcija";
   ```
5. **Dodaj** u return:
   ```tsx
   <NovaSekcija />
   ```

---

## 📐 Best Practices

### ✅ DO:

```tsx
// ✅ Izdvoji podatke van komponente
const services = [{ ... }, { ... }];

export default function Services() {
  return <div>{services.map(...)}</div>
}
```

```tsx
// ✅ Koristi TypeScript interface za Props
interface MyProps {
  title: string;
  data: Service[];
}
```

```tsx
// ✅ Koristi Tailwind classes direktno
<section className="py-16 px-4 bg-muted">
```

---

### ❌ DON'T:

```tsx
// ❌ Nemoj hardcode-ovati podatke unutar JSX-a
<section>
  <div>Naslov 1</div>
  <div>Naslov 2</div>
  <div>Naslov 3</div>
  {/* Ovako ne! */}
</section>
```

```tsx
// ❌ Nemoj praviti komponente preko 200 linija
export default function MegaComponent() {
  // 500 linija koda... ❌
}
```

```tsx
// ❌ Nemoj CSS module fajlove (koristimo Tailwind)
import styles from './styles.module.css'; // ❌
```

---

## 🎓 Data Flow

### Kako podaci teku kroz komponente:

```
ServicesSection.tsx
    ↓ (definiše podatke)
const services = [...];
    ↓ (mapira kroz podatke)
services.map(service =>
    ↓ (prosleđuje props)
  <ServiceCard {...service} />
)
    ↓ (prima props)
ServiceCard.tsx
    ↓ (renderuje UI)
<Card>...</Card>
```

---

## 🧪 Testiranje (buduće)

Kada budeš dodavao testove, testiranje je jednostavno:

```tsx
// ServiceCard.test.tsx
import { render } from '@testing-library/react';
import ServiceCard from './ServiceCard';

test('renders service title', () => {
  const { getByText } = render(
    <ServiceCard
      image="/test.jpg"
      alt="Test"
      title="Test Usluga"
      description="Opis"
      features={["Feature 1"]}
    />
  );

  expect(getByText('Test Usluga')).toBeInTheDocument();
});
```

**Jednostavno jer je komponenta nezavisna!** ✨

---

## 🔄 Lifecycle

### Kada dodaješ novu funkcionalnost:

1. **Pitaj sebe:**
   - Da li je ovo nova sekcija? → Kreiraj novu komponentu
   - Da li je ovo deo postojeće sekcije? → Izmeni postojeću
   - Da li će ovo biti korišćeno više mesta? → Kreiraj reusable komponentu

2. **Drži se pravila:**
   - Jedna komponenta = Jedna odgovornost
   - Max 200 linija po komponenti
   - Izdvoj podatke u array/objekte
   - Props za dinamičnost

3. **Pitaj Claude:**
   > "Claude, da li ova komponenta može biti bolje organizovana?"

---

## 📊 Statistika

```
📁 components/sections/
├── 10 komponenti
├── ~740 linija ukupno
├── Prosek: ~74 linije po komponenti
├── Najmanja: ServiceCard (35 linija)
└── Najveća: ServicesSection (145 linija)
```

**Cilj:** Nijedna komponenta preko 200 linija! ✅

---

## 🚀 Kako koristiti ovaj folder

### Scenario 1: Dodaješ novu stranicu

```tsx
// app/usluge/page.tsx
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";

export default function UslugePage() {
  return (
    <main>
      <ServicesSection />  {/* Reuse! */}
      <CTASection />       {/* Reuse! */}
    </main>
  );
}
```

### Scenario 2: Menjaš postojeću sekciju

```bash
# Samo otvori komponentu i izmeni
code components/sections/HeroSection.tsx

# Izmeni
# Sačuvaj
# Ready! ✨
```

### Scenario 3: Kreiraš novu sekciju

```bash
# 1. Kreiraj fajl
touch components/sections/TestimonialsSection.tsx

# 2. Kopiraj template odozgo
# 3. Prilagodi
# 4. Import u page.tsx
# 5. Done! ✅
```

---

**Happy coding! 🎉**

Kreirano: 2025-10-18
Autor: Claude Code
