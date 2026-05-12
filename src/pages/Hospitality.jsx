import { Card } from '../components/ui/card';
import { MapPin, BedDouble, Users, Sparkles } from 'lucide-react';
import Footer from '../components/Footer';

const Hospitality = () => {
const hotels = [
    {
      name: 'Hotel Ginger',
      rooms: 100,
      status: 'Upcoming',
      description: 'A contemporary smart hotel designed for the modern traveler, offering comfort and convenience.',
      location: 'UP',
      features: ['Modern Amenities', 'Smart Rooms', 'Business Center', 'Restaurant & Cafe'],
      image: '/images/Ginger.jpg',
    },
    {
      name: 'Sterling Hotel',
      rooms: 57,
      status: 'Upcoming',
      description: 'An upscale resort offering premium experiences and world-class facilities.',
      location: 'UP',
      features: ['Luxury Suites', 'Swimming Pool', 'Spa & Wellness', 'Fine Dining'],
      image: '/images/Sterling2.png',
    },
    {
      name: 'Indian Culture Hostels',
      rooms: null,
      status: 'Available',
      description:
        'A cozy, budget-friendly hostel in Tapovan, Rishikesh near the Ganges and Laxman Jhula, popular with yoga enthusiasts and backpackers. Offers a friendly, community atmosphere with a rooftop common area and easy access to riverfront activities and yoga centers.',
      features: ['Backpacker Friendly', 'Rooftop Views', 'Yoga-Friendly', 'River Access'],
      image: '/images/Indian.jpg',
      location: 'Tapovan, Rishikesh',
    },
  ];

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
            backgroundImage: `url('/images/luxury-hotel.jpg')`,
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
            <span className="text-[#d4af37]">Raja Jagmal</span> Hospitality
          </h1>
          <p
            className="text-xl md:text-2xl text-slate-200 leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Redefining Luxury and Comfort in Hospitality
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 md:py-32 bg-slate-950" data-testid="hospitality-portfolio-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
              data-testid="portfolio-heading"
            >
              Our Hotel Portfolio
            </h2>
            <p
              className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Discover our upcoming properties, designed to offer exceptional experiences for every traveler.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {hotels.map((hotel, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-xl border border-slate-800 hover:border-[#d4af37]/50 transition-all duration-500 hover:shadow-2xl bg-slate-950"
                data-testid={`hotel-card-${hotel.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 rounded-full bg-[#d4af37] text-white text-sm font-medium">
                      {hotel.status}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3
                    className="text-3xl font-medium text-white mb-4 tracking-tight"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {hotel.name}
                  </h3>
                  <div className="flex items-center space-x-6 mb-6 text-slate-400">
                    {hotel.rooms ? (
                      <div className="flex items-center">
                        <BedDouble className="h-5 w-5 mr-2 text-[#d4af37]" />
                        <span className="text-sm font-medium">{hotel.rooms} Rooms</span>
                      </div>
                    ) : null}
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-[#d4af37]" />
                      <span className="text-sm font-medium">{hotel.location}</span>
                    </div>
                  </div>
                  <p
                    className="text-slate-300 leading-relaxed mb-6"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {hotel.description}
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {hotel.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <Sparkles className="h-4 w-4 text-[#d4af37] mr-2" />
                          <span className="text-sm text-slate-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Hospitality;

