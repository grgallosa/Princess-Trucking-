
export enum TruckType {
  WING_VAN = 'Wing Van',
  DUMP_TRUCK = 'Dump Truck',
  TRACTOR_HEAD = 'Tractor Head',
  CONCRETE_MIXER = 'Concrete Mixer',
  WATER_TANKER = 'Water Tanker',
  BOOM_TRUCK = 'Boom Truck',
  EXCAVATOR = 'Excavator',
  SELF_LOADER = 'Self Loader',
  BULLDOZER = 'Bulldozer',
  LOADER = 'Loader',
  ROAD_ROLLER = 'Road Roller',
  CRANE_TRUCK = 'Crane Truck',
  CLOSED_VAN = 'Closed Van',
  REFRIGERATED = 'Refrigerated'
}

export interface Truck {
  id: string;
  name: string;
  type: TruckType;
  capacity: string;
  wheels: number;
  year: number;
  imageUrl: string;
  specs: string[];
  priceRange: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
