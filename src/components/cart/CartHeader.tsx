import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CartHeaderProps {
  onClose: () => void;
}

export default function CartHeader({ onClose }: CartHeaderProps) {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-semibold">{t('cart.header')}</h2>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-[var(--accent)] transition-colors"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
}