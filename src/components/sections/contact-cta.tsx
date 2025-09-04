import Image from "next/image";
import { CalendarDays, Mail, Phone, ArrowRight } from "lucide-react";

const ContactCta = () => {
  return (
    <section className="bg-gradient-to-br from-[--color-gradient-start] to-[#1a2332]/10 py-24 text-white lg:py-32 xl:py-40">
      <div className="container mx-auto px-5 lg:px-10 xl:px-20">
        <div className="mx-auto flex max-w-[50rem] flex-col items-center text-center">
          <h2 className="text-balance font-semibold leading-[1.125] text-3xl sm:text-4xl lg:text-5xl">
            Klaar voor de volgende stap? <br /> Wij ook.
          </h2>

          <div className="mt-10 flex flex-col items-center gap-y-6 lg:flex-row lg:items-center lg:gap-x-10">
            <div className="flex items-center">
              <Image
                src="https://wsrv.nl/?url=https://assets.cube.nl/prod/team/jarno.png&output=webp&q=90&hash=MTcyMTA0OTEwMQ==&w=210&h=210&fit=cover&a=focal&fpx=0.49&fpy=0.32"
                alt="Jarno Rutjes - Business Director bij Cube - Oldenzaal"
                width={112}
                height={112}
                className="h-20 w-20 flex-none overflow-clip rounded-full object-cover lg:h-28 lg:w-28"
              />
              <div className="ml-6 text-left">
                <span className="block font-medium">
                  Jarno
                </span>
                <span className="mt-1 block font-medium text-text-secondary">
                  Business Director
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href="https://meetings.hubspot.com/jarno3"
                className="flex h-14 w-14 items-center justify-center rounded-full ring-1 ring-inset ring-border/50 transition-colors duration-200 hover:ring-white"
                aria-label="Maak een afspraak met Jarno"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarDays className="h-5 w-5" />
              </a>
              <a
                href="mailto:jarno.rutjes@cube.nl"
                className="flex h-14 w-14 items-center justify-center rounded-full ring-1 ring-inset ring-border/50 transition-colors duration-200 hover:ring-white"
                aria-label="E-mail naar jarno.rutjes@cube.nl"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:06-41022141"
                className="flex h-14 w-14 items-center justify-center rounded-full ring-1 ring-inset ring-border/50 transition-colors duration-200 hover:ring-white"
                aria-label="Bel naar 06-41022141"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 lg:mt-10">
            <a
              href="https://meetings.hubspot.com/jarno3"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex cursor-pointer focus:outline-none"
            >
              <span className="flex h-14 flex-1 items-center justify-center whitespace-nowrap rounded-full bg-primary px-6 text-base font-medium text-neutral-900 transition-all group-focus-visible/btn:outline-2 group-focus-visible/btn:outline-offset-2 group-focus-visible/btn:outline-primary">
                Maak een afspraak
              </span>
              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-neutral-900 transition-transform duration-300 ease-in-out group-hover/btn:translate-x-1.5 group-hover/btn:rotate-45">
                <ArrowRight className="h-5 w-5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;