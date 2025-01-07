import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CartNotificationProps {
  isVisible: boolean;
  onClose: () => void;
  item: {
    serviceName: string;
    planName: string;
  };
}
export default function CartNotification({ isVisible, onClose, item }: CartNotificationProps) {
    const { t } = useTranslation();
  useEffect(() => {
    
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-x-0 top-4 flex justify-center z-50">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <div className="bg-[var(--background)] border border-gray-700 rounded-lg shadow-2xl p-4">
              <div className="flex flex-col items-center gap-2">
                <p className="text-[var(--accent)]">{item.serviceName}</p>
                <hr className="w-full my-1 border-t-[0.2px] bg-gray-300 opacity-10"/>
                <p className="text-[var(--text)]">{item.planName} {t("cart.add")}</p>
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[var(--accent)]">
                  <Check className="w-5 h-5 text-[var(--accent)]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}