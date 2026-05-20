import { Card } from '../components/ui/card';
import { Settings, TrendingUp, Zap, Hammer } from 'lucide-react';
import Footer from '../components/Footer';

const Precast = () => {
  const features = [
    {
      icon: Hammer,
      title: 'Advanced Precast',
      description: 'Precision-engineered precast concrete solutions for faster construction.',
    },
    {
      icon: TrendingUp,
      title: '3D Printing Innovation',
      description: 'Cutting-edge 3D printing technology revolutionizing building processes.',
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Accelerated timelines with modular precast and printed components.',
    },
    {
      icon: Settings,
      title: 'Custom Fabrication',
      description: 'Tailored solutions for complex architectural requirements.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        data-testid="precast-hero-section"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/precast-construction.jpg"
            alt="Precast construction"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-none"
            style={{ fontFamily: 'Playfair Display, serif' }}
            data-testid="precast-page-heading"
          >
            <span className="text-[#d4af37]">Jagmal</span> Precast & 3D Printing
          </h1>
          <p
            className="text-xl md:text-2xl text-slate-200 leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Revolutionizing Construction Through Innovation
          </p>
        </div>
      </section>

      {/* Facility Details */}
      <section className="py-20 md:py-32 bg-slate-950" data-testid="facility-details-section">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium mb-6">
                State-of-the-Art Facility
              </div>
              <h2
                className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
                data-testid="facility-name-heading"
              >
                Precast & 3D Innovation Center
              </h2>
              <div className="flex items-baseline mb-6">
                <span
                  className="text-5xl font-bold text-[#d4af37] mr-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  25,000
                </span>
                <span className="text-2xl text-slate-400">sq ft</span>
              </div>
              <p
                className="text-lg text-slate-300 leading-relaxed mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Our cutting-edge facility combines precast concrete manufacturing with 3D printing technology, delivering the future of construction today. Precision engineering meets digital innovation.
              </p>
              <p
                className="text-lg text-slate-300 leading-relaxed"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                From modular building components to complex architectural elements, we provide sustainable, high-quality solutions that reduce construction time and costs while maintaining superior quality.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/3dp.jpg"
                alt="Precast Facility"
                className="rounded-xl shadow-2xl w-full h-[400px] object-contain bg-slate-900 p-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-20 md:py-32 bg-slate-900"
        data-testid="features-section"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
              data-testid="features-heading"
            >
              Technology Advantage
            </h2>
            <p
              className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Combining traditional precast excellence with 3D printing innovation for unmatched construction efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-8 border border-slate-800 hover:border-[#d4af37]/50 transition-all duration-500 hover:shadow-xl rounded-xl bg-slate-950"
                  data-testid={`feature-card-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-[#d4af37]/10 mb-6">
                      <Icon className="h-8 w-8 text-[#d4af37]" />
                    </div>
                    <h3
                      className="text-2xl font-medium text-white mb-4 tracking-tight"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-slate-300 leading-relaxed"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Precast;

