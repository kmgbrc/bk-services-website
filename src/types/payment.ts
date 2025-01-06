export type PaymentMethod = 'paypal' | 'card';

export interface PaymentState {
  selectedMethod: PaymentMethod | null;
  isProcessing: boolean;
  error: string | null;
}

export interface PaymentResult {
  success: boolean;
  transactionId?: string;
  error?: string;
}