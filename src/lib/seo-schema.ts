/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BUSINESS_INFO } from '../data/content';
import { FaqItem } from '../types';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': BUSINESS_INFO.name,
    'description': BUSINESS_INFO.primaryGoal,
    'url': window.location.origin,
    'telephone': BUSINESS_INFO.phone,
    'email': BUSINESS_INFO.email,
    'address': {
      '@type': 'PostalAddress',
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
    'openingHoursSpecification': [
      {
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
      }
    ]
  };
}

export function getFAQPageSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}
