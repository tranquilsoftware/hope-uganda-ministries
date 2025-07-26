export interface ChildProfile {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  country: string;
  region: string;
  story: string;
  isSponsored: boolean;
  imageUrl: string;
  interests: string[];
  needs: string[];
}

export type DonationFrequency = 'once' | 'monthly';

export interface DonationAmount {
  value: number;
  label: string;
  isPopular?: boolean;
}

export interface DonationFormData {
  frequency: DonationFrequency;
  amount: number | null;
  childId: string | null;
  paymentId?: string; // FOR PAYPAL PAYMENT ID
  customAmount?: string;
}

export interface ChildProfileCardProps {
  child: ChildProfile;
  onSelect: (child: ChildProfile) => void;
  isSelected: boolean;
}

export interface DonationInterfaceProps {
  selectedChild: ChildProfile | null;
  onSubmit: (data: DonationFormData) => void;
  isLoading: boolean;
  error: string | null;
}
