/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { SeoMetadata } from '../types';

interface SeoProps {
  meta: SeoMetadata;
}

export default function SEO({ meta }: SeoProps) {
  useEffect(() => {
    // Document Title
    document.title = meta.title;

    // Meta Description
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute('content', meta.description);

    // Meta Keywords
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', meta.keywords.join(', '));

    // OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', meta.title);

    // OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', meta.description);

    // OpenGraph Type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', 'website');

    // Local SEO Schema Markup (JSON-LD)
    let schemaScript = document.getElementById('local-seo-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('id', 'local-seo-schema');
      document.head.appendChild(schemaScript);
    }

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'AutoPartsStore',
      'name': 'Crotteau Auto Parts LLC',
      'image': 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=800',
      '@id': 'https://crotteauautoparts.com/#local-business',
      'url': 'https://crotteauautoparts.com',
      'telephone': '+1-941-555-0190',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Punta Gorda',
        'addressLocality': 'Punta Gorda',
        'addressRegion': 'FL',
        'postalCode': '33950',
        'addressCountry': 'US'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 26.9298,
        'longitude': -82.0454
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        'opens': '08:00',
        'closes': '17:00'
      },
      'sameAs': [
        'https://www.facebook.com/crotteauautoparts',
        'https://www.linkedin.com/company/crotteau-auto-parts'
      ],
      'description': 'Premium auto parts sourcing & consulting in Punta Gorda, Florida. Experts in sourcing hard-to-find components and fleet logistics solutions.'
    };

    schemaScript.textContent = JSON.stringify(localBusinessSchema);

    return () => {
      // Cleanup schema on unmount to keep DOM clean
      const existingSchema = document.getElementById('local-seo-schema');
      if (existingSchema) {
        existingSchema.remove();
      }
    };
  }, [meta]);

  return null;
}
