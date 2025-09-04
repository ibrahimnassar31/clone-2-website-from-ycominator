import React from 'react';

const CubeLogoIcon = () => (
  <svg
    className="h-24 text-yellow-500"
    height="100%"
    width="100%"
    viewBox="0 0 120 120"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M60.101,48v-48h-12v48h-48v12h48v48h12v-48h48v-12z"></path>
  </svg>
);

const FooterBackgroundIcon = () => (
  <div className="absolute inset-x-0 bottom-0 overflow-hidden text-neutral-900 pointer-events-none -z-10">
    <svg className="h-auto w-full opacity-5" viewBox="0 0 1950 800" fill="currentColor">
      <path d="M-200,800l2150,0l0-800l-2150,0l0,800z m2140,-790l-2130,0l0,780l2130,0l0,-780z M-150,700l2050,0l0,-600l-2050,0l0,600z m2040,-590l-2030,0l0,580l2030,0l0,-580z M-100,600l1950,0l0,-400l-1950,0l0,400z m1940,-390l-1930,0l0,380l1930,0l0,-380z M-50,500l1850,0l0,-200l-1850,0l0,200z m1840,-190l-1830,0l0,180l1830,0l0,-180z"></path>
    </svg>
  </div>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.626,24h-4.041v-7.854h4.041v-5.836c0,-4.004,2.445,-6.195,6.027,-6.195c1.714,0,3.185,0.128,3.614,0.185v6.988l-4.133,0.001c-1.942,0,-2.319,0.923,-2.319,2.278v2.579h6.883l-0.895,7.854h-5.988v20.528h-7.177Z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12,8.441a3.559,3.559,0,1,0,3.559,3.559,3.563,3.563,0,0,0,-3.559,-3.559m0,5.932a2.373,2.373,0,1,1,2.373,-2.373,2.375,2.375,0,0,1,-2.373,2.373m6.529,-5.98a0.83,0.83,0,1,1,-0.83,-0.83,0.83,0.83,0,0,1,0.83,0.83m6.921,0.957a6.938,6.938,0,0,0,-1.884,-4.939,6.934,6.934,0,0,0,-4.939,-1.884c-1.95,0,-2.176,0.009,-6.627,0.009s-4.677,0,-6.627,-0.009a6.934,6.934,0,0,0,-4.939,1.884,6.938,6.938,0,0,0,-1.884,4.939c0,1.95,-0.009,2.176,-0.009,6.627s0,4.677,0.009,6.627a6.938,6.938,0,0,0,1.884,4.939,6.934,6.934,0,0,0,4.939,1.884c1.95,0,2.176,0.009,6.627,0.009s4.677,0,6.627,-0.009a6.934,6.934,0,0,0,4.939,-1.884,6.938,6.938,0,0,0,1.884,-4.939c0,-1.95,0.009,-2.176,0.009,-6.627s0,-4.677,-0.009,-6.627M19.141,0h-14.282a4.858,4.858,0,0,0,-4.858,4.858v14.282a4.858,4.858,0,0,0,4.858,4.858h14.282a4.858,4.858,0,0,0,4.858,-4.858v-14.282a4.858,4.858,0,0,0,-4.858,-4.858"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.185,24v-14.391h-5.263v14.391h5.263Zm-2.632,-16.14a2.915,2.915,0,1,1,-2.914,-2.915,2.914,2.914,0,0,1,2.914,2.915m21.446,16.14h-5.05v-7.051c0,-1.679,-0.03,-3.834,-2.336,-3.834,-2.339,0,-2.698,1.827,-2.698,3.714v7.171h-5.05v-14.391h4.849v2.222h0.069a5.311,5.311,0,0,1,4.786,-2.336c5.119,0,6.064,3.37,6.064,7.747v8.758h-0.633Z"></path>
  </svg>
);

const ArrowRightIcon = () => (
    <svg className="group-hover:translate-x-1.5 transition-transform duration-200 inline-block ml-1 size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M7,12.75l5.25,-5.25l-5.25,-5.25"></path>
    </svg>
);

const softwareSolutions = [
  { name: 'Klant- en beheerportalen', href: 'https://cube.nl/software-oplossingen/klant-beheer-portaal' },
  { name: 'Apps', href: 'https://cube.nl/software-oplossingen/apps' },
  { name: 'Websites & CMS', href: 'https://cube.nl/software-oplossingen/websites-cms' },
  { name: 'E-commerce oplossingen', href: 'https://cube.nl/software-oplossingen/e-commerce' },
  { name: 'Data Management Platform', href: 'https://cube.nl/software-oplossingen/data-management-platform' },
  { name: 'Learning Management System', href: 'https://cube.nl/software-oplossingen/lms' },
];

const digitalTransformation = [
  { name: 'Strategie & Advies', href: 'https://cube.nl/digitale-transformatie/strategie-advies' },
  { name: 'Technische architectuur opstellen', href: 'https://cube.nl/digitale-transformatie/technische-architectuur' },
  { name: 'Data & AI', href: 'https://cube.nl/digitale-transformatie/data-ai' },
  { name: 'Code review en bestaande software overnemen', href: 'https://cube.nl/digitale-transformatie/code-review' },
  { name: 'Replatforming', href: 'https://cube.nl/digitale-transformatie/replatforming' },
];

const communityLinks = [
  { name: 'Blog', href: '/blog' },
  { name: 'Cases', href: '/cases' },
  { name: 'Werken bij', href: '/werken-bij' },
];

const generalLinks = [
  { name: 'Privacy Statement', href: 'https://cube.nl/uploads/Cube_PrivacyStatement.pdf' },
  { name: 'Algemene voorwaarden', href: 'https://cube.nl/algemene-voorwaarden' },
];

const socialLinks = [
  { href: 'https://www.facebook.com/cubebv/', label: 'Ga naar Facebook', icon: <FacebookIcon /> },
  { href: 'https://www.instagram.com/cube.nl/', label: 'Ga naar Instagram', icon: <InstagramIcon /> },
  { href: 'https://www.linkedin.com/company/cubebv/', label: 'Ga naar LinkedIn', icon: <LinkedInIcon /> },
]

const Footer = () => {
  return (
    <footer id="skip-to-footer" className="bg-background text-foreground relative">
      <FooterBackgroundIcon />
      <div className="relative w-full mx-auto max-w-[1400px] px-5 lg:px-10 xl:px-20">
        <div className="grid grid-cols-2 gap-y-7 gap-x-5 py-24 sm:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 lg:gap-10">
          <div className="col-span-2 sm:col-span-4 xl:col-span-1 2xl:col-span-2">
            <CubeLogoIcon />
          </div>
          
          <div className="col-span-1">
            <span className="text-sm font-medium">Software oplossingen</span>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-text-secondary">
              {softwareSolutions.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:underline">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <span className="text-sm font-medium">Digitale transformatie</span>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-text-secondary">
              {digitalTransformation.map((link) => (
                <li key={link.name}>
                    <a href={link.href} className="hover:underline">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <span className="text-sm font-medium">Community</span>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-text-secondary">
              {communityLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:underline">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <span className="text-sm font-medium">Algemeen</span>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-text-secondary">
              {generalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:underline" target={link.name === 'Privacy Statement' ? '_blank' : '_self'}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-white relative overflow-hidden py-14">
          <div className="font-display uppercase font-bold text-8xl lg:text-[14rem] whitespace-nowrap">
            <p>inside the Cube. Think</p>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center gap-10 border-t py-6 border-border lg:grid-cols-3">
          <div className="col-span-1">
            <ul className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer" className="size-6 text-text-secondary duration-200 hover:text-primary">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 text-center font-medium lg:order-last lg:text-right">
            <a href="https://www.google.com/maps/place/Cube/@52.302521,6.920703,15z/data=!4m6!3m5!1s0x47b81961e6005711:0xe28593cad1891a91!8m2!3d52.302521!4d6.920703!16s%2Fg%2F11b6bqtglq?hl=nl&entry=ttu" 
               className="group text-sm text-text-secondary" target="_blank" rel="noopener noreferrer">
              <span>Oude Postweg 125, Oldenzaal</span>
              <ArrowRightIcon />
            </a>
          </div>
          <div className="col-span-full text-center text-sm text-text-secondary lg:col-span-1 lg:text-left">
            © 2024 - Cube
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;