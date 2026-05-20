import { Card } from '../components/ui/card';
import { Coffee, MapPin, Clock, Sparkles } from 'lucide-react';
import Footer from '../components/Footer';

const Hospitality = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        data-testid="hospitality-hero-section"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/images/pranam2.png')`,
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
            data-testid="hospitality-page-heading"
          >
            <span className="text-[#d4af37]">Jagmal</span> Hospitality
          </h1>
          <p
            className="text-xl md:text-2xl text-slate-200 leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Culinary Excellence Meets Modern Lifestyle
          </p>
        </div>
      </section>

      {/* Cafe Section */}
      <section className="py-20 md:py-32 bg-slate-950" data-testid="cafe-pranam-section">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <img
                src="/images/pranam1.png"
                alt="Jagmal Hospitality"
                className="rounded-xl shadow-2xl w-full h-[400px] object-cover object-top"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium mb-6">
                Serving Soon
              </div>
              <h2
                className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
                data-testid="cafe-name-heading"
              >
                PraNam Cafe
              </h2>
              <div className="flex items-center space-x-6 mb-6 text-slate-400">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-[#d4af37]" />
                  <span className="text-sm font-medium">Marine Lines, Mumbai</span>
                </div>
              </div>
              <p
                className="text-lg text-slate-300 leading-relaxed mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                PraNam is a curated culinary journey along the sacred corridors of Uttar Pradesh. More than just a cafe, PraNam was envisioned as a tribute to the diverse flavors, spiritual heritage, and timeless stories found in the iconic cities of the state.
              </p>
              <p
                className="text-lg text-slate-300 leading-relaxed mb-8"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                We believe that "to eat is to journey," and we invite you to experience the legendary streets and spiritual centers of the region through our authentic offerings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-32 bg-slate-950" data-testid="gallery-section">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Culinary Spaces
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src="/images/pranam3.png"
                alt="Jagmal Hospitality 3"
                className="w-full h-[350px] object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src="/images/pranam4.png"
                alt="Jagmal Hospitality 4"
                className="w-full h-[350px] object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src="/images/pranam5.png"
                alt="Jagmal Hospitality 5"
                className="w-full h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        className="py-20 md:py-32 bg-slate-900"
        data-testid="cafe-features-section"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
              data-testid="cafe-features-heading"
            >
              What to Expect
            </h2>
            <p
              className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              A modern cafe experience designed for Mumbai's dynamic lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card
              className="p-8 border border-slate-800 hover:border-[#d4af37]/50 transition-all duration-500 hover:shadow-xl rounded-xl bg-slate-950"
              data-testid="feature-card-artisan-coffee"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-[#d4af37]/10 mb-6">
                  <Coffee className="h-8 w-8 text-[#d4af37]" />
                </div>
                <h3
                  className="text-2xl font-medium text-white mb-4 tracking-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Artisan Coffee
                </h3>
                <p
                  className="text-slate-300 leading-relaxed"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Expertly crafted beverages using premium beans from around the world.
                </p>
              </div>
            </Card>

            <Card
              className="p-8 border border-slate-800 hover:border-[#d4af37]/50 transition-all duration-500 hover:shadow-xl rounded-xl bg-slate-950"
              data-testid="feature-card-gourmet-food"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-[#d4af37]/10 mb-6">
                  <Sparkles className="h-8 w-8 text-[#d4af37]" />
                </div>
                <h3
                  className="text-2xl font-medium text-white mb-4 tracking-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Gourmet Food
                </h3>
                <p
                  className="text-slate-300 leading-relaxed"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  A carefully curated menu featuring both local and international cuisines.
                </p>
              </div>
            </Card>

            <Card
              className="p-8 border border-slate-800 hover:border-[#d4af37]/50 transition-all duration-500 hover:shadow-xl rounded-xl bg-slate-950"
              data-testid="feature-card-all-day-dining"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-[#d4af37]/10 mb-6">
                  <Clock className="h-8 w-8 text-[#d4af37]" />
                </div>
                <h3
                  className="text-2xl font-medium text-white mb-4 tracking-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  All-Day Dining
                </h3>
                <p
                  className="text-slate-300 leading-relaxed"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Open throughout the day to serve breakfast, lunch, dinner, and everything in between.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hospitality;

