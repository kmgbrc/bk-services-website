export interface PromoCode {
  code: string;
  discount: number;
  isValid: boolean;
}

export interface PromoState {
  currentCode: string;
  appliedPromo: PromoCode | null;
  isValidating: boolean;
  error: string | null;
}