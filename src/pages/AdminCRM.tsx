/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import LeadCRMInbox from '../components/LeadCRMInbox';
import SEO from '../components/SEO';

export default function AdminCRM() {
  const meta = {
    title: 'Lead CRM Portal & Sourcing Controls | Crotteau Auto Parts LLC',
    description: 'Admin desk to inspect, classify, route, and map lead inquiries captured from Southwest Florida visitors.',
    keywords: ['CRM portal', 'lead manager', 'procurement dashboard', 'CRM mappings']
  };

  return (
    <div className="bg-slate-950 min-h-screen py-12">
      <SEO meta={meta} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LeadCRMInbox />
      </div>
    </div>
  );
}
