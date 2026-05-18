import { Card } from '../components/ui/card';
import { Package, TrendingUp, MapPin, Zap } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Logistics = () => {
  const features = [
    {
      icon: Package,
      title: 'Modern Infrastructure',
      description: 'State-of-the-art warehousing and logistics facilities designed for efficiency.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Flexible spaces that grow with your business needs.',
    },
    {
      icon: Zap,
      title: 'Rapid Connectivity',
      description: 'Strategic location with excellent connectivity to major transportation hubs.',
    },
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Strategically positioned for optimal supply chain management.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Jagmal Logistics | Industrial Parks & Warehousing"
        description="Explore Jagmal Logistics and industrial park infrastructure built for modern warehousing and distribution."
        path="/logistics"
      />
      {/* Hero Banner */}
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        data-testid="logistics-hero-section"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/images/logistics-park.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-none"
            style={{ fontFamily: 'Playfair Display, serif' }}
            data-testid="logistics-page-heading"
          >
            <span className="text-[#d4af37]">Logistics</span> & Industrial Parks
          </h1>
          <p
            className="text-xl md:text-2xl text-slate-200 leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Powering Commerce with World-Class Infrastructure
          </p>
        </div>
      </section>

      {/* Park Details */}
      <section className="py-20 md:py-32 bg-slate-950" data-testid="park-details-section">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium mb-6">
                Fully Operational
              </div>
              <h2
                className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
                data-testid="park-name-heading"
              >
                L&I Park
              </h2>
              <div className="flex items-baseline mb-6">
                <span
                  className="text-5xl font-bold text-[#d4af37] mr-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  1 Lakh
                </span>
                <span className="text-2xl text-slate-400">sq ft</span>
              </div>
              <p
                className="text-lg text-slate-300 leading-relaxed mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Our flagship Logistics & Industrial Park spans 1 lakh square feet of premium operational space, designed to meet the evolving needs of modern businesses.Strategically located in Naini, Prayagraj, the facility offers seamless connectivity.
              </p>
              <p
                className="text-lg text-slate-300 leading-relaxed mb-8"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Equipped with cutting-edge technology and sustainable infrastructure, L&I Park provides the perfect environment for warehousing, manufacturing, and distribution operations.
              </p>
              <div className="mt-8 p-6 bg-[#d4af37]/5 rounded-xl border border-[#d4af37]/20">
                <h4 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Our Long Term Clients
                </h4>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-slate-800 rounded-lg shadow-md font-medium text-slate-200">
                    Instakart Services
                  </span>
                  <span className="px-4 py-2 bg-slate-800 rounded-lg shadow-md font-medium text-slate-200">
                    GMR Group
                  </span>
                  <span className="px-4 py-2 bg-slate-800 rounded-lg shadow-md font-medium text-slate-200">
                    Flipkart India
                  </span>
                  <span className="px-4 py-2 bg-slate-800 rounded-lg shadow-md font-medium text-slate-200">
                    CloudStore Retail
                  </span>
                  <span className="px-4 py-2 bg-slate-800 rounded-lg shadow-md font-medium text-slate-200">
                    Buzz Retail
                  </span>
                  <span className="px-4 py-2 bg-slate-800 rounded-lg shadow-md font-medium text-slate-200">
                    ZFW Hospitality
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/logistics-park.jpg"
                alt="L&I Park"
                className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
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
              Why Choose L&I Park
            </h2>
            <p
              className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Experience the advantages of a truly modern industrial facility designed for the future of commerce.
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

export default Logistics;

