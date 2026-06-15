import About from '../../pages-components/About';

export const metadata = {
  title: 'About Us',
  description: 'Learn about the legacy, values, and vision of Jagmal Group, building sustainable businesses since 1952.',
  alternates: {
    canonical: 'https://www.jagmal.com/about',
  },
};

export default function Page() {
  return <About />;
}
