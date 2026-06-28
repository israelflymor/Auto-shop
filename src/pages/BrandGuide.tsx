/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import BrandStyleGuidePreview from '../components/BrandStyleGuidePreview';
import SEO from '../components/SEO';

export default function BrandGuide() {
  const meta = {
    title: 'Brand Guidelines & Design Tokens | Crotteau Auto Parts LLC',
    description: 'Corporate brand specifications, typography scales, palettes, and stationery designs for Crotteau Auto Parts LLC.',
    keywords: ['brand style guide auto parts', 'corporate identity Florida', 'design system parameters']
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <SEO meta={meta} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <BrandStyleGuidePreview />
      </div>
    </div>
  );
}
