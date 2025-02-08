export interface FormData {
  fullName: string;
  email: string;
  companyName: string;
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
}