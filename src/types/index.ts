export interface Course {
  id: string; name: string; duration: string; salary: string;
  description: string; highlights: string[]; color: string;
}
export interface Stat {
  value: number; suffix: string; label: string; isFloat?: boolean;
}
export interface LeadFormData {
  name: string; phone: string; email?: string;
  company?: string; service_interested?: string; message?: string;
}
