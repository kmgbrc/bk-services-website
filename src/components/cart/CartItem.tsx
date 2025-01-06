import { X } from "lucide-react";
import { CartItem as CartItemType } from "../../types/cart";
import { useCartStore } from "../../store/cartStore";
import { useTranslation } from "react-i18next";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { removeItem } = useCartStore();
  const { t } = useTranslation();

  return (
    <div className="flex items-start gap-4 p-4 bg-[var(--bgColorBlack)] rounded-lg">
      <div className="flex-grow">
        <h3 className="font-semibold">{t(`services.${item.serviceName}`)}</h3>{" "}
        <p className="text-sm text-gray-400">{t(item.planName)}</p>{" "}
        <p className="text-sm text-gray-400 mt-1">{t(item.description)}</p>{" "}
        <p className="text-[var(--accent)] mt-2">{item.price}€</p>
      </div>
      <button
        onClick={() => removeItem(item.id)}
        className="text-gray-400 hover:text-[var(--accent)] transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
