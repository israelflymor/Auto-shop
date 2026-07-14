/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FaqItem, SeoMetadata } from '../types';

export const BUSINESS_INFO = {
  name: 'Crotteau Auto Parts LLC',
  shortName: 'Crotteau Auto Parts',
  location: 'Punta Gorda, Florida',
  servingRegion: 'Charlotte County & National Sourcing Network',
  phone: '(941) 555-0190',
  email: 'info@crotteauautoparts.com',
  hours: 'Mon - Fri: 8:00 AM - 5:00 PM EST, Sat: By Appointment Only',
  address: '28200 Bermont Road, Unit 16B, Punta Gorda, FL 33982',
  foundingYear: 2024,
  primaryGoal: 'Connecting vehicle owners, fleets, and repair shops with hard-to-find components and premium consulting services.',
};

export const SERVICES = [
  {
    id: 'hard-to-find',
    title: 'Hard-to-Find Procurement',
    shortDesc: 'Specialized global sourcing for obsolete, vintage, or backordered automotive components.',
    fullDesc: 'When local parts stores say "unavailable," our global supply network steps in. We track down legacy parts, out-of-production OEM components, and international imports to get your project or customer vehicle back on the road.',
    features: [
      'Access to international salvage & distributor networks',
      'Interstate parts matching engine',
      'Obsolete OEM verification & quality inspections',
      'Fast-track freight forwarding for heavy components'
    ],
    cta: 'Request Obsolete Part'
  },
  {
    id: 'oem-aftermarket',
    title: 'OEM & Aftermarket Sourcing',
    shortDesc: 'Precision component sourcing matching factory standards or high-performance aftermarket requirements.',
    fullDesc: 'We bridge the gap between expensive dealership markup and low-grade replica parts. Our sourcing professionals find genuine OEM parts or premium certified aftermarket equivalents at competitive commercial rates.',
    features: [
      'CAPA certified aftermarket alternatives',
      'Tier 1 direct manufacturing partnerships',
      'VIN-matched accuracy assurance',
      'Bulk wholesale rates for commercial shops'
    ],
    cta: 'Sourcing Inquiry'
  },
  {
    id: 'automotive-consulting',
    title: 'Automotive Parts Consulting',
    shortDesc: 'Technical parts matching, diagnostics support, and component lifespan analysis.',
    fullDesc: 'Avoid costly mis-ordering and fitment errors. We provide pre-purchase consulting, compatibility matching, and custom build specifications for repair professionals and individual collectors alike.',
    features: [
      'Detailed fitment verification diagnostics',
      'Sourcing cost-benefit analysis',
      'Restoration parts compatibility research',
      'Material certification auditing'
    ],
    cta: 'Consult with an Expert'
  }
];

export const FLEET_SOLUTIONS = {
  overview: 'For commercial fleets, downtime equals lost revenue. Crotteau Auto Parts LLC provides prioritized procurement, consolidated billing, and dedicated parts advisors to keep your light-duty, heavy-duty, or specialty vehicles running 24/7.',
  benefits: [
    {
      title: 'Dedicated Parts Advisor',
      desc: 'One point of contact who knows your fleet composition, service history, and budget targets.'
    },
    {
      title: 'High-Priority Dispatch',
      desc: 'Fleet orders bypass general queues with expedited logistics options and rapid local delivery.'
    },
    {
      title: 'Custom Parts Staging',
      desc: 'We store common replacement items (brakes, filters, belts) specifically for your fleet in our regional hub.'
    },
    {
      title: 'Consolidated Billing',
      desc: 'Custom corporate credit accounts, transparent parts manifests, and predictable commercial terms.'
    }
  ],
  vehicleTypes: [
    'Commercial Delivery Vans',
    'Municipal Service Vehicles',
    'Contractor Trucks & Haulers',
    'Specialty Material Handlers',
    'Corporate Sedans & SUVs'
  ]
};

export const FAQS: FaqItem[] = [
  {
    question: 'How does Crotteau Auto Parts LLC find parts that are backordered nationwide?',
    answer: 'We utilize private dealer networks, national auto salvage exchanges, and overseas Tier 1 distributors that are not accessible to the general public. Through our advanced sourcing protocols, we can locate new old stock (NOS) and OEM-surplus parts worldwide.',
    category: 'Sourcing'
  },
  {
    question: 'Is Crotteau Auto Parts LLC an e-commerce store with an online shopping cart?',
    answer: 'No. We are a high-touch, professional parts procurement and consulting firm. Instead of browsing a database of unverified stock, you tell us what you need, and our experts physically locate, inspect, and quote the exact components to ensure perfect fitment and zero return hassle.',
    category: 'General'
  },
  {
    question: 'What is your turnaround time for a parts quote?',
    answer: 'Most standard and certified aftermarket quotes are returned within 2 to 4 business hours. Extremely rare, vintage, or international parts can take up to 24 hours as we verify physical availability and negotiate shipping rates with global partners.',
    category: 'General'
  },
  {
    question: 'Do you offer priority service or commercial accounts for fleets?',
    answer: 'Yes, we provide specialized Fleet Solutions. Commercial fleets of any size in the Southwest Florida region and nationwide can access dedicated parts advisors, priority dispatch, custom billing options, and bulk parts staging.',
    category: 'Fleet'
  },
  {
    question: 'Do you ship parts directly to my mechanic or home?',
    answer: 'Yes. We ship nationwide using major freight and parcel carriers (UPS, FedEx, DHL, and local couriers). We can ship directly to your residence, business, or your designated repair facility in Punta Gorda or elsewhere.',
    category: 'Shipping'
  },
  {
    question: 'How do you guarantee that a part will fit my vehicle correctly?',
    answer: 'We require and verify the vehicle\'s 17-digit VIN (Vehicle Identification Number) for every critical quote. This lets us run the part numbers against official manufacturer build sheets to ensure 100% mechanical and electronic compatibility.',
    category: 'Sourcing'
  }
];

export const BRAND_STYLE_GUIDE = {
  mission: 'To eliminate automotive downtime and fitment errors through precision parts engineering consulting and dedicated procurement logistics.',
  vision: 'To be the nation\'s most reliable specialized auto parts partner for individual owners, fleet operators, and restoration projects.',
  personality: ['Reliable', 'Helpful', 'Clean', 'Modern', 'Authoritative', 'Technical'],
  voice: 'Direct, clear, and highly knowledgeable. We speak with automotive expertise, avoiding marketing fluff, hype, or generic retail jargon.',
  palette: {
    primary: { name: 'Titanium Charcoal Black', hex: '#121214', rgb: '18, 18, 20', desc: 'The base for sleek dark grey, strength, and high-end precision.' },
    secondary: { name: 'Automotive Amber', hex: '#f59e0b', rgb: '245, 158, 11', desc: 'Used sparingly for action states, highlights, and warning borders.' },
    neutralDark: { name: 'Chassis Charcoal', hex: '#1e293b', rgb: '30, 41, 59', desc: 'Body text and secondary layout panels.' },
    neutralLight: { name: 'Clean Fender Gray', hex: '#f8fafc', rgb: '248, 250, 252', desc: 'Page backgrounds and subtle card shading.' },
    success: { name: 'Optimal Green', hex: '#10b981', rgb: '16, 185, 129', desc: 'Indicates verified fits, completed quotes, and system health.' }
  },
  typography: {
    headers: { family: 'Inter / System Sans', style: 'Tracking-tight, medium/semibold weights for heavy structural hierarchy.' },
    data: { family: 'JetBrains Mono', style: 'Used for VIN numbers, part IDs, quote references, and technical parameters to indicate diagnostic precision.' }
  },
  doDont: {
    dos: [
      'Always prompt for the 17-character VIN when sourcing powertrain or electrical parts.',
      'Show clear, transparent response timelines (e.g., "Quotes in 2-4 hours").',
      'Keep visual layouts clean and spacious, emphasizing single-focus fields.',
      'Provide immediate inline confirmation with a physical quote ticket number upon request submission.'
    ],
    donts: [
      'Do not simulate real-time credit card checkouts; we are direct-consultation billing only.',
      'Do not display unverified inventory numbers or fake "Only 1 Left!" urgency indicators.',
      'Do not use low-contrast text that compromises accessibility.'
    ]
  }
};

export const SEO_BLUEPRINT: Record<string, SeoMetadata> = {
  home: {
    title: 'Expert Automotive Parts Sourcing | Crotteau Auto Parts LLC Punta Gorda',
    description: 'Crotteau Auto Parts LLC in Punta Gorda, FL offers expert OEM, aftermarket, and hard-to-find auto parts sourcing and fleet consultation. Get a reliable, custom quote in 2 hours.',
    keywords: ['auto parts Punta Gorda', 'hard to find car parts', 'OEM auto parts Florida', 'fleet parts supply', 'automotive parts consulting', 'VIN match car parts']
  },
  about: {
    title: 'About Crotteau Auto Parts LLC | Punta Gorda Parts Consultants',
    description: 'Learn how Crotteau Auto Parts LLC sources hard-to-find, obsolete, and heavy fleet components from our Punta Gorda, Florida headquarters. Built on trust and absolute accuracy.',
    keywords: ['Crotteau Auto Parts history', 'automotive logistics Florida', 'VIN verification specialists', 'about Crotteau parts']
  },
  sourcing: {
    title: 'OEM & Hard-To-Find Parts Sourcing | Crotteau Auto Parts LLC',
    description: 'Overcome backorders. We source obsolete, international import, and certified aftermarket parts with 100% fitment guarantee based on your vehicle VIN.',
    keywords: ['obsolete car parts finder', 'backordered auto parts', 'vintage car parts sourcing', 'certified aftermarket parts']
  },
  fleet: {
    title: 'Commercial Fleet Parts Management Solutions | Southwest Florida',
    description: 'Maximize fleet uptime. Custom corporate accounts, priority parts sourcing, and dedicated parts advisers for commercial delivery and service vehicles.',
    keywords: ['fleet parts management', 'commercial delivery parts supply', 'bulk auto parts Florida', 'fleet repair logistics']
  },
  request: {
    title: 'Submit a Parts Sourcing Request | Get a Custom Quote',
    description: 'Need a rare, OEM, or aftermarket part? Complete our secure, 100% verified parts sourcing form with your VIN. Receive professional pricing in 2-4 hours.',
    keywords: ['request car part quote', 'find rare car parts', 'submit VIN check', 'auto parts request Florida']
  },
  faq: {
    title: 'Frequently Asked Questions | Crotteau Auto Parts LLC Sourcing Help',
    description: 'Answers to FAQs regarding parts turnaround times, shipping across Florida, VIN validation, and fleet procurement arrangements with Crotteau Auto Parts LLC.',
    keywords: ['auto parts sourcing FAQ', 'how long do parts quotes take', 'Punta Gorda parts pickup', 'VIN validation questions']
  },
  contact: {
    title: 'Contact Crotteau Auto Parts LLC | Punta Gorda, FL Office',
    description: 'Get in touch with Crotteau Auto Parts LLC. Located in Punta Gorda, Florida. Call, email, or stop by to consult with an expert parts adviser.',
    keywords: ['Crotteau Auto Parts phone number', 'Punta Gorda auto parts contact', 'Crotteau parts email']
  }
};
