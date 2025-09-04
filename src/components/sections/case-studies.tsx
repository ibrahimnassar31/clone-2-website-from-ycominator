'use client'
import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import HorizontalGallery from '../ui/HorizontalGallery';

interface CaseStudy {
  imageSrc: string;
  imageAlt: string;
  companyName: string;
  description: string;
  href: string;
  tags: string[];
  extraTagsCount?: number;
}

const caseStudiesData: CaseStudy[] = [
  {
    imageSrc: "https://wsrv.nl/?url=https://assets.cube.nl/prod/cases/takeaway/takeaway-large-1.jpg&output=webp&q=90&hash=MTcyMjQ5NzQ4NQ==&w=680&h=530&fit=cover&a=center",
    imageAlt: "Bezorgers kunnen bestellingen volgen via track & trace, zodat ze altijd weten waar hun uitrusting is en wanneer deze arriveert.",
    companyName: "Takeaway.com",
    description: "Wereldwijd bedrijfskleding geregeld via het Scoober-platform.",
    href: "/cases/just-eat-takeaway-efficientieverbetering-kostenbesparing-gebruiksvriendelijk-platform-voedselbezorging",
    tags: ["Platform", "SaaS"],
    extraTagsCount: 1,
  },
  {
    imageSrc: "https://wsrv.nl/?url=https://assets.cube.nl/prod/cases/pureenergie/pure-energie-4.jpg&output=webp&q=90&hash=MTczODE2MDc3MQ==&w=680&h=530&fit=cover&a=center",
    imageAlt: "Interactieve kaart met realtime data toont de energieproductie van wind- en zonneparken, zodat klanten de herkomst van hun energie zien.",
    companyName: "Pure Energie",
    description: "Pure Energie: Van groene ambitie naar puur resultaat.",
    href: "/cases/pure-energie-conversie-optimalisatie-site-mobiele-app-platform-energiemarkt",
    tags: ["Website", "Platform"],
    extraTagsCount: 4,
  },
  {
    imageSrc: "https://wsrv.nl/?url=https://assets.cube.nl/prod/cases/nou/nou-header.webp&output=webp&q=90&hash=MTcyMjUxNzA3NA==&w=680&h=530&fit=cover&a=center",
    imageAlt: "Self-service klantenportal: Klanten beheren apparaten, dienen serviceverzoeken in en bestellen eenvoudig producten via het portal.",
    companyName: "Nou",
    description: "Een versterkte merkpositie met een klantenportal, website en webshop.",
    href: "/cases/nou-verbetering-klantervaring-website-klantportaal-printmarkt",
    tags: ["Platform", "Website"],
    extraTagsCount: 3,
  },
  {
    imageSrc: "https://wsrv.nl/?url=https://assets.cube.nl/prod/cases/thermenresorts/qwr-large-1.jpg&output=webp&q=90&hash=MTcyMjQ5Nzc1Ng==&w=680&h=530&fit=cover&a=focal&fpx=0.53&fpy=0.46",
    imageAlt: "Een slim capaciteitsbeheersysteem blokkeert automatisch producten en entrees bij maximale bezetting om fouten te voorkomen.",
    companyName: "Thermen Resorts",
    description: "Een versterkte merkbeleving met vernieuwd digitaal landschap.",
    href: "/cases/thermen-resorts-verhoogde-klantbeleving-website-app-platform-wellness",
    tags: ["Platform", "Website"],
    extraTagsCount: 3,
  },
  {
    imageSrc: "https://wsrv.nl/?url=https://assets.cube.nl/prod/cases/fctwente/buy-de_grolsch_veste-football-tickets-footballticketnet-cover.1725869035.png.webp&output=webp&q=90&hash=MTczODE0NzQ4MA==&w=680&h=530&fit=cover&a=center",
    imageAlt: "Cube ontwikkelde een nieuwe website voor FC Twente, met focus op content, historie en actuele wedstrijdinformatie.",
    companyName: "FC Twente",
    description: "Hoe FC Twente digitaal scoort met een geavanceerde app en website.",
    href: "/cases/fc-twente-communitybuilding-app-website-dmp-sport",
    tags: ["App", "Website"],
    extraTagsCount: 1,
  },
  {
    imageSrc: "https://wsrv.nl/?url=https://assets.cube.nl/prod/cases/coulisse/header-1689929795-min.jpg&output=webp&q=90&hash=MTczODIzMzcyOQ==&w=680&h=530&fit=cover&a=center",
    imageAlt: "Cube ontwikkelde een op maat gemaakt Learning Management System (LMS) voor Coulisse.",
    companyName: "Coulisse",
    description: "Betere kennisdeling en klantondersteuning met een innovatief LMS.",
    href: "/cases/coulisse-kennisdeling-klantondersteuning-lms-raamdecoratie",
    tags: ["Learning Management System", "Platform"],
  },
];

const ArrowIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    className={cn("size-5 transition-transform duration-200", className)}
    width="100%"
    height="100%"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.8333 3.33331L16.5 6.99998M16.5 6.99998L12.8333 10.6666M16.5 6.99998H3.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CaseStudyCard: FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => (
  <div className="flex-none w-[400px] h-[540px]">
    <Link href={caseStudy.href} className="group/card block h-full">
      <div className="w-full h-[260px] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out group-hover/card:scale-105 group-hover/card:shadow-[0_1rem_2rem_rgba(0,0,0,0.3)]">
        <Image
          src={caseStudy.imageSrc}
          alt={caseStudy.imageAlt}
          width={400}
          height={260}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between h-[280px] py-4">
        <span className="block text-2xl font-medium text-foreground transition-colors duration-200 group-hover/card:text-primary">
          {caseStudy.companyName}
        </span>
        <p className="mt-3 text-lg font-normal leading-snug text-text-secondary">
          {caseStudy.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {caseStudy.tags.map((tag, index) => (
            <div key={index} className="flex items-center gap-1.5 rounded-full px-3 h-8 text-[0.8125rem] font-medium transition-colors duration-200 ring-1 ring-inset ring-muted-foreground/50 hover:bg-muted-foreground/10 text-foreground">
              <span className="size-1.5 rounded-full bg-primary"></span>
              <span>{tag}</span>
            </div>
          ))}
          {caseStudy.extraTagsCount && (
             <div className="flex items-center gap-1.5 rounded-full px-3 h-8 text-[0.8125rem] font-medium transition-colors duration-200 ring-1 ring-inset ring-muted-foreground/50 hover:bg-muted-foreground/10 text-text-muted">
                <span>+{caseStudy.extraTagsCount}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  </div>
);

const CaseStudiesSection = () => {
  return (
    <section className="py-24 lg:py-32 xl:py-48 relative bg-card">
      <div className="absolute inset-0 bg-card/60 backdrop-blur-2xl"></div>
      <div className="relative w-full mx-auto max-w-[1400px] px-5 lg:px-10 xl:px-20">
        <div className="grid grid-cols-6 items-center gap-10">
          <h2 className="col-span-full text-balance font-semibold tracking-tighter text-foreground lg:col-span-4 text-5xl">
            Zij <span className="text-text-secondary">gingen</span> je <span className="text-text-secondary">voor.</span>
          </h2>
          <div className="col-span-full flex items-center justify-end lg:col-span-2">
            <Link href="/cases" className="group/btn flex items-center gap-2 rounded-full h-14 pl-6 pr-3 font-medium text-text-secondary ring-1 ring-inset ring-muted/50 transition-all duration-200 hover:ring-text-secondary hover:bg-text-secondary/10 active:bg-text-secondary/15">
              <span>Ontdek ons werk</span>
              <ArrowIcon className="group-hover/btn:rotate-45" />
            </Link>
          </div>
        </div>
        <div className="mt-24 lg:mt-32">
          <HorizontalGallery>
            {caseStudiesData.map((caseStudy, index) => (
              <CaseStudyCard key={index} caseStudy={caseStudy} />
            ))}
          </HorizontalGallery>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;