import { useCartStore } from '../../store/cartStore';
import { usePaymentStore } from '../../store/paymentStore';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import CartHeader from './CartHeader';
import CartEmpty from './CartEmpty';
import Button from '../common/Button';
import CheckoutModal from '../checkout/CheckoutModal';
import { useTranslation } from 'react-i18next';


export default function CartDrawer() {
  const { t } = useTranslation();

  const { items, isOpen, toggleCart } = useCartStore();
  const { selectedMethod, setPaymentMethod } = usePaymentStore();
  
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={toggleCart}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[var(--background)] shadow-xl z-50 p-6 overflow-y-auto">
        <CartHeader onClose={toggleCart} />

        {items.length === 0 ? (
          <CartEmpty />
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <CartTotal items={items} />

            <Button 
              className="w-full"
              onClick={() => setPaymentMethod('paypal')}
            >
              {t('cart.button')}
            </Button>
          </>
        )}
      </div>

      {selectedMethod && <CheckoutModal />}
    </>
  );
}