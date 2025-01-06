import React from 'react';
import { usePromoStore } from '../../store/promoStore';
import Button from '../common/Button';

export default function PromoCodeInput() {
  const { currentCode, error, isValidating, applyPromoCode, setCurrentCode } = usePromoStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentCode.length === 6) {
      applyPromoCode(currentCode);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={currentCode}
          onChange={(e) => setCurrentCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
          placeholder="Enter promo code"
          className="flex-grow bg-[var(--bgColorSoft)] border border-gray-700 rounded-lg px-4 py-2 focus:border-[var(--accent)] focus:outline-none"
          maxLength={6}
        />
        <Button 
          type="submit"
          disabled={currentCode.length !== 6 || isValidating}
          className="whitespace-nowrap"
        >
          {isValidating ? 'Validating...' : 'Apply'}
        </Button>
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </form>
  );
}