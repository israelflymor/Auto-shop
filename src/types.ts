/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PartRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  vehicleYear: number;
  vehicleMake: string;
  vehicleModel: string;
  vin?: string;
  partNeeded: string;
  description: string;
  attachmentName?: string;
  submittedAt: string;
  status: 'Pending' | 'Sourced' | 'No Quote Available' | 'Completed';
  priority: 'Low' | 'Medium' | 'High';
}

export interface FleetInquiry {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  fleetSize: number;
  vehicleTypes: string[];
  currentChallenges: string;
  partsRequirements: string;
  notes?: string;
  submittedAt: string;
  status: 'New' | 'Qualified' | 'FollowUp' | 'Closed';
  priority: 'Low' | 'Medium' | 'High';
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Sourcing' | 'Fleet' | 'Shipping';
}

export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}
