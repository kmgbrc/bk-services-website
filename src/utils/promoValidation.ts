import type { PromoCode } from '../types/promo';

// Simulated database of valid promo codes
const validPromoCodes: Record<string, number> = {
  '524856': 15, // 15% discount
  '123456': 10, // 10% discount
  '987654': 20, // 20% discount
};

export const validatePromoCode = async (code: string): Promise<PromoCode> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const discount = validPromoCodes[code];
  
  return {
    code,
    discount: discount || 0,
    isValid: !!discount
  };
};

export const calculateDiscount = (amount: number, discountPercentage: number): number => {
  return (amount * discountPercentage) / 100;
};