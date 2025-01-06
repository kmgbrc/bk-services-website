import { useTranslation } from "react-i18next";


export default function CartEmpty() {
  const { t } = useTranslation();
  return (
    <p className="text-center text-gray-400 my-8">
      {t('cart.empty')}
    </p>
  );
}