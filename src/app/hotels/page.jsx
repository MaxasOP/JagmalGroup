import Hotels from '../../pages-components/Hotels';

export const metadata = {
  title: 'Hotels & Estates',
  description: 'Luxury hospitality destinations and premium accommodations managed by Jagmal Group.',
  alternates: {
    canonical: 'https://www.jagmal.com/hotels',
  },
};

export default function Page() {
  return <Hotels />;
}
