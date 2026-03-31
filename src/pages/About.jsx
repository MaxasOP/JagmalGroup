import { Award, Target, Heart, Shield } from 'lucide-react';
import { Card } from '../components/ui/card';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every endeavor, setting the highest standards across all our business verticals.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Our commitment to ethical business practices and transparency forms the foundation of our success.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace innovation and continuously adapt to meet the evolving needs of our customers and partners.',
    },
    {
      icon: Shield,
      title: 'Sustainability',
      description: 'Building for the future means creating sustainable solutions that benefit society and the environment.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        data-testid="about-hero-section"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/images/corporate-abstract.jpg')`,
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
            data-testid="about-page-heading"
          >
            About <span className="text-[#d4af37]">Jagmal Group</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-slate-200 leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            A Legacy of Excellence Spanning Multiple Industries
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 md:py-32 bg-slate-950" data-testid="vision-section">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2
                className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
                data-testid="vision-heading"
              >
                Our Vision
              </h2>
              <p
                className="text-lg text-slate-300 leading-relaxed mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                To be a leading diversified conglomerate that creates lasting value through innovative solutions, exceptional service, and sustainable growth across hospitality, logistics, and lifestyle sectors.
              </p>
              <p
                className="text-lg text-slate-300 leading-relaxed"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                We envision a future where Jagmal Group is synonymous with quality, trust, and excellence, setting industry benchmarks and contributing meaningfully to the communities we serve.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/luxury-hotel.jpg"
                alt="Jagmal Group Vision"
                className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        className="py-20 md:py-32 bg-slate-900"
        data-testid="values-section"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
              data-testid="values-heading"
            >
              Our Core Values
            </h2>
            <p
              className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              The principles that guide our journey and define our character as an organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-8 border border-slate-800 hover:border-[#d4af37]/50 transition-all duration-500 hover:shadow-xl rounded-xl bg-slate-950"
                  data-testid={`value-card-${value.title.toLowerCase()}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-[#d4af37]/10 mb-6">
                      <Icon className="h-8 w-8 text-[#d4af37]" />
                    </div>
                    <h3
                      className="text-2xl font-medium text-white mb-4 tracking-tight"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {value.title}
                    </h3>
                    <p
                      className="text-slate-300 leading-relaxed"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {value.description}
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

export default About;

