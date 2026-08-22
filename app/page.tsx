"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Waves, Dumbbell, Users, Leaf, ShieldCheck, Sparkles,
  Home, Bath, Maximize2, MapPin, ChevronDown, Menu,
} from "lucide-react";

const BASE = "https://lromanarealestate.com";

/* ─── NAVBAR ─────────────────────────────────────────────────────────────────
   header:  "w-full fixed top-0 z-50 border-b"
   inner:   "mx-auto px-6 sm:px-10 md:px-16 lg:px-24"
   flex:    "flex items-center justify-between py-6"
   logo:    "text-lg sm:text-xl font-semibold tracking-wide"
   logo div: "relative h-12 w-[160px]" → "absolute inset-0"
   nav:     "hidden md:flex items-center gap-8 text-md"
   link:    "text-gray-700 hover:text-gray-900 transition-colors duration-300"
   cta:     "hidden md:inline-block rounded-full bg-[#1e63b5] px-6 py-4 text-sm font-medium text-white hover:bg-blue-700"
────────────────────────────────────────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full fixed top-0 z-50 border-b bg-white/90 backdrop-blur-sm">
      <div className="mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="text-lg sm:text-xl font-semibold tracking-wide">
            <div className="relative h-28 w-[360px]">
              <div className="absolute inset-0">
                <Image
                  src="/lromana-logo.png"
                  alt="L'Romana Real Estate"
                  fill
                  className="h-12 w-auto object-contain"
                  priority
                />
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-md">
            <button className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900 focus:outline-none transition-colors duration-300">
              Proyectos <ChevronDown size={14} />
            </button>
            <Link href="https://propiedades.lromanarealestate.com/" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">Propiedades</Link>
            <Link href="/agentes" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">Agentes</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">Sobre Nosotros</Link>
            <Link href="https://propiedades.lromanarealestate.com/contactos" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">Contacto</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="https://propiedades.lromanarealestate.com/"
              className="hidden md:inline-block rounded-full bg-[#1e63b5] px-6 py-4 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Empezar Búsqueda
            </Link>
            <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)} aria-label="Abrir menú">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
          <button className="text-left">Proyectos</button>
          <Link href="https://propiedades.lromanarealestate.com/">Propiedades</Link>
          <Link href="/agentes">Agentes</Link>
          <Link href="/about">Sobre Nosotros</Link>
          <Link href="https://propiedades.lromanarealestate.com/contactos">Contacto</Link>
        </div>
      )}
    </header>
  );
}

/* ─── HERO ───────────────────────────────────────────────────────────────────
   section: "bg-gray-50 flex flex-col items-center justify-center px-4 py-16"
   dot:     "w-3 h-3 bg-[#45c7cd] rounded-full"
   h1:      "text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-12 leading-tight"
   btns:    "flex flex-col sm:flex-row gap-4 justify-center items-center"
────────────────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="mb-16">
        <div className="flex items-center gap-2 justify-center mb-6">
          <div className="w-3 h-3 bg-[#45c7cd] rounded-full" />
          <span className="text-gray-800 font-medium text-lg">Costamar</span>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-12 leading-tight">
            ¡Descubre el hogar perfecto en<br />Residencial Costa Mar!
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/costamar#modelos"
              className="bg-[#45c7cd] text-white font-semibold px-8 py-4 rounded-full hover:bg-teal-500 transition-colors text-sm"
            >
              Explorar Modelos
            </Link>
            <Link
              href="/costamar#contact"
              className="border border-gray-400 text-gray-700 font-medium px-8 py-4 rounded-full hover:border-gray-700 bg-white transition-colors text-sm"
            >
              Solicitar Más Información
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TEXT MARQUEE ───────────────────────────────────────────────────────────
   section: "bg-[#e1f7f8] py-20 px-4"
   wrapper: "max-w-4xl mx-auto text-center"
   row 1:   "flex items-center justify-center flex-wrap gap-2 mb-4"
   row 2:   "flex items-center justify-center flex-wrap gap-2"
   images:  "relative w-16 h-16 md:w-30 md:h-20 rounded-full overflow-hidden shadow-lg"
   text:    "text-4xl md:text-5xl font-light text-gray-800"
   circle:  "w-12 h-12 md:w-14 md:h-14 bg-[#45c7cd] rounded-full flex items-center justify-center"
────────────────────────────────────────────────────────────────────────────── */
function TextMarquee() {
  return (
    <section className="bg-[#e1f7f8] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center flex-wrap gap-2 mb-4">
          <span className="text-4xl md:text-5xl font-light text-gray-800">Un</span>
          <div className="relative w-16 h-16 md:w-30 md:h-20 rounded-full overflow-hidden shadow-lg flex-shrink-0">
            <Image src={`${BASE}/costamar/pastillacostamar1.avif`} alt="Hotel exterior" fill className="object-cover" />
          </div>
          <span className="text-4xl md:text-5xl font-light text-gray-800">oasis de lujo y comodidad</span>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-2">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#45c7cd] rounded-full flex items-center justify-center flex-shrink-0">
            <Home size={20} className="text-white" />
          </div>
          <span className="text-4xl md:text-5xl font-light text-gray-800">En el corazón</span>
          <div className="relative w-16 h-16 md:w-30 md:h-20 rounded-full overflow-hidden shadow-lg flex-shrink-0">
            <Image src={`${BASE}/costamar/pastillacostamar2.avif`} alt="Hotel interior" fill className="object-cover" />
          </div>
          <span className="text-4xl md:text-5xl font-light text-gray-800">de la romana</span>
        </div>
      </div>
    </section>
  );
}

/* ─── COUNTER HOOK ───────────────────────────────────────────────────────── */
function useCounter(target: number, duration = 2000, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setValue(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return value;
}

/* ─── BIENVENIDOS ────────────────────────────────────────────────────────────
   section: "py-16 md:py-20 lg:py-30 bg-white"
   wrapper: "mx-auto px-6 sm:px-10 md:px-16 lg:px-24"
   heading: "text-center mb-16"
   h2:      "text-4xl md:text-5xl font-semibold text-gray-800 leading-tight"
   grid:    "grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
   left:    "space-y-12"
   c1 num:  "text-6xl md:text-7xl mb-4" fontStretch 105%
   c2 num:  "text-5xl md:text-6xl mb-4" fontStretch 105%
   desc:    "text-gray-600 text-lg leading-relaxed max-w-md"
   right:   "space-y-6"
   p last:  "text-gray-600 text-lg leading-relaxed mb-8"
   btn wrap:"pt-4"
────────────────────────────────────────────────────────────────────────────── */
function Bienvenidos() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const apts = useCounter(60, 1800, active);
  const reserva = useCounter(1000, 2200, active);

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-30 bg-white">
      <div className="mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
            Bienvenidos a<br />Residencial Costa Mar
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-12">
            <div>
              <div className="text-6xl md:text-7xl mb-4" style={{ fontStretch: "105%" }}>
                <span>{apts}</span>
                <span className="text-[#45c7cd]">+</span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Apartamentos cuidadosamente diseñados para ofrecer lujo, confort y funcionalidad
              </p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl mb-4" style={{ fontStretch: "105%" }}>
                <span className="text-[#45c7cd]">US $</span>
                <span className="text-gray-800">{reserva.toLocaleString()}</span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Para reserva tu apartamento hoy asegura tu lugar en el exclusivo Residencial Costa Mar.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              En el corazón de La Romana, Residencial Costa Mar se presenta como un proyecto diseñado
              para quienes buscan un estilo de vida único. Con más de 60 apartamentos que van desde
              70 m² hasta penthouses de 225 m², cada unidad combina arquitectura moderna, acabados de
              lujo y una distribución funcional que se adapta a diferentes necesidades.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              El proyecto ofrece amenidades exclusivas como piscina privada, gimnasio equipado,
              jardines tropicales y seguridad 24/7, además de una ubicación estratégica cerca de las
              mejores playas, campos de golf y atracciones culturales de la región.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Residencial Costa Mar no es solo un lugar para vivir, es un espacio donde la comodidad
              y la sofisticación se convierten en parte de tu día a día.
            </p>
            <div className="pt-4">
              <Link
                href="/costamar#modelos"
                className="inline-block bg-[#45c7cd] text-white font-semibold px-8 py-4 rounded-full hover:bg-teal-500 transition-colors text-sm"
              >
                Saber Más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── ACCESO PRIVILEGIADO ────────────────────────────────────────────────────
   section: "py-16 md:py-20 lg:py-30 bg-white"
   wrapper: "mx-auto px-6 sm:px-10 md:px-16 lg:px-24"
   flex:    "flex flex-col lg:flex-row items-stretch gap-12 min-h-[500px]"
   img:     flex-1 > "relative h-full min-h-[400px] lg:min-h-full" > img."w-full h-full object-cover rounded-lg shadow-lg"
   txt:     "flex-1 flex h-full flex-col justify-center"
   h2:      "text-3xl lg:text-4xl font-medium text-gray-900 mb-6 leading-tight"
   p:       "text-gray-600 text-lg leading-relaxed"
────────────────────────────────────────────────────────────────────────────── */
function AccesoPrivilegiado() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[560px]">
        <div className="relative w-full lg:w-1/2 min-h-[420px] lg:min-h-full">
          <Image
            src={`${BASE}/costamar/accesocostamar.avif`}
            alt="Tropical resort with directional signs showing various destinations in La Romana"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-12 md:py-16 px-6 sm:px-10 md:px-12 lg:px-16">
          <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-6 leading-tight">
            Acceso Privilegiado a lo Mejor de La Romana
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Vivir en Costa Mar significa estar estratégicamente ubicado cerca de las mejores
            experiencias que ofrece la región. A tan solo{" "}
            <strong>15 minutos del Aeropuerto Internacional de La Romana</strong>, con acceso
            inmediato a <strong>Casa de Campo, Altos de Chavón y Bayahibe</strong>, los residentes
            pueden disfrutar de una amplia oferta de actividades recreativas, culturales y
            gastronómicas. Desde exclusivos campos de golf y marinas privadas hasta restaurantes de
            primer nivel y una vibrante vida nocturna, este destino tiene algo para todos.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── ESTILO DE VIDA ─────────────────────────────────────────────────────────
   section: "py-16 md:py-20 lg:py-30"
   flex:    "flex flex-col lg:flex-row items-stretch min-h-[500px]"
   txt first, img second
   txt:     flex-1 flex flex-col justify-center + padding right on lg
   h2:      "text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-tight"
   p:       "text-gray-600 text-lg leading-relaxed"
   img:     flex-1 > "relative h-64 lg:h-full min-h-[400px] lg:min-h-[500px] shadow-lg rounded-lg overflow-hidden"
────────────────────────────────────────────────────────────────────────────── */
function EstiloDeVida() {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[560px]">
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-12 md:py-16 px-6 sm:px-10 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-tight">
            Un Estilo de Vida<br />Frente al Mar
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Más que una ubicación, Costa Mar es un estilo de vida donde el lujo y la tranquilidad
            convergen en un solo lugar. Con opciones para disfrutar de deportes acuáticos como
            snorkel, paddleboarding y navegación, así como espacios diseñados para el bienestar y la
            relajación, este enclave ofrece el escenario perfecto para quienes buscan calidad de vida
            sin renunciar a la exclusividad. Aquí, cada amanecer junto al mar es un recordatorio de
            que vivir en Costa Mar es un privilegio hecho realidad.
          </p>
        </div>
        <div className="relative w-full lg:w-1/2 min-h-[420px] lg:min-h-full">
          <Image
            src={`${BASE}/costamar/estilocostamar.avif`}
            alt="Vista del mar con muelle y faro en Costa Mar"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── PROPERTIES ─────────────────────────────────────────────────────────────
   id="modelos" — section: "py-16 md:py-20 lg:py-30 bg-white"
   wrapper: "mx-auto px-6 sm:px-10 md:px-16 lg:px-24"
   badge:   "inline-block bg-[#d2eff2] px-4 py-2 rounded-full text-sm font-medium mb-6"
   h2:      "text-4xl md:text-5xl text-gray-900 leading-tight max-w-4xl mx-auto" fontStretch 110%
   grid:    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
   card:    "bg-white rounded-xl p-4 shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
   img:     "w-full rounded-xl h-64 object-cover"
   badge:   "absolute top-4 right-4" "En venta"
   body:    "py-6"
   price:   "flex items-center gap-2 mb-2" + badge "bg-[#45c7cd] px-3 py-1 rounded-full font-bold"
   h3:      "text-xl font-medium text-gray-900 mb-4"
   stats:   "flex items-center gap-4 text-gray-600 text-sm"
────────────────────────────────────────────────────────────────────────────── */
interface PropertyCardProps {
  image: string;
  name: string;
  beds: number;
  baths: number;
  area: number;
  location: string;
  className?: string;
}

function PropertyCard({ image, name, beds, baths, area, location, className = "" }: PropertyCardProps) {
  return (
    <div className={`bg-white rounded-xl p-4 shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <div className="relative">
        <Image src={image} alt={name} width={420} height={256} className="w-full rounded-xl h-64 object-cover" />
        <div className="absolute top-4 right-4">
          <span className="bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">En venta</span>
        </div>
      </div>
      <div className="py-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-[#45c7cd] text-white px-3 py-1 rounded-full font-bold text-sm">USD $</span>
          <span className="font-bold text-gray-900">1,000</span>
          <span className="text-gray-600 text-sm">Para Reservar</span>
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-4">{name}</h3>
        <div className="flex items-center gap-4 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <Home size={14} fill="currentColor" /><span>{beds}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={14} /><span>{baths}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize2 size={14} /><span>{area} M²</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} /><span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const properties: PropertyCardProps[] = [
  { image: `${BASE}/costamar/propiedad1.avif`, name: "Costa Mar Apartamento A1.2",     beds: 3, baths: 2, area: 134, location: "La Romana" },
  { image: `${BASE}/costamar/propiedad2.avif`, name: "Costa Mar Apartamento Penthouse", beds: 3, baths: 3, area: 225, location: "La Romana" },
  { image: `${BASE}/costamar/propiedad3.avif`, name: "Costa Mar Apartamento A2.1",     beds: 3, baths: 2, area: 95,  location: "La Romana" },
  { image: `${BASE}/costamar/propiedad3.avif`, name: "Costa Mar Apartamento Premium",  beds: 2, baths: 2, area: 110, location: "La Romana" },
];

function Properties() {
  return (
    <section id="modelos" className="py-16 md:py-20 lg:py-30 bg-white">
      <div className="mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#d2eff2] px-4 py-2 rounded-full text-sm font-medium mb-6">
            Propiedades
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight max-w-4xl mx-auto text-center" style={{ fontStretch: "110%" }}>
            Explora las Opciones de Propiedades Exclusivos<br />
            Diseñadas para Cada Estilo de Vida
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p, i) => (
            <PropertyCard key={p.name} {...p} className={i === properties.length - 1 ? "lg:col-start-2" : ""} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── AMENIDADES ─────────────────────────────────────────────────────────────
   section: "py-16 md:py-20 lg:py-30 bg-white"
   wrapper: "mx-auto px-6 sm:px-10 md:px-16 lg:px-24"
   heading: "text-center mb-16"
   h2:      "text-4xl md:text-5xl font-semibold text-gray-900 leading-tight"
   grid:    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
   item:    "text-center"
   icon:    "flex justify-center mb-6"
   h3:      "text-3xl font-medium text-gray-900 mb-3"
   p:       "text-gray-600 font-medium leading-relaxed"
────────────────────────────────────────────────────────────────────────────── */
const amenidades = [
  { icon: <Waves size={40} />,       name: "Piscina Exclusiva",   desc: "Espacios para relajarte y disfrutar." },
  { icon: <Dumbbell size={40} />,    name: "Gimnasio Equipado",   desc: "Mantén tu estilo de vida activo." },
  { icon: <Users size={40} />,       name: "Club Social",         desc: "Un lugar para compartir y conectar." },
  { icon: <Leaf size={40} />,        name: "Jardines Tropicales", desc: "Rodeado de naturaleza y tranquilidad." },
  { icon: <ShieldCheck size={40} />, name: "Seguridad 24/7",      desc: "Protección para ti y tu familia." },
  { icon: <Sparkles size={40} />,    name: "Salón de Eventos",    desc: "Celebra momentos especiales con estilo." },
];

function Amenidades() {
  return (
    <section className="py-16 md:py-20 lg:py-30 bg-white">
      <div className="mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Amenidades Exclusivas para<br />Tu Estilo de Vida
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {amenidades.map((a) => (
            <div key={a.name} className="text-center">
              <div className="flex justify-center mb-6 text-[#45c7cd]">{a.icon}</div>
              <h3 className="text-3xl font-medium text-gray-900 mb-3">{a.name}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── GALLERY ────────────────────────────────────────────────────────────────
   section: "min-h-screen bg-[#fafafa] py-16 md:py-20 lg:py-30"
   wrapper: "mx-auto px-6 sm:px-10 md:px-16 lg:px-24"
   grid:    "grid grid-rows-2 gap-4 h-[calc(100vh-4rem)]"
   img 1:   "relative rounded-2xl shadow-lg overflow-hidden"
   bottom:  "grid grid-cols-1 md:grid-cols-2 gap-4"
   img 2,3: "relative shadow-lg rounded-2xl overflow-hidden"
────────────────────────────────────────────────────────────────────────────── */
function Gallery() {
  return (
    <section className="min-h-screen bg-[#fafafa] py-16 md:py-20">
      <div className="px-4 md:px-6">
        <div className="grid grid-rows-2 gap-4 h-[calc(100vh-4rem)]">
          <div className="relative rounded-2xl shadow-lg overflow-hidden">
            <Image
              src={`${BASE}/costamar/costamarcollage1.avif`}
              alt="Vista aérea del complejo residencial Costa Mar"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative shadow-lg rounded-2xl overflow-hidden">
              <Image
                src={`${BASE}/costamar/costamarcollage2.avif`}
                alt="Edificios modernos del complejo Costa Mar"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative shadow-lg rounded-2xl overflow-hidden">
              <Image
                src={`${BASE}/costamar/costamarcollage3.avif`}
                alt="Interior de lujo de apartamento Costa Mar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICIOS ──────────────────────────────────────────────────────────────
   section: "py-16 px-4 bg-gray-50"
   wrapper: "max-w-7xl mx-auto"
   header:  "text-center mb-16"
   badge:   "inline-block bg-[#d2eff2] px-4 py-2 rounded-full text-sm font-medium mb-6"
   h2:      "text-4xl md:text-5xl font-medium text-gray-900 mb-6"
   p:       "text-lg font-semibold text-gray-600 max-w-3xl mx-auto"
   rows:    "space-y-16"
   row odd:  "flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
   row even: "flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16"
   txt:     "flex-1 text-center lg:text-left"
   numwrap: "flex items-center justify-center lg:justify-start gap-4 mb-6"
   num:     "w-12 h-12 bg-[#a9e6e8] rounded-xl flex items-center justify-center font-medium text-lg"
   h3:      "text-3xl md:text-4xl font-bold text-gray-900 mb-4"
   p dist:  "text-lg text-gray-600"
   img div: "flex-1" > "relative w-full h-80 md:h-96 shadow-lg rounded-2xl overflow-hidden"
────────────────────────────────────────────────────────────────────────────── */
const destinos = [
  { num: "01", name: "Aeropuerto Internacional de La Romana", dist: "15 minutos de distancia", img: `${BASE}/costamar/costamarservicio1.avif`, reverse: false },
  { num: "02", name: "Isla Catalina",                         dist: "20 minutos de distancia", img: `${BASE}/costamar/costamarservicio2.avif`, reverse: true },
  { num: "03", name: "Altos de Chavón",                       dist: "25 minutos de distancia", img: `${BASE}/costamar/costamarservicio3.avif`, reverse: false },
  { num: "04", name: "Playas de Bayahíbe",                    dist: "30 minutos de distancia", img: `${BASE}/costamar/costamarservicio4.avif`, reverse: true },
  { num: "05", name: "Centro Comercial Multiplaza",           dist: "10 minutos de distancia", img: `${BASE}/costamar/costamarservicio5.avif`, reverse: false },
  { num: "06", name: "Campo de Golf La Estancia",             dist: "15 minutos de distancia", img: `${BASE}/costamar/costamarservicio6.avif`, reverse: true },
];

function Servicios() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="text-center mb-16 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="inline-block bg-[#d2eff2] px-4 py-2 rounded-full text-sm font-medium mb-6">
          Servicios
        </div>
        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
          Conecta con los Mejores Destinos<br />Cercanos
        </h2>
        <p className="text-lg font-semibold text-gray-600 max-w-3xl mx-auto">
          Descubre la conveniencia de vivir en Residencial Costa Mar, con acceso rápido a las
          principales atracciones y servicios de La Romana.
        </p>
      </div>
      <div>
        {destinos.map((d) => (
          <div
            key={d.num}
            className={`flex flex-col ${d.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch min-h-[400px] mb-8 lg:mb-0`}
          >
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left py-12 lg:py-16 px-6 sm:px-10 md:px-16 lg:px-20">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#a9e6e8] rounded-xl flex items-center justify-center font-medium text-lg">
                  {d.num}
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{d.name}</h3>
              <p className="text-lg text-gray-600">{d.dist}</p>
            </div>
            <div className="relative w-full lg:w-1/2 min-h-[320px] md:min-h-[420px] rounded-2xl lg:rounded-none overflow-hidden mx-4 lg:mx-0 shadow-lg lg:shadow-none">
              <Image src={d.img} alt={d.name} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── CONTACTO ───────────────────────────────────────────────────────────────
   id="contact" — section: "bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
   wrapper: "max-w-7xl mx-auto"
   h2:      "text-3xl md:text-4xl font-semibold text-gray-900 mb-8 sm:mb-10 lg:mb-12 leading-tight"
   flex:    "flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10 min-h-[420px] sm:min-h-[480px] lg:min-h-[600px]"
   left:    "w-full lg:w-1/2 flex flex-col justify-center"
   inner:   "max-w-2xl"
   p:       "text-gray-600 mb-6 sm:mb-8 leading-relaxed"
   info:    "mb-6 sm:mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base"
   form:    "bg-gray-50 p-5 sm:p-6 md:p-8 rounded-xl shadow-sm"
   fgrid:   "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"
   input:   "w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
   btn:     "w-full bg-[#45c7cd] text-white font-semibold py-3 sm:py-4 px-6 rounded-full transition-colors duration-200 hover:bg-teal-600"
   right:   "w-full lg:w-1/2"
   imgwrap: "relative w-full h-56 sm:h-72 md:h-96 lg:h-full lg:min-h-[500px] shadow-lg rounded-xl overflow-hidden"
   img:     "absolute inset-0 w-full h-full object-cover"
────────────────────────────────────────────────────────────────────────────── */
function Contacto() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const inputClass = "w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-sm sm:text-base";

  return (
    <section id="contact" className="bg-white overflow-hidden">
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
          Agenda Tu Cita para Conocer Residencial Costa Mar
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-stretch min-h-[500px] lg:min-h-[640px]">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 pb-12 lg:pb-20">
          <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Queremos resolver todas tus dudas y ayudarte a encontrar la propiedad perfecta en
            Residencial Costa Mar. Agenda una cita con nuestro equipo y descubre todo lo que este
            exclusivo proyecto tiene para ofrecer.
          </p>
          <div className="mb-6 sm:mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="font-semibold text-gray-900 mr-1">Teléfono:</span>
              <span className="text-gray-600">+1 (484) 473-1113</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="font-semibold text-gray-900 mr-1">Correo Electrónico:</span>
              <span className="text-gray-600">info@lromanarealestate.com</span>
            </div>
            <div className="sm:col-span-2">
              <span className="font-semibold text-gray-900">Dirección:</span>
              <span className="text-gray-600 ml-1">Reparto Torres Calle 4ta #5, La Romana, República Dominicana.</span>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="bg-gray-50 p-5 sm:p-6 md:p-8 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre y Apellido</label>
                <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Mitchell" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+123 456 789 00" className={inputClass} />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="test@gmail.com" className={inputClass} />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Explain it in details..." rows={5} className={inputClass + " resize-none"} />
            </div>
            <button type="submit" className="w-full bg-[#45c7cd] text-white font-semibold py-3 sm:py-4 px-6 rounded-full transition-colors duration-200 hover:bg-teal-600">
              Enviar mi mensaje
            </button>
          </form>
        </div>
        <div className="relative w-full lg:w-1/2 min-h-[380px] lg:min-h-full">
          <Image
            src={`${BASE}/costamar/formulariocostamar.avif`}
            alt="Residencial Costa Mar - Modern apartment buildings with tropical landscaping"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────────────────────────
   class:   "bg-gray-950 py-16 w-full"
   inner:   "mx-auto px-6 sm:px-10 md:px-16 lg:px-24"
   grid:    "grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"
   h3:      "text-sm uppercase tracking-widest text-gray-50 mb-6"
   ul:      "space-y-3 text-gray-300"
   bottom:  "mt-12 border-t border-gray-800 pt-8"
   p:       "text-sm text-gray-400"
────────────────────────────────────────────────────────────────────────────── */
function Footer() {
  const cols = [
    {
      heading: "NAVEGACIÓN",
      links: [
        { label: "Inicio", href: "/" },
        { label: "Nosotros", href: "/about" },
        { label: "Propiedades", href: "https://propiedades.lromanarealestate.com/" },
        { label: "Contacto", href: "/contacto" },
        { label: "Agentes 360", href: "/agentes" },
        { label: "Política de Privacidad", href: "/politica-de-privacidad" },
        { label: "Términos y Condiciones", href: "/terminos-y-condiciones" },
      ],
    },
    {
      heading: "AGENTES 360",
      links: [
        { label: "Freisy Carolina", href: "/agentes" },
        { label: "Yuderkis Pilier", href: "/agentes" },
      ],
    },
    {
      heading: "PROYECTOS",
      links: [
        { label: "Costa Mar", href: "/costamar" },
        { label: "Stone Tower 3", href: "/stone-tower-3" },
        { label: "Frailejon Village", href: "/frailejonvillage" },
        { label: "Ver propiedades", href: "https://propiedades.lromanarealestate.com/" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-950 py-16 w-full">
      <div className="mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {cols.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm uppercase tracking-widest text-gray-50 mb-6">{col.heading}</h3>
              <ul className="space-y-3 text-gray-300">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-white transition-colors text-sm">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400">© 2025 L&apos; Romana Real Estate. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────────────────
   Videos: className="relative inset-0 w-full h-full object-cover" (no inline style)
           height 150px comes from video file's natural dimensions
────────────────────────────────────────────────────────────────────────────── */
export default function CostaMar() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />

        <video autoPlay loop muted playsInline
          className="relative inset-0 w-full h-full object-cover"
          style={{ height: "500px" }}>
          <source src={`${BASE}/costamar.mp4`} type="video/mp4" />
        </video>

        <TextMarquee />
        <Bienvenidos />
        <AccesoPrivilegiado />
        <EstiloDeVida />

        <video autoPlay loop muted playsInline
          className="relative inset-0 w-full h-full object-cover"
          style={{ height: "500px" }}>
          <source src={`${BASE}/costamarRender.mp4`} type="video/mp4" />
        </video>

        <Properties />
        <Amenidades />
        <Gallery />
        <Servicios />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
