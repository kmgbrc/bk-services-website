import { X } from 'lucide-react';
import { CartItem } from '../../types/cart';
import { usePromoStore } from '../../store/promoStore';
import { calculateDiscount } from '../../utils/promoValidation';
import { useTranslation } from 'react-i18next';
// import PromoCodeInput from './PromoCodeInput';

interface CartTotalProps {
  items: CartItem[];
}

export default function CartTotal({ items }: CartTotalProps) {
  const { appliedPromo, removePromoCode } = usePromoStore();
  
  const { t } = useTranslation();
  
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const discountAmount = appliedPromo ? calculateDiscount(subtotal, appliedPromo.discount) : 0;
  const total = subtotal - discountAmount;

  return (
    <div className="border-t border-gray-800 pt-4 mb-8">
      {/* <PromoCodeInput /> */}
      
      <div className="space-y-2">
        {/* <div className="flex justify-between">
          <span className="text-gray-400">Subtotal</span>
          <span>{subtotal}€</span>
        </div> */}
        
        {appliedPromo && (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-green-500">
                Promo ({appliedPromo.discount}% off)
              </span>
              <button
                onClick={removePromoCode}
                className="text-gray-400 hover:text-[var(--accent)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <span className="text-green-500">-{discountAmount}€</span>
          </div>
        )}
        
        <div className="flex justify-between text-xl font-semibold pt-2">
          <span>{t('cart.total')}</span>
          <span>{total}€</span>
        </div>
      </div>
    </div>
  );
}