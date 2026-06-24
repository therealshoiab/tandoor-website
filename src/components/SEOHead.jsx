import { useEffect } from 'react';

export default function SEOHead({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Tandoor Restaurant Srinagar`;
    }
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }

    // Dynamic Canonical URL Injection
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const cleanUrl = window.location.origin + window.location.pathname;
    canonical.setAttribute('href', cleanUrl);
  }, [title, description]);

  return null;
}
