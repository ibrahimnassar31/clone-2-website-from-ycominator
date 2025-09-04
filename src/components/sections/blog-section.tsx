import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import './blog-card-animate.css';

interface BlogPost {
  href: string;
  author: string;
  authorAvatar: string;
  title: string;
  date: string;
  postImage: string;
}

const blogPosts: BlogPost[] = [
  {
    href: '/blog/rogier-service-samenwerking-structurele-groei-maatwerk-softwareprojecten',
    author: 'Rogier',
    authorAvatar: 'https://wsrv.nl/?url=https://assets.cube.nl/prod/team/rogier.png&output=webp&q=90&hash=MTcyMTA0OTEzOA==&w=150&h=150&fit=cover&a=top',
    title: 'Rogier over service, samenwerking en structurele groei bij maatwerk softwareprojecten.',
    date: '08 augustus 2025',
    postImage: 'https://wsrv.nl/?url=https://assets.cube.nl/prod/berichten/rogier-artikel/rogier_sla-21.jpg&output=webp&q=90&hash=MTc1NDY0NDE5Mg==&w=380&h=380&fit=cover&a=center',
  },
  {
    href: '/blog/collega-bijzondere-hobby-mikal-jaagt-op-stormen',
    author: 'Jenne',
    authorAvatar: 'https://wsrv.nl/?url=https://assets.cube.nl/prod/team/jenne.jpg&output=webp&q=90&hash=MTcyNTU1MTIyNg==&w=150&h=150&fit=cover&a=top',
    title: 'Een collega met een bijzondere hobby: Mikal jaagt op stormen.',
    date: '29 juli 2025',
    postImage: 'https://wsrv.nl/?url=https://assets.cube.nl/prod/berichten/stormchasen/mikal_stormchase_lagekwaliteit-11.jpg&output=webp&q=90&hash=MTc1MjY2OTIyMA==&w=380&h=380&fit=cover&a=center',
  },
  {
    href: '/blog/hackathon-recap',
    author: 'Mans',
    authorAvatar: 'https://wsrv.nl/?url=https://assets.cube.nl/prod/team/mans.png&output=webp&q=90&hash=MTcyMTA0OTEyNQ==&w=150&h=150&fit=cover&a=focal&fpx=0.53&fpy=0.33',
    title: 'Hackathon Recap: Code, koffie & creativiteit.',
    date: '07 juli 2025',
    postImage: 'https://wsrv.nl/?url=https://assets.cube.nl/prod/berichten/tech-talks/hackathon_lagekwaliteit-12.jpg&output=webp&q=90&hash=MTc1MTYwOTMzMA==&w=380&h=380&fit=cover&a=center',
  },
  {
    href: '/blog/efficientie-controle-oci-koppeling-zakelijke-inkoopprocessen',
    author: 'Justin',
    authorAvatar: 'https://wsrv.nl/?url=https://assets.cube.nl/prod/team/justin.png&output=webp&q=90&hash=MTcyMTA0OTExNQ==&w=150&h=150&fit=cover&a=top',
    title: 'Efficiëntie en controle met de OCI-koppeling in zakelijke inkoopprocessen.',
    date: '16 juni 2025',
    postImage: 'https://wsrv.nl/?url=https://assets.cube.nl/prod/berichten/oci-koppeling/afas-22.jpg&output=webp&q=90&hash=MTc0MjQ1OTc0NA==&w=380&h=380&fit=cover&a=center',
  },
  {
    href: '/blog/productgericht-naar-servicegericht-bedrijfsmodel-servitization',
    author: 'Jarno',
    authorAvatar: 'https://wsrv.nl/?url=https://assets.cube.nl/prod/team/jarno.png&output=webp&q=90&hash=MTcyMTA0OTEwMQ==&w=150&h=150&fit=cover&a=focal&fpx=0.49&fpy=0.32',
    title: 'Van productgericht naar servicegericht bedrijfsmodel met servitization.',
    date: '26 mei 2025',
    postImage: 'https://wsrv.nl/?url=https://assets.cube.nl/prod/platforms-door-cube.jpg&output=webp&q=90&hash=MTczODc0NjE2OQ==&w=380&h=380&fit=cover&a=center',
  },
];

const BlogSection = () => {
  return (
    <section className="bg-background py-24 lg:py-40">
      <div className="container mx-auto max-w-7xl px-5 lg:px-20">
        <div className="grid lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-9" data-animate="from:opacity-0|y-8|duration-1|delay-0" style={{ transform: "translateY(0px) translateZ(0px)", opacity: 1 }}>
            <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-6xl font-display text-balance leading-tight">
              Het laatste nieuws uit de Cube.
            </h2>
            <p className="mt-6 text-lg font-medium text-text-secondary">
              Kennis delen zit in ons DNA
            </p>
          </div>
          <div className="hidden lg:flex lg:col-span-3 lg:justify-end" data-animate="from:opacity-0|y-8|duration-1|delay-0" style={{ transform: "translateY(0px) translateZ(0px)", opacity: 1 }}>
            <Link href="/blog" className="group/btn-secondary inline-flex h-14 cursor-pointer items-center justify-center gap-x-1 rounded-full px-6 text-base font-medium ring-1 ring-inset ring-border transition-colors duration-200 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500">
              <span className="whitespace-nowrap">Bekijk alle blogs</span>
              <span className="inline-flex size-5 shrink-0 items-center justify-center transition-transform duration-500 ease-in-out group-hover/btn-secondary:-translate-y-1 group-hover/btn-secondary:translate-x-1">
                <ArrowUpRight className="size-5" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-16 hidden lg:block" data-animate="from:opacity-0|y-8|duration-1|delay-0.2" style={{ transform: "translateY(0px) translateZ(0px)", opacity: 1 }}>
          <ul className="grid grid-cols-1">
            {blogPosts.map((post, index) => (
              <li key={index} className="border-b border-border">
                <Link href={post.href} className="group grid grid-cols-12 items-center gap-x-10 py-10 text-white transition-colors duration-200 hover:text-primary blog-card-animate">
                  <div className="col-span-3 flex items-center gap-4">
                    <div className="relative size-14 flex-none overflow-hidden rounded-full">
                      <Image src={post.authorAvatar} alt={`Avatar of ${post.author}`} width={56} height={56} className="h-full w-full object-cover" />
                    </div>
                    <span className="font-medium text-white">{post.author}</span>
                  </div>
                  <h3 className="col-span-6 font-medium text-2xl lg:text-3xl leading-snug font-display">
                    {post.title}
                  </h3>
                  <time className="col-span-3 text-right text-text-muted">{post.date}</time>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="lg:hidden mt-10">
          <ul className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-10 scrollbar-hidden -mx-5 px-5" data-animate="from:opacity-0|x-[-100vw]|s-0.5|duration-1.5|delay-0" style={{ transform: "translateX(0vw) translateZ(0px) scale(1)", opacity: 1 }}>
            {blogPosts.map((post, index) => (
              <li key={index} className="w-[18rem] shrink-0 snap-center lg:w-[24.5rem]">
                <Link href={post.href} className="group relative block overflow-hidden rounded-lg bg-card transition-transform duration-500 ease-in-out hover:scale-[1.025] hover:shadow-lg blog-card-animate">
                  <div className="aspect-square block overflow-hidden">
                    <Image src={post.postImage} alt={post.title} width={380} height={380} className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="relative size-10 flex-none overflow-hidden rounded-full">
                        <Image src={post.authorAvatar} alt={`Avatar of ${post.author}`} width={40} height={40} className="h-full w-full object-cover" />
                      </div>
                      <span className="font-medium text-white">{post.author}</span>
                    </div>
                    <h3 className="mt-6 font-medium text-xl leading-snug text-white font-display">
                      {post.title}
                    </h3>
                    <time className="mt-4 block text-sm text-text-muted">{post.date}</time>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center lg:hidden" data-animate="from:opacity-0|y-8|duration-1|delay-0.2" style={{ transform: "translateY(0px) translateZ(0px)", opacity: 1 }}>
            <Link href="/blog" className="group/btn-secondary inline-flex h-14 cursor-pointer items-center justify-center gap-x-1 rounded-full px-6 text-base font-medium ring-1 ring-inset ring-border transition-colors duration-200 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500">
               <span className="whitespace-nowrap">Bekijk alle blogs</span>
              <span className="inline-flex size-5 shrink-0 items-center justify-center transition-transform duration-500 ease-in-out group-hover/btn-secondary:-translate-y-1 group-hover/btn-secondary:translate-x-1">
                <ArrowUpRight className="size-5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;