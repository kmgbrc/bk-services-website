import { 
  Camera, 
  Video, 
  Palette, 
  Printer,
  Plane,
  Globe,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Send,
  Award,
  Wrench, // Replace Tool with Wrench
  Clock
} from 'lucide-react';

// Service icons
export const serviceIcons = {
  photography: Camera,
  video: Video,
  graphics: Palette,
  production: Printer,
  drone: Plane,
  web: Globe
} as const;

// Contact icons
export const contactIcons = {
  phone: Phone,
  email: Mail,
  location: MapPin,
  clock: Clock,
  globe: Globe,
} as const;

// Social icons
export const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin
} as const;

// Form icons
export const formIcons = {
  submit: Send
} as const;

// About icons
export const aboutIcons = {
  equipment: Camera,
  certifications: Award,
  skills: Wrench // Use Wrench instead of Tool
} as const;

// Add type safety
export type ServiceIconType = keyof typeof serviceIcons;
export type ContactIconType = keyof typeof contactIcons;
export type SocialIconType = keyof typeof socialIcons;
export type FormIconType = keyof typeof formIcons;
export type AboutIconType = keyof typeof aboutIcons;