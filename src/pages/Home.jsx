import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Warehouse, Utensils, Settings } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import Footer from '../components/Footer';
import CanvasSkyline from '../components/CanvasSkyline';

const Home = () => {
  const verticals = [
    {
      title: 'Jagmal Hotels',
      description: 'Beyond Five Stars. Into the Unforgettable.',
      icon: Building2,
      image: '/images/Sterling.png',
      path: '/hotels',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      title: 'Jagmal Logistics & Industrial Parks',
      description: 'Not Just a Park. A Powerhouse.',
      icon: Warehouse,
      image: '/images/logistics-park.jpg',
      path: '/logistics',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      title: 'Jagmal Hospitality',
      description: 'Culinary Excellence at the Heart of Mumbai.',
      icon: Utensils,
      image: '/images/mumbai-skyline.jpg',
      path: '/hospitality',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      title: 'Jagmal Precast & 3D Printing',
      description: 'Revolutionizing Construction Through Innovation.',
      icon: Settings,
      image: '/images/3d.png',
      path: '/precast',
      span: 'md:col-span-1 md:row-span-1',
    },
  ];

  return (
    <div className="relative min-h-screen">

      <section className="relative flex min-h-screen items-center overflow-hidden" data-testid="hero-section">
        <CanvasSkyline />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/18 via-black/10 to-black/35" />

        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-14 pt-28 sm:px-10 md:px-14 lg:px-20">
          <div className="max-w-4xl text-left">
            <h1
              className="mb-8 text-[3.1rem] leading-[0.95] text-[#f1ece2] sm:text-[4.2rem] md:text-[5.3rem] lg:text-[6rem]"
              style={{ fontFamily: 'Playfair Display, serif' }}
              data-testid="hero-headline"
            >
              Building what
              <br />
              <span className="italic text-[#bda35e]">endures.</span>
            </h1>

            <p
              className="max-w-3xl text-base uppercase leading-[1.9] tracking-[0.17em] text-[#9e988e] sm:text-lg"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              data-testid="hero-subheadline"
            >
              Delivering value across hospitality, infrastructure and logistics .
            </p>

            <Button
              size="lg"
              className="mt-10 rounded-full border border-[#bda35e] bg-[#bda35e]/10 px-8 py-6 text-base font-semibold text-[#e9d6ab] transition-all duration-300 hover:bg-[#bda35e]/20 hover:text-[#f5e8ca]"
              onClick={() => document.getElementById('verticals').scrollIntoView({ behavior: 'smooth' })}
              data-testid="hero-cta-button"
            >
              Explore Our World <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section id="verticals" className="relative z-20 bg-slate-950 py-20 md:py-32" data-testid="verticals-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight" style={{fontFamily: 'Playfair Display, serif'}} data-testid="verticals-heading">
              Our Business Verticals
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto" style={{fontFamily: 'Manrope, sans-serif'}}>
              Four pillars of excellence driving innovation and growth across hospitality, real estate, logistics, and construction sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {verticals.map((vertical, index) => {
              const Icon = vertical.icon;
              return (
                <Card key={index} className={`${vertical.span} group relative overflow-hidden rounded-xl border border-slate-800 hover:border-[#d4af37]/50 transition-all duration-500 cursor-pointer hover:shadow-2xl`} data-testid={`vertical-card-${vertical.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Link to={vertical.path} className="block h-full">
                    <div className="relative h-full min-h-[300px] md:min-h-[400px]">
                      <img src={vertical.image} alt={vertical.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="flex items-center mb-4">
                          <div className="p-3 rounded-full bg-[#d4af37]/20 backdrop-blur-sm">
                            <Icon className="h-6 w-6 text-[#d4af37]" />
                          </div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-medium text-white mb-3 tracking-tight" style={{fontFamily: 'Playfair Display, serif'}}>{vertical.title}</h3>
                        <p className="text-slate-200 text-base leading-relaxed" style={{fontFamily: 'Manrope, sans-serif'}}>{vertical.description}</p>
                        <div className="mt-6 flex items-center text-[#d4af37] group-hover:translate-x-2 transition-transform duration-300">
                          <span className="text-sm font-medium">Learn More</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

