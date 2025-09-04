
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaLaravel, FaVuejs, FaPhp, FaJsSquare, FaReact, FaGitlab, FaFigma } from 'react-icons/fa';
import { SiFilament, SiFlutter } from 'react-icons/si';

const ICONS: { [key: string]: React.FC<{size?: number; color?: string}> } = {
  laravel: (props) => <FaLaravel {...props} />,
  vue: (props) => <FaVuejs {...props} />,
  filament: (props) => <SiFilament {...props} />,
  php: (props) => <FaPhp {...props} />,
  javascript: (props) => <FaJsSquare {...props} />,
  "react-native": (props) => <FaReact {...props} />,
  gitlab: (props) => <FaGitlab {...props} />,
  figma: (props) => <FaFigma {...props} />,
  flutter: (props) => <SiFlutter {...props} />,
};

interface Technology {
  name: string;
  description: string;
  href: string;
  icon: keyof typeof ICONS;
  categories: string[];
}

const technologies: Technology[] = [
  {
    name: "Laravel",
    description: "Laravel, een toonaangevend PHP-framework, versnelt de ontwikkeling met tools zoals Eloquent ORM, Blade templating en ingebouwde beveiligingsfuncties. Het vormt een efficiënte en betrouwbare basis voor het bouwen van webapplicaties.",
    href: "/technologie/laravel",
    icon: "laravel",
    categories: ["Development", "CMS & Admin tools"]
  },
  {
    name: "Vue.js",
    description: "Vue.js, een innovatief JavaScript-framework, stelt je in staat om dynamische en interactieve webapplicaties te creëren. Het biedt niet alleen snelheid en flexibiliteit, maar ook een modulaire architectuur die geschikt is voor zowel eenvoudige als complexe projecten. De uitstekende documentatie en prestaties maken het extra aantrekkelijk.",
    href: "/technologie/vue-js",
    icon: "vue",
    categories: ["Development"]
  },
  {
    name: "Filament",
    description: "Filament is een krachtig open-source PHP-framework voor het bouwen van administratieve interfaces en dashboards. Het integreert gemakkelijk met Laravel en stelt ontwikkelaars in staat snel gebruiksvriendelijke backends te creëren.",
    href: "/technologie/filament",
    icon: "filament",
    categories: ["CMS & Admin tools", "Development"]
  },
  {
    name: "PHP",
    description: "PHP, oftewel Hypertext Preprocessor, dient als een krachtige scripttaal voor het maken van dynamische webpagina's en applicaties. Het stelt je in staat om robuuste en flexibele online oplossingen te ontwikkelen die specifiek afgestemd zijn op jouw behoeften.",
    href: "/technologie/php",
    icon: "php",
    categories: ["Development"]
  },
  {
    name: "JavaScript",
    description: "JavaScript vormt de kern van dynamische en interactieve webpagina’s. Deze taal maakt het mogelijk om animaties, formuliervalidaties en complexe interfaces te creëren, wat resulteert in functionele en visueel aantrekkelijke webapplicaties.",
    href: "/technologie/javascript",
    icon: "javascript",
    categories: ["Development"]
  },
  {
    name: "React Native",
    description: "React Native maakt het mogelijk om krachtige native apps voor iOS en Android te bouwen met JavaScript en React. Met een enkele codebase verkort je de ontwikkeltijd en verlaag je de kosten aanzienlijk. Ook dit framework is open-source, waardoor ontwikkelaars wereldwijd kunnen bijdragen aan verbetering van het framework.",
    href: "/technologie/react-native",
    icon: "react-native",
    categories: ["App", "Development"]
  },
  {
    name: "GitLab",
    description: "GitLab is een DevSecOps-platform dat de volledige levenscyclus van softwareontwikkeling ondersteunt, van planning en codebeheer tot continue integratie en levering (CI/CD), monitoring en beveiliging. Met GitLab kunnen teams hun ontwikkelprocessen stroomlijnen, de codekwaliteit waarborgen en veilige software leveren vanuit één centrale omgeving.",
    href: "/technologie/gitlab",
    icon: "gitlab",
    categories: ["Development"]
  },
  {
    name: "Figma",
    description: "Figma is een krachtig ontwerpplatform dat real-time samenwerking en interactieve ontwerpen mogelijk maakt. Het ondersteunt cloud-gebaseerde toegang, prototyping, en herbruikbare componenten, ideaal voor dynamische, visueel aantrekkelijke web- en app-ontwerpen.",
    href: "/technologie/figma",
    icon: "figma",
    categories: ["Design"]
  },
  {
    name: "Flutter",
    description: "Flutter, ontwikkeld door Google, biedt een krachtig open-source framework voor het bouwen van applicaties die direct op elk platform worden uitgevoerd. Met één codebase ontwikkel je snel visueel aantrekkelijke apps die uitstekend presteren op mobiel, web en desktop.",
    href: "/technologie/flutter",
    icon: "flutter",
    categories: ["App", "Development"]
  }
];

const categories = ["Overzicht", "App", "CMS & Admin tools", "Design", "Development"];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("Overzicht");

  const filteredTechnologies = activeCategory === 'Overzicht'
    ? technologies
    : technologies.filter(tech => tech.categories.includes(activeCategory));

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-5 lg:px-10 xl:px-20">
        <div className="mb-14">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between items-start md:items-end">
            <div className="flex-none">
              <h2 className="font-['Inter'] text-5xl font-medium tracking-tight text-white/90 leading-tight">
                Onze <span className="whitespace-nowrap">Techstack.</span>
              </h2>
              <p className="mt-4 max-w-xl text-lg text-text-secondary">
                De technologie die wij inzetten voor jouw succes
              </p>              npm install react-icons --legacy-peer-deps
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/technologie" className="group/btn inline-flex cursor-pointer focus:outline-none">
                <span className="text-sm flex items-center justify-center flex-1 font-medium whitespace-nowrap transition-all rounded-lg bg-primary text-background px-5 h-10">
                  Alle technologie
                </span>
              </Link>
              <Link href="/koppelingen-integraties" className="group/btn inline-flex cursor-pointer focus:outline-none">
                <span className="text-sm flex items-center justify-center flex-1 font-medium whitespace-nowrap transition-all rounded-lg px-5 h-10 ring-1 ring-inset ring-border text-foreground">
                  Bekijk onze koppelingen
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="relative mb-8 border-b border-border">
            <nav className="group relative flex overflow-x-auto snap-x snap-mandatory">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative snap-start whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors duration-200 lg:px-6 lg:text-base ${activeCategory === category ? 'text-primary' : 'text-text-secondary hover:text-white'}`}
                >
                  {category}
                  {activeCategory === category && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-primary" />
                  )}
                </button>
              ))}
            </nav>
          </div>
          <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-x-14 md:gap-y-8">
            {filteredTechnologies.map((tech) => {
              const IconComponent = ICONS[tech.icon];
              return (
                <Link href={tech.href} key={tech.name} className="group text-left transition-transform duration-300 ease-in-out hover:-translate-y-2">
                  <div className="mb-6 flex size-24 items-center justify-center rounded-2xl border border-border/30 transition-colors duration-200 group-hover:border-primary">
                    <IconComponent size={56} color="#fff" />
                  </div>
                  <h3 className="text-xl font-medium text-white">{tech.name}</h3>
                  <p className="mt-2 text-sm text-text-secondary line-clamp-4">{tech.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}