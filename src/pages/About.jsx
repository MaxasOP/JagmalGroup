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
            backgroundImage: `url('/images/jimg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/40"></div>
        </div>
      </section>



      {/* Founder Spotlight */}

      <section className="py-20 md:py-24 bg-slate-900" data-testid="founder-section">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <img
                src="/images/jagmal.png"
                alt="Raja Jagmal Chauhan"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mb-6 mx-auto md:mx-0 border border-slate-800 shadow-lg"
              />
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37] mb-4 font-medium">
                Founder Legacy
              </p>
              <h2
                className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
                data-testid="founder-heading"
              >
                Jagmal Raja Chauhan
              </h2>
              <a
                href="https://en.wikipedia.org/wiki/Jagmal_Raja_Chauhan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-[#d4af37] hover:text-[#f0c75e] transition-colors duration-300 mb-6"
              >
                View Wikipedia profile
              </a>
              <p
                className="text-lg text-slate-300 leading-relaxed mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Jagmal Raja Chauhan, born in 1887 in Nagher, Kutch, is the founding figure behind the legacy that became Jagmal Group. He began working in railway contracting at an early age and went on to build a reputation as a railway contractor, industrialist, engineer, and philanthropist.
              </p>
              <p
                className="text-lg text-slate-300 leading-relaxed"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                From railways and bridges to glass, mining, aviation, and public welfare, his work established the entrepreneurial foundation and values that continue to shape the group today.
              </p>
            </div>
            <Card className="p-8 md:p-10 border border-slate-800 rounded-xl bg-slate-950 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-lg bg-slate-900 border border-slate-800">
                  <p className="text-sm text-[#d4af37] uppercase tracking-wider mb-2">Born</p>
                  <p className="text-white text-lg font-medium">1887, Nagher, Kutch</p>
                </div>
                <div className="p-5 rounded-lg bg-slate-900 border border-slate-800">
                  <p className="text-sm text-[#d4af37] uppercase tracking-wider mb-2">Known For</p>
                  <p className="text-white text-lg font-medium">Railways, industrialist, airline owner, philanthropist</p>
                </div>
                <div className="p-5 rounded-lg bg-slate-900 border border-slate-800 sm:col-span-2">
                  <p className="text-sm text-[#d4af37] uppercase tracking-wider mb-2">Legacy</p>
                  <p className="text-slate-300 leading-relaxed">
                    He helped establish a broad base of enterprise and civic contribution that still informs the group’s identity and ambition.
                  </p>
                </div>
              </div>
            </Card>
          </div>
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
                We envision a future where Jagmal Group is synonymous with quality, trust, and excellence, building on the foundation laid by Jagmal Raja Chauhan and contributing meaningfully to the communities we serve.
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

      {/* Partners Section */}
      <section className="py-12 md:py-16 bg-slate-900" data-testid="partners-section">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-8">
            <h3 className="text-sm uppercase tracking-[0.3em] text-[#d4af37] mb-2 font-medium">Collaborations</h3>
            <h2 className="text-3xl md:text-4xl font-semibold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Our Partners</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="p-6 rounded-lg bg-slate-800 border border-slate-700 text-center flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] font-semibold">SBI</div>
              <p className="text-sm text-[#d4af37] uppercase mb-0">Lending Partner</p>
              <p className="text-white font-medium">State Bank of India</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800 border border-slate-700 text-center flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] font-semibold">HVS</div>
              <p className="text-sm text-[#d4af37] uppercase mb-0">Hospitality Partner</p>
              <p className="text-white font-medium">HVS</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800 border border-slate-700 text-center flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] font-semibold">AN</div>
              <p className="text-sm text-[#d4af37] uppercase mb-0">Property Consultant</p>
              <p className="text-white font-medium">Anarock</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800 border border-slate-700 text-center flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] font-semibold">IC</div>
              <p className="text-sm text-[#d4af37] uppercase mb-0">Architectural Consultant</p>
              <p className="text-white font-medium">Incubis Consultants</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

