import React from 'react';


const FdGazelleLogo = () => (<p className="font-display text-2xl font-bold tracking-tight text-background">FD Gazelle</p>);
const EmerceLogo = () => (<p className="font-display text-2xl font-bold tracking-tight text-background">Emerce</p>);
const DiaLogo = () => (<p className="font-display text-xl font-bold tracking-tight text-background">Dutch Interactive Awards</p>);
const DdaLogo = () => (<p className="font-display text-base font-medium uppercase tracking-wider text-background">DDA Member</p>);
const LovieAwardsLogo = () => (<p className="font-display text-2xl font-bold tracking-tight text-background">The Lovie Awards</p>);
const RedDotLogo = () => (<p className="font-display text-2xl font-bold tracking-tight text-background">Red Dot Award</p>);

const awardsData = [
  { count: "5x", Logo: FdGazelleLogo },
  { count: "4x", Logo: EmerceLogo },
  { count: "6x", Logo: DiaLogo },
  { count: "lid", Logo: DdaLogo },
  { count: "5x", Logo: LovieAwardsLogo },
  { count: "1x", Logo: RedDotLogo },
];

const AwardItem = ({ count, Logo }: { count: string; Logo: React.ElementType }) => (
  <div className="flex-shrink-0 px-8 text-center lg:px-0">
    <span className="block font-display text-[4rem] font-bold leading-none text-background lg:text-[5rem]">
      {count}
    </span>
    <span className="mt-1.5 block flex h-10 items-center justify-center">
      <Logo />
    </span>
  </div>
);

const AwardsSection = () => {
  return (
    <section className="overflow-x-clip bg-foreground py-10 lg:py-24">
      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-y-10 px-5 lg:grid-cols-12 lg:gap-x-10 lg:px-10 xl:px-20">
        <div className="lg:col-span-5">
          <h2 className="relative font-display text-[6rem] font-bold leading-none text-background lg:text-[9rem] xl:text-[12rem]">
            <span className="block text-primary">23</span>
            <span className="block">awards</span>
          </h2>
        </div>
        <div className="text-balance text-xl font-medium leading-snug text-background lg:col-span-7 lg:col-start-6 lg:mt-40">
          <h3 className="font-display">
            Gewoon lekker bezig – en dat wordt gezien.
          </h3>
        </div>
      </div>
      <div className="relative mt-10 w-full lg:mt-32">
        <div className="flex items-center whitespace-nowrap overflow-x-auto px-5 lg:justify-between lg:gap-x-16 lg:overflow-visible lg:px-52 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {awardsData.map((award, index) => (
            <AwardItem key={index} count={award.count} Logo={award.Logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;