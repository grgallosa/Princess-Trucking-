
import { Truck, TruckType, Testimonial, Service } from './types';

// BRANDING
export const LOGO_URL = 'public/princess-trucking.png'; 
export const LOGO_TEXT = '';

// UI IMAGES - Replace these URLs with your local paths like '/images/hero.jpg'
export const IMAGES = {
  HERO_BG: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000',
  ABOUT_SECTION: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000',
  LOGISTICS_SERVICE: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
  FLEET_SERVICE: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000',
  MAINTENANCE_SERVICE: 'https://images.unsplash.com/photo-1530124560671-6789e9232ed6?auto=format&fit=crop&q=80&w=1000',
  CONTACT_MAP_FALLBACK: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000',
  RESOURCES_ARTICLES: [
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600'
  ]
};

export const FLEET_DATA: Truck[] = [
  {
    id: 'wv-12',
    name: 'Isuzu Giga 12-Wheeler Wing Van',
    type: TruckType.WING_VAN,
    capacity: '25 Tons',
    wheels: 12,
    year: 2023,
    imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
    specs: ['9.6m Length', 'Pneumatic Suspension', 'GPS Tracked', 'High Volume Capacity'],
    priceRange: '₱45k - ₱85k'
  },
  {
    id: 'dt-1',
    name: 'Howo Sinotruk Dump Truck',
    type: TruckType.DUMP_TRUCK,
    capacity: '20 Cubic Yards',
    wheels: 10,
    year: 2022,
    imageUrl: 'https://images.unsplash.com/photo-1591768793355-74d7c862164c?auto=format&fit=crop&q=80&w=800',
    specs: ['Heavy Duty Tipping Gear', 'Reinforced Chassis', 'Mining Grade Tires'],
    priceRange: '₱15k - ₱35k'
  },
  {
    id: 'th-10',
    name: 'Scania R500 10-Wheeler Tractor Head',
    type: TruckType.TRACTOR_HEAD,
    capacity: '45 Tons GCW',
    wheels: 10,
    year: 2023,
    imageUrl: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800',
    specs: ['V8 Engine', 'Sleeper Cab', 'Fifth Wheel Coupling', 'Euro 5 Compliant'],
    priceRange: '₱50k - ₱120k'
  },
  {
    id: 'cm-1',
    name: 'Fuso FJ Concrete Mixer',
    type: TruckType.CONCRETE_MIXER,
    capacity: '8 Cubic Meters',
    wheels: 10,
    year: 2022,
    imageUrl: 'https://images.unsplash.com/photo-1530124560671-6789e9232ed6?auto=format&fit=crop&q=80&w=800',
    specs: ['Continuous Rotation', 'High Slump Discharge', 'Digital Mixing Control'],
    priceRange: '₱20k - ₱45k'
  },
  {
    id: 'ex-1',
    name: 'Komatsu PC200 Excavator',
    type: TruckType.EXCAVATOR,
    capacity: '0.8 m³ Bucket',
    wheels: 0,
    year: 2021,
    imageUrl: 'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&q=80&w=800',
    specs: ['Hydraulic Breaker Ready', 'Low Fuel Consumption', '360 Degree Swing'],
    priceRange: '₱35k - ₱75k'
  },
  {
    id: 'bt-1',
    name: 'Dongfeng Boom Truck',
    type: TruckType.BOOM_TRUCK,
    capacity: '12 Tons Lifting',
    wheels: 10,
    year: 2022,
    imageUrl: 'https://images.unsplash.com/photo-1541625602330-2277a4c4b28d?auto=format&fit=crop&q=80&w=800',
    specs: ['4-Stage Telescopic Boom', 'Outrigger Stability', 'Cargo Platform'],
    priceRange: '₱25k - ₱55k'
  },
  {
    id: 'sl-1',
    name: 'Hino Self Loader',
    type: TruckType.SELF_LOADER,
    capacity: '15 Tons Load',
    wheels: 10,
    year: 2021,
    imageUrl: 'https://images.unsplash.com/photo-1586191582056-a15cd3bb1261?auto=format&fit=crop&q=80&w=800',
    specs: ['Hydraulic Tilt Tray', 'Winch Equipped', 'Heavy Equipment Carrier'],
    priceRange: '₱30k - ₱60k'
  },
  {
    id: 'bd-1',
    name: 'Caterpillar D6 Bulldozer',
    type: TruckType.BULLDOZER,
    capacity: 'Semi-U Blade',
    wheels: 0,
    year: 2020,
    imageUrl: 'https://images.unsplash.com/photo-1579412623847-3a9364f7bc8b?auto=format&fit=crop&q=80&w=800',
    specs: ['Differential Steering', 'Heavy Duty Undercarriage', 'GPS Grade Control'],
    priceRange: '₱40k - ₱90k'
  },
  {
    id: 'ld-1',
    name: 'SDLG Wheel Loader',
    type: TruckType.LOADER,
    capacity: '3.0 m³ Bucket',
    wheels: 4,
    year: 2022,
    imageUrl: 'https://images.unsplash.com/photo-1512411985160-244498308c02?auto=format&fit=crop&q=80&w=800',
    specs: ['Articulated Steering', 'Quick Coupler Attachment', 'High Load Stability'],
    priceRange: '₱15k - ₱40k'
  },
  {
    id: 'rr-1',
    name: 'Bomag Road Roller',
    type: TruckType.ROAD_ROLLER,
    capacity: '12 Tons Static',
    wheels: 2,
    year: 2021,
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
    specs: ['Vibratory Drum', 'Smooth Compaction', 'Intelligent Soil Control'],
    priceRange: '₱12k - ₱30k'
  },
  {
    id: 'ct-1',
    name: 'Sany Crane Truck',
    type: TruckType.CRANE_TRUCK,
    capacity: '25 Tons Lift',
    wheels: 10,
    year: 2023,
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e443d1fe?auto=format&fit=crop&q=80&w=800',
    specs: ['U-Shaped Boom', '33.5m Main Boom', 'Remote Operation Option'],
    priceRange: '₱55k - ₱150k'
  },
  {
    id: 'wt-1',
    name: 'Isuzu Forward Water Tanker',
    type: TruckType.WATER_TANKER,
    capacity: '10,000 Liters',
    wheels: 6,
    year: 2021,
    imageUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800',
    specs: ['Stainless Steel Tank', 'High Pressure Pump', 'Dust Control Nozzles'],
    priceRange: '₱10k - ₱25k'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Santos',
    company: 'Panay Agro Exports',
    content: "Princess Trucking has been our reliable partner for over 5 years. Their 10-wheelers are always in top condition and their drivers are professional.",
    rating: 5,
    avatar: 'https://picsum.photos/seed/maria/100/100'
  },
  {
    id: '2',
    name: 'Robert Tan',
    company: 'Metro Iloilo Retailers',
    content: "Excellent service and real-time tracking. We never have to worry about our cargo reaching the warehouse on time.",
    rating: 5,
    avatar: 'https://picsum.photos/seed/robert/100/100'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'logistics',
    title: 'Logistics & Distribution',
    description: 'Premier nationwide transport including dry cargo, bulk haulage, and specialized equipment relocation.',
    icon: 'fa-truck-fast'
  },
  {
    id: 'fleet',
    title: 'Fleet Dealership',
    description: 'Official partner for major truck brands. Offering competitive sales, rentals, and leasing solutions.',
    icon: 'fa-handshake'
  },
  {
    id: 'maintenance',
    title: 'Fleet Maintenance',
    description: 'Expert heavy equipment maintenance and genuine parts support for fleet owners.',
    icon: 'fa-wrench'
  }
];
