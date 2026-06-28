/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ClipboardList, CheckCircle2, AlertCircle, Clock, Search, Shield, ChevronDown, RefreshCw, Trash2, Mail, Phone, Building2, Car } from 'lucide-react';
import { PartRequest, FleetInquiry } from '../types';

export default function LeadCRMInbox() {
  const [activeTab, setActiveTab] = useState<'parts' | 'fleet'>('parts');
  const [partsLeads, setPartsLeads] = useState<PartRequest[]>([]);
  const [fleetLeads, setFleetLeads] = useState<FleetInquiry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLead, setSelectedLead] = useState<PartRequest | FleetInquiry | null>(null);

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = () => {
    // Standard mock leads for demo representation
    const defaultParts: PartRequest[] = [
      {
        id: "PRQ-2026-001",
        name: "Arthur Pendelton",
        email: "arthur.p@outlook.com",
        phone: "(941) 555-4321",
        vehicleYear: 1987,
        vehicleMake: "Chevrolet",
        vehicleModel: "El Camino",
        vin: "1G1AW80H9HRXXXXXX",
        partNeeded: "OEM Rear Bed Chrome Molding Trim",
        description: "Need the complete 3-piece chrome trim surrounding the rear bed edge. Must be original GM New Old Stock (NOS) or absolute pristine original salvage. No replicas.",
        submittedAt: "2026-06-27T14:32:00Z",
        status: "Pending",
        priority: "High"
      },
      {
        id: "PRQ-2026-002",
        name: "Melissa Vance",
        email: "melissa.vance@techcorp.com",
        phone: "(941) 555-8712",
        vehicleYear: 2021,
        vehicleMake: "RAM",
        vehicleModel: "3500 HD Dually",
        vin: "3C6URRDL4MGXXXXXX",
        partNeeded: "Heavy Duty Sourced Transfer Case",
        description: "Looking for an OEM replacement transfercase, model BW4446. Backordered at local dealership for 4 months. Need it sourced immediately.",
        submittedAt: "2026-06-27T16:15:00Z",
        status: "Sourced",
        priority: "High"
      }
    ];

    const defaultFleet: FleetInquiry[] = [
      {
        id: "FLT-2026-001",
        companyName: "Suncoast Marine Logistics",
        contactName: "Captain Marcus Brody",
        email: "m.brody@suncoastmarinelogistics.com",
        phone: "(941) 555-7890",
        fleetSize: 18,
        vehicleTypes: ["Commercial Delivery Vans", "Contractor Trucks & Haulers"],
        currentChallenges: "Sourcing suspension systems and heavy brake components quickly. Local parts stores do not stock medium-duty components.",
        partsRequirements: "Consolidated commercial pricing, emergency 4-hour hot-shot parts delivery to shipyard, and credit terms setup.",
        submittedAt: "2026-06-27T11:05:00Z",
        status: "Qualified",
        priority: "High"
      }
    ];

    const storedParts = localStorage.getItem('crotteau_parts_leads');
    const storedFleet = localStorage.getItem('crotteau_fleet_leads');

    if (storedParts) {
      setPartsLeads(JSON.parse(storedParts));
    } else {
      localStorage.setItem('crotteau_parts_leads', JSON.stringify(defaultParts));
      setPartsLeads(defaultParts);
    }

    if (storedFleet) {
      setFleetLeads(JSON.parse(storedFleet));
    } else {
      localStorage.setItem('crotteau_fleet_leads', JSON.stringify(defaultFleet));
      setFleetLeads(defaultFleet);
    }
  };

  const handleStatusChange = (leadId: string, newStatus: any) => {
    if (activeTab === 'parts') {
      const updated = partsLeads.map(l => l.id === leadId ? { ...l, status: newStatus } : l);
      setPartsLeads(updated);
      localStorage.setItem('crotteau_parts_leads', JSON.stringify(updated));
      if (selectedLead && selectedLead.id === leadId) {
        setSelectedLead({ ...selectedLead, status: newStatus });
      }
    } else {
      const updated = fleetLeads.map(l => l.id === leadId ? { ...l, status: newStatus } : l);
      setFleetLeads(updated);
      localStorage.setItem('crotteau_fleet_leads', JSON.stringify(updated));
      if (selectedLead && selectedLead.id === leadId) {
        setSelectedLead({ ...selectedLead, status: newStatus });
      }
    }
  };

  const handleDelete = (leadId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("Are you sure you want to delete this lead?")) return;

    if (activeTab === 'parts') {
      const filtered = partsLeads.filter(l => l.id !== leadId);
      setPartsLeads(filtered);
      localStorage.setItem('crotteau_parts_leads', JSON.stringify(filtered));
    } else {
      const filtered = fleetLeads.filter(l => l.id !== leadId);
      setFleetLeads(filtered);
      localStorage.setItem('crotteau_fleet_leads', JSON.stringify(filtered));
    }

    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead(null);
    }
  };

  const clearAllLeads = () => {
    if (!confirm("Reset database to factory demo defaults?")) return;
    localStorage.removeItem('crotteau_parts_leads');
    localStorage.removeItem('crotteau_fleet_leads');
    loadLeads();
    setSelectedLead(null);
  };

  // Filter leads
  const filteredParts = partsLeads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.partNeeded.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.vehicleMake.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.vehicleModel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFleet = fleetLeads.filter(lead => 
    lead.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.contactName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'High':
        return <span className="bg-rose-50 border border-rose-200 text-rose-700 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider">High Priority</span>;
      case 'Medium':
        return <span className="bg-amber-50 border border-amber-200 text-amber-700 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider">Medium</span>;
      default:
        return <span className="bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider">Low</span>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Sourced':
      case 'Qualified':
        return <span className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-700 px-2 py-0.5 rounded text-xs font-semibold"><CheckCircle2 className="w-3 h-3" /> {status}</span>;
      case 'Pending':
      case 'New':
        return <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-700 px-2 py-0.5 rounded text-xs font-semibold"><Clock className="w-3 h-3 animate-pulse" /> {status}</span>;
      case 'No Quote Available':
      case 'Closed':
        return <span className="inline-flex items-center gap-1 bg-rose-50 border border-rose-200 text-rose-700 px-2 py-0.5 rounded text-xs font-semibold"><AlertCircle className="w-3 h-3" /> {status}</span>;
      default:
        return <span className="inline-flex items-center gap-1 bg-slate-100 border border-slate-200 text-slate-700 px-2 py-0.5 rounded text-xs font-semibold">{status}</span>;
    }
  };

  // Dynamic routing logic explanation
  const getRoutingDetails = (lead: any) => {
    if ('vin' in lead) {
      // It's a parts request
      const year = lead.vehicleYear;
      if (year < 1995) {
        return {
          queue: "Classic & Vintage Sourcing Desk",
          routingId: "ROUT-VNTG-339",
          handler: "Classic Sourcing Coordinator",
          rationale: "Automated routing triggered: OBD-1 or pre-OBD vehicle requiring local salvage networks and out-of-production catalog matching."
        };
      } else {
        return {
          queue: "Rapid OEM / Aftermarket Team",
          routingId: "ROUT-MODN-005",
          handler: "Certified Parts Sourcing Engineer",
          rationale: "Automated routing triggered: Standard OBD-2 vehicle. Sourcing protocol maps VIN directly to live API parts catalogs for rapid quotes."
        };
      }
    } else {
      // It's a fleet inquiry
      const size = lead.fleetSize;
      if (size >= 10) {
        return {
          queue: "Commercial Fleet Account Hub",
          routingId: "ROUT-FLT-ENT",
          handler: "Principal Corporate Sourcing Manager",
          rationale: "Enterprise Tier Triggered: Fleet size >= 10 vehicles. Routed for direct corporate credit setup, wholesale tiered pricing sheets, and custom local shipping."
        };
      } else {
        return {
          queue: "Local SME Commercial Desk",
          routingId: "ROUT-FLT-SME",
          handler: "SME Fleet Advisor",
          rationale: "SMB Tier Triggered: Fleet size < 10. Routed for rapid credit review and standard regional logistics matching."
        };
      }
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl font-sans">
      
      {/* CRM Header Panel */}
      <div className="border-b border-slate-800 bg-slate-950/60 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-500" />
            <h2 className="text-lg font-bold tracking-tight text-white font-mono uppercase">
              Lead CRM &amp; Sourcing Control Center
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Real-time local database of captured parts requests and commercial fleet inquiries from Punta Gorda website visitors.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={clearAllLeads}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 bg-slate-900 px-3 py-1.5 rounded transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Demo Data</span>
          </button>
        </div>
      </div>

      {/* Primary Subnavigation & Search */}
      <div className="border-b border-slate-800/80 bg-slate-950/20 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex bg-slate-950 rounded-lg p-1 w-full sm:w-auto border border-slate-800">
          <button
            onClick={() => { setActiveTab('parts'); setSelectedLead(null); }}
            className={`flex-1 sm:flex-none px-4 py-2 text-xs font-semibold rounded-md font-mono uppercase transition-all ${
              activeTab === 'parts' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Parts Requests ({partsLeads.length})
          </button>
          <button
            onClick={() => { setActiveTab('fleet'); setSelectedLead(null); }}
            className={`flex-1 sm:flex-none px-4 py-2 text-xs font-semibold rounded-md font-mono uppercase transition-all ${
              activeTab === 'fleet' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Fleet Inquiries ({fleetLeads.length})
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 pl-9 pr-4 text-xs text-slate-300 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>
      </div>

      {/* Main Panel Division */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        
        {/* Left Column: Leads List */}
        <div className="col-span-1 lg:col-span-5 border-r border-slate-800 overflow-y-auto max-h-[550px]">
          {activeTab === 'parts' ? (
            filteredParts.length === 0 ? (
              <div className="p-8 text-center text-slate-500">
                <ClipboardList className="w-10 h-10 mx-auto text-slate-700 mb-2" />
                <p className="text-sm font-semibold">No Parts Requests Found</p>
                <p className="text-xs mt-1">Submit a parts request from the customer form to view it in real-time.</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-800/60">
                {filteredParts.map((lead) => (
                  <div
                    key={lead.id}
                    onClick={() => setSelectedLead(lead)}
                    className={`p-4 hover:bg-slate-800/40 cursor-pointer transition-colors ${
                      selectedLead && selectedLead.id === lead.id ? 'bg-slate-800/60 border-l-4 border-amber-500' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-mono text-[11px] text-amber-500 font-bold">{lead.id}</div>
                      <div className="flex gap-1 items-center">
                        {getPriorityBadge(lead.priority)}
                        {getStatusBadge(lead.status)}
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-white mt-1.5">{lead.name}</h4>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5 font-mono">
                      {lead.vehicleYear} {lead.vehicleMake} {lead.vehicleModel}
                    </p>
                    <p className="text-xs text-slate-300 mt-1.5 line-clamp-2 italic bg-slate-950/40 p-2 rounded border border-slate-850">
                      &ldquo;{lead.partNeeded}&rdquo;
                    </p>
                    <div className="flex items-center justify-between mt-3 text-[10px] text-slate-500">
                      <span>{new Date(lead.submittedAt).toLocaleString()}</span>
                      <button
                        onClick={(e) => handleDelete(lead.id, e)}
                        className="text-slate-500 hover:text-rose-400 p-1 rounded transition-colors"
                        title="Delete Lead"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            filteredFleet.length === 0 ? (
              <div className="p-8 text-center text-slate-500">
                <ClipboardList className="w-10 h-10 mx-auto text-slate-700 mb-2" />
                <p className="text-sm font-semibold">No Fleet Inquiries Found</p>
                <p className="text-xs mt-1">Submit a commercial fleet request from the fleet page to view it in real-time.</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-800/60">
                {filteredFleet.map((lead) => (
                  <div
                    key={lead.id}
                    onClick={() => setSelectedLead(lead)}
                    className={`p-4 hover:bg-slate-800/40 cursor-pointer transition-colors ${
                      selectedLead && selectedLead.id === lead.id ? 'bg-slate-800/60 border-l-4 border-amber-500' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-mono text-[11px] text-amber-500 font-bold">{lead.id}</div>
                      <div className="flex gap-1 items-center">
                        {getPriorityBadge(lead.priority)}
                        {getStatusBadge(lead.status)}
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-white mt-1.5 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-slate-500" />
                      {lead.companyName}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Contact: {lead.contactName}
                    </p>
                    <p className="text-xs text-slate-500 font-mono mt-1">
                      Fleet Size: {lead.fleetSize} Vehicles
                    </p>
                    <div className="flex items-center justify-between mt-3 text-[10px] text-slate-500">
                      <span>{new Date(lead.submittedAt).toLocaleString()}</span>
                      <button
                        onClick={(e) => handleDelete(lead.id, e)}
                        className="text-slate-500 hover:text-rose-400 p-1 rounded transition-colors"
                        title="Delete Lead"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>

        {/* Right Column: Dynamic Deep Inspector (CRM Mappings, Routings, and JSON payload) */}
        <div className="col-span-1 lg:col-span-7 bg-slate-950/40 p-6 overflow-y-auto max-h-[550px]">
          {selectedLead ? (
            <div className="space-y-6">
              
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm text-amber-500 font-bold">{selectedLead.id}</span>
                    <span className="text-xs text-slate-500">|</span>
                    <span className="text-xs text-slate-400">{new Date(selectedLead.submittedAt).toLocaleString()}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">
                    {'companyName' in selectedLead ? selectedLead.companyName : selectedLead.name}
                  </h3>
                </div>

                {/* Dropdown status update */}
                <div className="relative inline-block text-left">
                  <span className="text-xs text-slate-500 block mb-1 font-mono uppercase">Update Status</span>
                  <div className="flex items-center gap-2">
                    <select
                      value={selectedLead.status}
                      onChange={(e) => handleStatusChange(selectedLead.id, e.target.value)}
                      className="bg-slate-900 border border-slate-800 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      {activeTab === 'parts' ? (
                        <>
                          <option value="Pending">Pending Review</option>
                          <option value="Sourced">Sourced (Quote Formed)</option>
                          <option value="No Quote Available">No Quote Available</option>
                          <option value="Completed">Completed / Dispatched</option>
                        </>
                      ) : (
                        <>
                          <option value="New">New / Unqualified</option>
                          <option value="Qualified">Qualified Corporate</option>
                          <option value="FollowUp">Follow-Up Pending</option>
                          <option value="Closed">Closed / Account Setup</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>
              </div>

              {/* CRM Lead Metadata Segment */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/60 p-4 border border-slate-800/80 rounded-lg space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase font-mono">Contact Details</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-amber-500" />
                      <a href={`mailto:${selectedLead.email}`} className="text-slate-300 hover:text-white underline truncate">
                        {selectedLead.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <Phone className="w-3.5 h-3.5 text-amber-500" />
                      <a href={`tel:${selectedLead.phone.replace(/\D/g, '')}`} className="text-slate-300 hover:text-white">
                        {selectedLead.phone}
                      </a>
                    </div>
                    {'contactName' in selectedLead && (
                      <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800 mt-2">
                        Contact Name: <span className="text-white">{selectedLead.contactName}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-slate-900/60 p-4 border border-slate-800/80 rounded-lg space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase font-mono">Sourcing Target</h4>
                  <div className="space-y-1 text-xs">
                    {'vin' in selectedLead ? (
                      <>
                        <div className="flex items-center gap-1 text-white font-mono font-semibold">
                          <Car className="w-3.5 h-3.5 text-amber-500 mr-1" />
                          {selectedLead.vehicleYear} {selectedLead.vehicleMake} {selectedLead.vehicleModel}
                        </div>
                        {selectedLead.vin && (
                          <div className="text-[11px] text-slate-400 font-mono mt-1">
                            VIN: <span className="text-amber-500 font-bold bg-slate-950 px-1 py-0.5 rounded">{selectedLead.vin}</span>
                          </div>
                        )}
                        {selectedLead.attachmentName && (
                          <div className="text-[10px] text-emerald-400 font-mono mt-2 bg-emerald-950/30 px-2 py-1 rounded border border-emerald-900 inline-block">
                            Att: {selectedLead.attachmentName}
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="text-white font-semibold font-mono flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-amber-500" />
                          {selectedLead.fleetSize} Vehicles
                        </div>
                        <div className="text-[11px] text-slate-400 leading-relaxed pt-1.5">
                          Types: <span className="text-slate-200">{selectedLead.vehicleTypes.join(', ')}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Requirement Text */}
              <div className="bg-slate-900/40 p-4 border border-slate-800 rounded-lg space-y-2">
                <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase font-mono">
                  {'vin' in selectedLead ? "Specific Parts Needed" : "Current Operational Challenges"}
                </h4>
                <div className="text-xs font-mono text-white leading-relaxed bg-slate-950 p-3 rounded border border-slate-850">
                  <span className="text-amber-500 font-bold">
                    {'vin' in selectedLead ? selectedLead.partNeeded : selectedLead.partsRequirements}
                  </span>
                </div>
                {selectedLead.description && (
                  <p className="text-xs text-slate-300 italic leading-relaxed pt-2 border-t border-slate-800">
                    &ldquo;{selectedLead.description}&rdquo;
                  </p>
                )}
                {'currentChallenges' in selectedLead && selectedLead.currentChallenges && (
                  <p className="text-xs text-slate-300 italic leading-relaxed pt-2 border-t border-slate-800">
                    &ldquo;{selectedLead.currentChallenges}&rdquo;
                  </p>
                )}
              </div>

              {/* Commercial Routing Protocol Explanation (Sourced from requirements) */}
              <div className="bg-amber-950/20 border border-amber-500/30 p-4 rounded-lg space-y-2">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-amber-500" />
                  <h4 className="text-xs font-bold text-amber-400 tracking-wider uppercase font-mono">
                    Commercial Routing Protocol (Live Routing Mapping)
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Routing Queue</span>
                    <span className="text-white">{getRoutingDetails(selectedLead).queue}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Routing Protocol ID</span>
                    <span className="text-white">{getRoutingDetails(selectedLead).routingId}</span>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-slate-800">
                    <span className="text-slate-500 block text-[10px] uppercase">Assigned Parts Specialist</span>
                    <span className="text-amber-500 font-semibold">{getRoutingDetails(selectedLead).handler}</span>
                  </div>
                  <div className="col-span-2 bg-slate-950 p-2 rounded border border-slate-850/80 text-[11px] text-slate-300 leading-relaxed">
                    {getRoutingDetails(selectedLead).rationale}
                  </div>
                </div>
              </div>

              {/* Salesforce/Hubspot CRM Schema Mapping representation */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase font-mono">
                    CRM Integration Mapping (Hubspot / Salesforce Webhook Ready Payload)
                  </h4>
                  <span className="text-[10px] bg-slate-850 text-slate-400 font-mono px-2 py-0.5 rounded">application/json</span>
                </div>
                <pre className="bg-slate-950 p-4 rounded-lg border border-slate-850 overflow-x-auto text-[10px] text-slate-300 font-mono leading-relaxed max-h-[160px]">
                  {JSON.stringify({
                    crm_sync_status: "SUCCESS",
                    webhook_endpoint: "https://api.hubapi.com/crm/v3/objects/contacts",
                    mapped_fields: {
                      firstname: 'companyName' in selectedLead ? selectedLead.contactName.split(' ')[0] : selectedLead.name.split(' ')[0],
                      lastname: 'companyName' in selectedLead ? selectedLead.contactName.split(' ')[1] || 'Commercial' : selectedLead.name.split(' ')[1] || 'PartsOwner',
                      email: selectedLead.email,
                      phone: selectedLead.phone,
                      company: 'companyName' in selectedLead ? selectedLead.companyName : "Individual Owner",
                      lifecycle_stage: "opportunity",
                      lead_classification: selectedLead.priority === 'High' ? 'SQL_URGENT' : 'MQL_STANDARD',
                      custom_property_auto_parts: {
                        record_id: selectedLead.id,
                        florida_region: "Punta_Gorda_Southwest",
                        vehicle_vin: 'vin' in selectedLead ? selectedLead.vin : "N/A_FLEET",
                        fleet_size_tier: 'fleetSize' in selectedLead ? selectedLead.fleetSize : 1,
                        lead_routing_queue_id: getRoutingDetails(selectedLead).routingId,
                        system_antispam_hash: "verified_no_captcha_challenge_passed_local_token"
                      }
                    }
                  }, null, 2)}
                </pre>
              </div>

            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-12 text-slate-500 min-h-[400px]">
              <ClipboardList className="w-12 h-12 text-slate-700 mb-3" />
              <h3 className="text-sm font-semibold text-slate-400">Select a Lead to Inspect</h3>
              <p className="text-xs mt-1 max-w-xs">
                Click on any parts request or fleet inquiry in the left pane to view its dynamic diagnostic routing parameters and its mapped JSON CRM payload.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
