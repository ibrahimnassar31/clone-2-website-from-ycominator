"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, ArrowRight } from 'lucide-react';

type TeamMember = {
  name: string;
  role: string;
  slug: string;
  imageUrl: string;
  description: string;
  linkedinUrl: string | null;
};

const teamMembers: TeamMember[] = [
  {
    name: "Amber",
    role: "Projectmanager",
    slug: "amber-stuivenberg",
    imageUrl: "https://wsrv.nl/?url=https://assets.cube.nl/prod/team/amber-stuivenberg.jpg&output=webp&q=90&hash=MTc1NDkxOTgyMQ==&w=540&h=660&fit=cover&a=top",
    description: "Goed in padel, sociaal en met een flinke dosis humor. Als projectmanager bij Cube brengt Amber techniek en opdrachtgever samen en zorgt ze dat projecten soepel verlopen. Sportief en nieuwsgierig, altijd klaar voor een nieuwe uitdaging en om samen met het team mooie resultaten te boeken.",
    linkedinUrl: "https://www.linkedin.com/in/amber-stuivenberg-9a43b3106/"
  },
  {
    name: "Bart",
    role: "Developer",
    slug: "bart-klumpers",
    imageUrl: "https://wsrv.nl/?url=https://assets.cube.nl/prod/team/bart-2(zonderreflect.)_lagekwaliteit.-2.jpg&output=webp&q=90&hash=MTc1NDI5MTI2NA==&w=540&h=660&fit=cover&a=top",
    description: "Of hij nu op de judomat staat of op kantoor: Bart brengt energie en humor mee. Altijd goedgehumeurd, scherp van geest en een collega waar je op kunt bouwen.",
    linkedinUrl: null
  },
  {
    name: "Bernard",
    role: "Developer",
    slug: "bernard-diphooren",
    imageUrl: "https://wsrv.nl/?url=https://assets.cube.nl/prod/team/bernard-diphooren.jpg&output=webp&q=90&hash=MTc1NDkxOTg3OQ==&w=540&h=660&fit=cover&a=top",
    description: "Tukker, liefhebber van squash, PSV en fotografie tijdens het gouden uur. Bernard werkt al jaren met code en let daarbij niet alleen op functionaliteit, maar ook op lees- en testbaarheid. Rustig, nauwkeurig en altijd gericht op mooie en goed werkende oplossingen.",
    linkedinUrl: null
  },
  {
    name: "Bob",
    role: "Test Engineer | Security & Privacy",
    slug: "bob-ten-vergert",
    imageUrl: "https://wsrv.nl/?url=https://assets.cube.nl/prod/team/bob.png&output=webp&q=90&hash=MTcyMTA0OTA5Mw==&w=540&h=660&fit=cover&a=focal&fpx=0.49&fpy=0.23",
    description: "Uiteraard moet er iemand controle houden op de AVG, kwaliteit & veiligheid. Met overtuiging en punctualiteit waarborgt onze Test Engineer en Security & Privacy Officer, Bob deze facetten.",
    linkedinUrl: null
  },
  {
    name: "Demi",
    role: "Officemanager",
    slug: "demi-weustink",
    imageUrl: "https://wsrv.nl/?url=https://assets.cube.nl/prod/team/demi.png&output=webp&q=90&hash=MTczODE1NDM1NA==&w=540&h=660&fit=cover&a=top",
    description: "Met een nuchtere blik en organisatorisch talent is Demi de aanpakker die ervoor zorgt dat alles op kantoor soepel verloopt. Haar flexibiliteit en mensgerichte aanpak maken haar onmisbaar als Officemanager.",
    linkedinUrl: "https://www.linkedin.com/in/demi-weustink-b68886130/"
  },
  {
    name: "Jarno",
    role: "Business Director",
    slug: "jarno-rutjes",
    imageUrl: "https://wsrv.nl/?url=https://assets.cube.nl/prod/team/jarno.png&output=webp&q=90&hash=MTcyMTA0OTEwMQ==&w=540&h=660&fit=cover&a=focal&fpx=0.49&fpy=0.32",
    description: "Zo fanatiek als Jarno in de sportschool en op de tennisbaan staat, zo zet hij zich ook in binnen Cube. Zijn kracht? Meedenken met de business van opdrachtgevers en bedrijfsprocessen tot in de kern doorgronden.",
    linkedinUrl: "https://www.linkedin.com/in/jarnorutjes/"
  }
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <a href={`/over/${member.slug}`} className="group block relative overflow-hidden rounded-2xl aspect-[540/660]">
    <Image
      src={member.imageUrl}
      alt={`${member.name}, ${member.role}`}
      fill
      className="object-cover w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
    />
    <div className="absolute inset-0 p-5 lg:p-8 flex flex-col justify-end text-white bg-gradient-to-t from-black/60 to-transparent">
      <div className="relative transition-transform duration-300 ease-out lg:group-hover:-translate-y-4">
        <h3 className="text-3xl font-medium font-matter">{member.name}</h3>
        <span className="block mt-1 text-sm text-neutral-300">{member.role}</span>
        <div className="transition-all duration-300 ease-out max-lg:hidden max-h-0 opacity-0 lg:group-hover:max-h-96 lg:group-hover:opacity-100 lg:group-hover:mt-4">
          <p className="text-base text-neutral-300">{member.description}</p>
        </div>
      </div>
      {member.linkedinUrl && (
        <a 
          href={member.linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute z-10 top-5 right-5 p-2 rounded-full opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 bg-white/10 backdrop-blur-sm" 
          aria-label={`LinkedIn van ${member.name}`}
          onClick={(e) => e.stopPropagation()}
        >
          <Linkedin className="size-5" />
        </a>
      )}
    </div>
  </a>
);

export default function TeamSection() {
  return (
    <section className="py-24 bg-navy-900">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 xl:px-20">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <h2 className="text-5xl font-semibold text-white leading-tight text-balance font-display">
              Ons team. Ofja, eigenlijk<br />jouw team.
            </h2>
            <p className="mt-6 text-lg max-w-2xl text-text-secondary">
              Klaar voor de uitdagingen van morgen <strong>—</strong> met lef, nuchterheid en een focus op kwaliteit. Kom jij de Cube versterken?
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-0">
            <Link href="/werken-bij" className="group/btn inline-flex items-center cursor-pointer focus:outline-none">
              <span className="flex items-center justify-center flex-1 text-base font-medium rounded-full whitespace-nowrap transition-all bg-primary text-neutral-900 h-14 px-6">
                Onze vacatures
              </span>
              <span className="inline-flex items-center justify-center rounded-full relative bg-primary text-neutral-900 size-14 transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:rotate-45 group-hover/btn:translate-x-1.5">
                <ArrowRight className="size-5" />
              </span>
            </Link>
            <Link href="/over" className="group/btn inline-flex items-center justify-center cursor-pointer focus:outline-none text-base font-medium rounded-full whitespace-nowrap h-14 px-6 ring-1 ring-inset ring-border hover:ring-white transition-all">
              Over ons
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.slug} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}