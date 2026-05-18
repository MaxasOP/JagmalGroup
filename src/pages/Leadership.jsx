import { Card } from '../components/ui/card';
import { Linkedin, Mail, Instagram } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Leadership = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Jagmal Leadership | Chairman & Management"
        description="Meet the leadership guiding Jagmal Group's growth across hospitality, logistics, and construction."
        path="/leadership"
      />
      {/* Hero Banner */}
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        data-testid="leadership-hero-section"
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
            data-testid="leadership-page-heading"
          >
            Our <span className="text-[#d4af37]">Leadership</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-slate-200 leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Visionaries Driving Excellence and Innovation
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 md:py-32 bg-slate-950" data-testid="leadership-team-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Card
              className="p-12 md:p-16 border border-slate-800 hover:border-[#d4af37]/50 transition-all duration-500 hover:shadow-2xl rounded-xl bg-slate-950"
              data-testid="leadership-card-shivam-chauhan"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8 ml-4">
                  <img
                    src="/images/Leader.jpeg"
                    alt="Shivam Chauhan"
                    className="w-48 h-48 rounded-full object-cover border-4 border-[#d4af37]/20 shadow-xl"
                  />
                </div>
                <h2
                  className="text-4xl md:text-5xl font-semibold text-white mb-3 tracking-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Shivam Chauhan
                </h2>
                <div className="inline-block px-6 py-2 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium mb-8">
                  Chairman & MD
                </div>
                <p
                  className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-8"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Mr. Chauhan, a graduate of Mithibai College and a UC Irvine dropout, serves as Chairman and MD of Jagmal Group. With a keen eye for emerging opportunities and a dedication to sustainable business practices, he leads the team in building a diversified portfolio that creates lasting value for stakeholders and communities alike.
                </p>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/shivam-chauhan-880a98198?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-800 hover:bg-[#d4af37]/10 transition-colors duration-300"
                    data-testid="linkedin-link"
                  >
                    <Linkedin className="h-5 w-5 text-slate-300" />
                  </a>
                  <a
                    href="mailto:Chauhanshivam.pc@gmail.com"
                    className="p-3 rounded-full bg-slate-800 hover:bg-[#d4af37]/10 transition-colors duration-300"
                    data-testid="email-link"
                  >
                    <Mail className="h-5 w-5 text-slate-300" />
                  </a>
                  <a
                    href="https://www.instagram.com/shivaaaamchauhan?igsh=MTBubnE1NnYyaHJ0Zg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-800 hover:bg-[#d4af37]/10 transition-colors duration-300"
                    data-testid="instagram-link"
                  >
                    <Instagram className="h-5 w-5 text-slate-300" />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Leadership;

