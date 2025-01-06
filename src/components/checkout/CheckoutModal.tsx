import { X } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { usePaymentStore } from '../../store/paymentStore';
import CartTotal from '../cart/CartTotal';
import { sendBookingRequest } from '../../utils/emailService';
import toast from 'react-hot-toast';
import BookingForm, { BookingFormData } from './BookingForm';
import { useTranslation } from 'react-i18next';

export default function CheckoutModal() {
  const { items, clearCart } = useCartStore();
  const { resetPayment } = usePaymentStore();
  const { t } = useTranslation();

  const handleBookingSubmit = async (formData: BookingFormData) => {
    try {
      const translatedServices = items.map(item => ({
        serviceName: t(`services.${item.serviceName}`), 
        planName: t(`${item.planName}`), 
        price: item.price, 
        description: t(`${item.description}`)  
      }));

      const result = await sendBookingRequest({
        serviceDetails: {
          location: formData.location,
          date: formData.date,
          startTime: formData.startTime,
          duration: formData.duration
        },
        clientDetails: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        services: translatedServices,
        messages: {
          success: t('successMessage'),
          error: t('errorMessage'),
        }
      });

      if (result.success) {
        toast.success(result.message);
        clearCart();
        resetPayment();
      }
    } catch (error) {
      toast.error('Failed to send booking request. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={resetPayment} />
      
      <div className="relative bg-[var(--background)] rounded-lg w-full max-w-4xl p-6 max-h-[90vh] overflow-y-auto">
        <button
          onClick={resetPayment}
          className="absolute top-4 right-4 text-gray-400 hover:text-[var(--accent)]"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6">{t('modal.requestBooking')}</h2>

        <div className="grid md:grid-cols-[2fr,1fr] gap-8">
          <BookingForm 
            onClose={resetPayment}
            onSubmit={handleBookingSubmit}
          />

          <div className="bg-[var(--bgColorBlack)] p-6 rounded-lg h-fit">
            <h3 className="text-lg font-semibold mb-4">{t('modal.servicesSelected')}</h3>
            <CartTotal items={items} />
          </div>
        </div>
      </div>
    </div>
  );
}