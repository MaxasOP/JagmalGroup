import '../styles/index.css';
import '../styles/App.css';
import { Navbar } from '../components/Navbar';
import { Toaster } from '../components/ui/sonner';
import { Playfair_Display, Manrope } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata = {
  metadataBase: new URL('https://www.jagmal.com'),
  title: {
    default: 'Jagmal Group - Hospitality, Construction & Logistics',
    template: '%s | Jagmal Group'
  },
  description: 'Jagmal Group is a diversified business group operating in hospitality, logistics and construction across India.',
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.jagmal.com/',
    siteName: 'Jagmal Group',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: '/',
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.jagmal.com/#organization",
      "name": "Jagmal Group",
      "url": "https://www.jagmal.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.jagmal.com/favicon-32x32.png"
      },
      "sameAs": [
        "https://en.wikipedia.org/wiki/Jagmal_Raja_Chauhan"
      ],
      "description": "Jagmal Group is a diversified business group operating in hospitality, logistics and construction across India."
    },
    {
      "@type": "WebSite",
      "@id": "https://www.jagmal.com/#website",
      "url": "https://www.jagmal.com/",
      "name": "Jagmal Group",
      "description": "Jagmal Group - Hospitality, Construction & Logistics",
      "publisher": {
        "@id": "https://www.jagmal.com/#organization"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://www.jagmal.com/#navigation",
      "name": "Jagmal Group Site Navigation",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Home",
          "url": "https://www.jagmal.com/"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "About Us",
          "url": "https://www.jagmal.com/about"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Hotels",
          "url": "https://www.jagmal.com/hotels"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Logistics & Industrial Parks",
          "url": "https://www.jagmal.com/logistics"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "Hospitality",
          "url": "https://www.jagmal.com/hospitality"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 6,
          "name": "Precast & 3D Printing",
          "url": "https://www.jagmal.com/precast"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 7,
          "name": "Leadership",
          "url": "https://www.jagmal.com/leadership"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 8,
          "name": "Philanthropy",
          "url": "https://www.jagmal.com/philanthropy"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 9,
          "name": "Contact Us",
          "url": "https://www.jagmal.com/contact"
        }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <div className="App">
          <Navbar />
          {children}
          <Toaster position="top-center" richColors theme="dark" />
        </div>
      </body>
    </html>
  );
}
