import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Jagmal Group';
const DEFAULT_DESCRIPTION = 'Jagmal Group is a diversified business group operating in hospitality, logistics and construction across India.';

const ensureMetaTag = (selector, createAttributes) => {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');
    Object.entries(createAttributes).forEach(([key, value]) => tag.setAttribute(key, value));
    document.head.appendChild(tag);
  }

  return tag;
};

export const SEO = ({ title, description = DEFAULT_DESCRIPTION, path }) => {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    ensureMetaTag('meta[name="description"]', { name: 'description' }).setAttribute('content', description);
    ensureMetaTag('meta[property="og:title"]', { property: 'og:title' }).setAttribute('content', fullTitle);
    ensureMetaTag('meta[property="og:description"]', { property: 'og:description' }).setAttribute('content', description);
    ensureMetaTag('meta[property="og:url"]', { property: 'og:url' }).setAttribute('content', `https://jagmal.com${path || location.pathname}`);
    ensureMetaTag('meta[name="twitter:title"]', { name: 'twitter:title' }).setAttribute('content', fullTitle);
    ensureMetaTag('meta[name="twitter:description"]', { name: 'twitter:description' }).setAttribute('content', description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://jagmal.com${path || location.pathname}`);
  }, [description, location.pathname, path, title]);

  return null;
};

export default SEO;