export interface NavLink {
  name: string;
  href: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: 'shirt' | 'backpack' | 'pencil-ruler';
  image: string;
}

export interface TestimonialItem {
  id: number;
  text: string;
  author: string;
  role: string;
  image?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}