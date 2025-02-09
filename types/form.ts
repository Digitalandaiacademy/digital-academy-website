export interface FormData {
  fullName: string;
  email: string;
  phone: string; // Ajout du numéro de téléphone
  companyName: string;
  location: string; // Ajout de la localisation
  // Marketing specific fields
  campaignType?: string;
  budget?: string;
  objectives?: string;
  // Video specific fields
  videoType?: string;
  duration?: string;
  description?: string;
  deliveryDate?: string;
  // Web specific fields
  projectType?: string;
  features?: string;
  timeline?: string;
  // Visual Design specific fields
  designType?: string;
  designPurpose?: string;
  brandColors?: string;
  existingBranding?: string;
}