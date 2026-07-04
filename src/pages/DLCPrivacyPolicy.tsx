/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AlertCircle, Lock, Eye, Phone, CheckCircle, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import SEO from '../components/SEO';

export default function DLCPrivacyPolicy() {
  const currentYear = new Date().getFullYear();

  const meta = {
    title: '10DLC Privacy Policy | Crotteau Auto Parts LLC',
    description: 'Crotteau Auto Parts LLC 10DLC (Direct Long Code) privacy policy. Learn how we handle SMS messaging, phone communications, and customer data when using text message services.',
    keywords: ['10DLC privacy', 'SMS privacy', 'Direct Long Code', 'messaging compliance', 'TCPA compliance']
  };

  return (
    <div className="bg-slate-50 min-h-screen text-left">
      <SEO meta={meta} />

      {/* Page Header */}
      <section className="bg-[#121214] text-white py-12 text-center border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            10DLC Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Direct Long Code Messaging & SMS Communication Practices
          </p>
          <p className="text-xs text-slate-500 font-mono">
            Last Updated: {currentYear} | Crotteau Auto Parts LLC
          </p>
        </div>
      </section>

      {/* Content Container */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-sm space-y-8">
          
          {/* Intro Section */}
          <div className="flex gap-4 border-b border-slate-100 pb-6">
            <AlertCircle className="w-8 h-8 text-amber-500 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-base font-bold text-slate-950 font-mono uppercase tracking-tight">Important Notice: Direct Long Code (10DLC) Messaging</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                Crotteau Auto Parts LLC may use Direct Long Code (10DLC) telephone numbers to deliver transactional SMS messages, parts availability alerts, and fleet logistics notifications. This policy outlines how we collect, use, and protect your phone number and related communication preferences when using our 10DLC messaging service.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-950 uppercase font-mono flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-500" />
              1. What is 10DLC Messaging?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              10DLC (Direct Long Code) is a telecommunications standard that allows businesses to send application-to-person (A2P) SMS messages using standard telephone numbers. Unlike short codes (5-6 digits), 10DLC uses regular phone numbers to deliver transactional communications, alerts, and service notifications.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When you opt-in to receive messages from Crotteau Auto Parts LLC via our contact forms, parts request submissions, or account registrations, you may consent to receive SMS messages on your registered phone number using our 10DLC system.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-950 uppercase font-mono flex items-center gap-2">
              <Eye className="w-4 h-4 text-amber-500" />
              2. Types of Messages You May Receive
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              By providing your phone number, you authorize Crotteau Auto Parts LLC to send you the following categories of SMS messages:
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600">
              <div className="bg-slate-50 p-3 rounded border-l-4 border-amber-500">
                <strong className="block mb-1">Transactional Messages</strong>
                <span>Parts request confirmations, order status updates, pricing quotes, and delivery notifications.</span>
              </div>
              <div className="bg-slate-50 p-3 rounded border-l-4 border-amber-500">
                <strong className="block mb-1">Service Alerts</strong>
                <span>Critical fleet maintenance notifications, urgent part availability alerts, and time-sensitive sourcing information.</span>
              </div>
              <div className="bg-slate-50 p-3 rounded border-l-4 border-amber-500">
                <strong className="block mb-1">Administrative Messages</strong>
                <span>Account verification codes, authentication tokens, and account-related security notifications.</span>
              </div>
              <div className="bg-slate-50 p-3 rounded border-l-4 border-amber-500">
                <strong className="block mb-1">Marketing Communications (Optional)</strong>
                <span>Special promotions, seasonal discounts, and new service announcements (only if you explicitly consent).</span>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-950 uppercase font-mono flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-500" />
              3. Phone Number Collection & Consent
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We collect your phone number through the following methods:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 pl-2 space-y-2">
              <li><strong>Parts Request Forms:</strong> When you submit a parts sourcing request, we collect your phone number to facilitate rapid communication with your Parts Advisor.</li>
              <li><strong>Contact Forms:</strong> General inquiry submissions include an optional phone field to enable faster response times.</li>
              <li><strong>Account Registration:</strong> If you create an account to track fleet orders or recurring parts requests.</li>
              <li><strong>Call Routing:</strong> When you call our business line and opt-in verbally to receive text updates.</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">
              <strong>Affirmative Consent:</strong> By submitting a form that includes your phone number, you affirmatively consent to receive SMS communications from Crotteau Auto Parts LLC for order-related and service-related purposes. You will not be added to our 10DLC list without your explicit agreement.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-950 uppercase font-mono flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-500" />
              4. How We Use & Protect Your Phone Number
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>Use:</strong> Your phone number is used exclusively to deliver SMS communications related to your parts requests, fleet accounts, and service notifications. We do not sell, share, or distribute phone numbers to third parties for marketing purposes without your explicit consent.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">
              <strong>Protection:</strong> Your phone number is stored securely in our CRM system (HubSpot/Salesforce) and is protected by:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 pl-2 space-y-1 mt-2">
              <li>Industry-standard encryption protocols for data in transit and at rest.</li>
              <li>Restricted access controls — only authorized Parts Advisers and compliance staff can access phone records.</li>
              <li>Regular security audits and compliance verifications with TCPA regulations.</li>
              <li>Data retention policies that retain phone numbers only as long as necessary for service delivery.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-950 uppercase font-mono flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-500" />
              5. TCPA Compliance & Your Rights
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Crotteau Auto Parts LLC complies with the Telephone Consumer Protection Act (TCPA) and all applicable telecommunications regulations. As a recipient of 10DLC SMS messages, you have the following rights:
            </p>
            <div className="space-y-3 mt-3 text-xs sm:text-sm text-slate-600">
              <div>
                <strong className="text-slate-700">Opt-Out / STOP Commands:</strong>
                <p className="mt-1">You can stop receiving SMS messages at any time by replying "STOP" to any message we send. We will honor your request within 24 hours and cease all non-emergency communications to your phone number.</p>
              </div>
              <div>
                <strong className="text-slate-700">Help Requests:</strong>
                <p className="mt-1">Reply "HELP" to any SMS message to request additional information about our messaging service and how to contact our compliance team.</p>
              </div>
              <div>
                <strong className="text-slate-700">Do Not Call (DNC) Registry:</strong>
                <p className="mt-1">Crotteau Auto Parts LLC does not make unsolicited telemarketing calls. We honor registrations on the National Do Not Call Registry and will not contact numbers listed on this registry except for transactional or service-related purposes.</p>
              </div>
              <div>
                <strong className="text-slate-700">Carrier Fees:</strong>
                <p className="mt-1">Standard SMS rates may apply depending on your mobile carrier and plan. We are not responsible for carrier charges, though most transactional messages are free or included in standard messaging plans.</p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-950 uppercase font-mono">6. Marketing Communications & Additional Consent</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Promotional SMS messages (e.g., seasonal discounts, new service announcements) require separate, explicit opt-in consent beyond transactional communications. If you wish to receive marketing SMS from Crotteau Auto Parts LLC, we will send a confirmation message requesting your affirmative approval.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">
              You may change your marketing communication preferences at any time by:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 pl-2 space-y-1 mt-2">
              <li>Replying "OPT OUT" to marketing messages.</li>
              <li>Contacting our compliance team directly (see contact info below).</li>
              <li>Updating your preferences in your account dashboard if registered.</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-950 uppercase font-mono">7. Data Retention & Deletion</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We retain your phone number and associated SMS logs for the duration of your active business relationship with Crotteau Auto Parts LLC, typically between 3-7 years depending on regulatory requirements and the nature of your parts orders. After your account is closed or inactive, we will delete your phone number from our active 10DLC messaging system within 30 days.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">
              <strong>Right to Deletion:</strong> You may request immediate deletion of your phone number from our records at any time by contacting our Compliance Officer (see contact info below). We will confirm deletion within 5 business days.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-950 uppercase font-mono">8. Changes to This Policy</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Crotteau Auto Parts LLC may update this 10DLC Privacy Policy periodically to reflect regulatory changes, improved security practices, or operational modifications. We will notify you of any material changes by sending a notification SMS to your registered phone number at least 30 days before the change takes effect.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">
              Your continued use of our services after notification constitutes acceptance of the updated policy.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 border-t border-slate-200 pt-6">
            <h3 className="text-sm font-bold text-slate-950 uppercase font-mono">Privacy & Compliance Questions?</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If you have concerns regarding your phone number, SMS communications, TCPA compliance, or wish to exercise any rights under this policy, please contact our Compliance & Privacy Officer:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs font-mono text-slate-700 space-y-2 mt-4">
              <p><strong>Company:</strong> {BUSINESS_INFO.name}</p>
              <p><strong>Address:</strong> {BUSINESS_INFO.address}</p>
              <p><strong>Phone:</strong> {BUSINESS_INFO.phone}</p>
              <p><strong>Email:</strong> {BUSINESS_INFO.email}</p>
              <p className="pt-2 text-slate-500">Response timeframe: 5 business days</p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
            <p className="text-xs text-amber-900 font-mono">
              <strong>Note:</strong> This 10DLC Privacy Policy supplements our main Privacy Policy and Terms of Service. In the event of any conflict, the more restrictive provision will apply to protect your privacy rights.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
