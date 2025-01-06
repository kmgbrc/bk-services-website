import React, { useEffect, useRef } from 'react';
import { useCartStore } from '../../store/cartStore';
import { usePaymentStore } from '../../store/paymentStore';
import { initPayPalScript, createPayPalOrder, processPayPalPayment } from '../../utils/paypal';

interface PayPalButtonProps {
  amount: number;
  onSuccess: (transactionId: string) => void;
  onError: (error: string) => void;
}

declare global {
  interface Window {
    paypal?: any;
  }
}

export default function PayPalButton({ amount, onSuccess, onError }: PayPalButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const { setProcessing } = usePaymentStore();

  useEffect(() => {
    const initPayPal = async () => {
      try {
        await initPayPalScript();
        if (buttonRef.current && window.paypal) {
          window.paypal.Buttons({
            createOrder: () => createPayPalOrder(amount),
            onApprove: async (data: any) => {
              setProcessing(true);
              try {
                const result = await processPayPalPayment(data.orderID);
                if (result.success && result.transactionId) {
                  onSuccess(result.transactionId);
                } else {
                  onError(result.error || 'Payment failed');
                }
              } catch (error) {
                onError('Payment processing failed');
              } finally {
                setProcessing(false);
              }
            },
            onError: () => onError('PayPal encountered an error'),
          }).render(buttonRef.current);
        }
      } catch (error) {
        onError('Failed to initialize PayPal');
      }
    };

    initPayPal();
  }, [amount, onSuccess, onError]);

  return <div ref={buttonRef} />;
}