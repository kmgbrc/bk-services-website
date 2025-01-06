import React from 'react';
import { CreditCard } from 'lucide-react';
import { usePaymentStore } from '../../store/paymentStore';
import type { PaymentMethod } from '../../types/payment';

export default function PaymentMethodSelector() {
  const { selectedMethod, setPaymentMethod } = usePaymentStore();

  const methods: { id: PaymentMethod; label: string; icon: string }[] = [
    {
      id: 'paypal',
      label: 'PayPal',
      icon: '/paypal-icon.svg',
    },
    {
      id: 'card',
      label: 'Credit Card',
      icon: 'credit-card',
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Select Payment Method</h3>
      <div className="grid gap-4">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => setPaymentMethod(method.id)}
            className={`flex items-center gap-4 p-4 rounded-lg border ${
              selectedMethod === method.id
                ? 'border-[var(--accent)] bg-[var(--accent)] bg-opacity-10'
                : 'border-gray-700'
            }`}
          >
            {method.id === 'paypal' ? (
              <img src={method.icon} alt="PayPal" className="h-6" />
            ) : (
              <CreditCard className="w-6 h-6" />
            )}
            <span>{method.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}