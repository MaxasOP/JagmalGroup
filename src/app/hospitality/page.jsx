import Hospitality from '../../pages-components/Hospitality';

export const metadata = {
  title: 'Hospitality Division',
  description: 'World-class restaurants, wedding venues, and hospitality management services by Jagmal Group.',
  alternates: {
    canonical: 'https://www.jagmal.com/hospitality',
  },
};

export default function Page() {
  return <Hospitality />;
}
