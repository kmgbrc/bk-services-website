import { create } from 'zustand';
import type { PaymentState, PaymentMethod } from '../types/payment';

interface PaymentStore extends PaymentState {
  setPaymentMethod: (method: PaymentMethod) => void;
  setProcessing: (isProcessing: boolean) => void;
  setError: (error: string | null) => void;
  resetPayment: () => void;
}

export const usePaymentStore = create<PaymentStore>((set) => ({
  selectedMethod: null,
  isProcessing: false,
  error: null,
  setPaymentMethod: (method) => set({ selectedMethod: method, error: null }),
  setProcessing: (isProcessing) => set({ isProcessing }),
  setError: (error) => set({ error }),
  resetPayment: () => set({ selectedMethod: null, isProcessing: false, error: null }),
}));