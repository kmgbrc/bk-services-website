import { create } from 'zustand';
import { validatePromoCode } from '../utils/promoValidation';
import type { PromoState, PromoCode } from '../types/promo';

interface PromoStore extends PromoState {
  setCurrentCode: (code: string) => void;
  applyPromoCode: (code: string) => Promise<void>;
  removePromoCode: () => void;
}

export const usePromoStore = create<PromoStore>((set) => ({
  currentCode: '',
  appliedPromo: null,
  isValidating: false,
  error: null,
  setCurrentCode: (code) => set({ currentCode: code, error: null }),
  applyPromoCode: async (code) => {
    set({ isValidating: true, error: null });
    try {
      const result = await validatePromoCode(code);
      if (result.isValid) {
        set({ appliedPromo: result, error: null });
      } else {
        set({ error: 'Invalid promotion code' });
      }
    } catch (error) {
      set({ error: 'Error validating code' });
    } finally {
      set({ isValidating: false });
    }
  },
  removePromoCode: () => set({ appliedPromo: null, currentCode: '', error: null }),
}));