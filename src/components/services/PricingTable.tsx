import { Check } from "lucide-react";
import { useCartStore } from "../../store/cartStore";
import Button from "../common/Button";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CartNotification from "../cart/CartNotification";
import { useState } from "react";

interface PricingPlan {
  originalName: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

interface PricingTableProps {
  plans: PricingPlan[];
  serviceName: string;
}

export default function PricingTable({
  plans,
  serviceName,
}: PricingTableProps) {
  const { addItem } = useCartStore();
  const { t } = useTranslation();

  const [notification, setNotification] = useState<{
    isVisible: boolean;
    item?: { serviceName: string; planName: string };
  }>({ isVisible: false });

  /*const handleAddToCart = (plan: PricingPlan) => {
    const priceNumber = parseInt(plan.price.replace("€", ""));

    const itemId = `${serviceName}-${plan.name}-${Date.now()}`;

     addItem({
      id: itemId,
      serviceName: `${serviceName}`,
      planName: `services.details.${serviceName}.plans.${plan.originalName}.name`,
      price: priceNumber,
      description: `services.details.${serviceName}.plans.${plan.originalName}.description`,
    }); 

    //toast.success(`${plan.name} ${t("cart.add")}`);
  };*/

  const handleRequestBooking = (plan: PricingPlan) => {

    const priceNumber = parseInt(plan.price.replace("€", ""));

    const itemId = `${serviceName}-${plan.name}-${Date.now()}`;

    addItem({
      id: itemId,
      serviceName: `${serviceName}`,
      planName: `services.details.${serviceName}.plans.${plan.originalName}.name`,
      price: priceNumber,
      description: `services.details.${serviceName}.plans.${plan.originalName}.description`,
    });

    setNotification({
      isVisible: true,
      item: { serviceName, planName: plan.name }
    });
  };

  return (
    <>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`service-card p-8 rounded-lg relative ${
                  plan.isPopular ? "border-[var(--accent)]" : ""
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-white px-4 py-1 rounded-full text-sm">
                    {t("services.subsubtitle.popular")}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-4">{plan.price}</div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[var(--accent)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.originalName === "enterprise" ? (
                  <Link to="/contact">
                    <Button
                      variant={plan.isPopular ? "primary" : "outline"}
                      className="w-full"
                    >
                      {t("contact.title")}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant={plan.isPopular ? "primary" : "outline"}
                    className="w-full"
                    onClick={() => handleRequestBooking(plan)}
                  >
                    {t("services.subsubtitle.button")}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <CartNotification
        isVisible={notification.isVisible}
        onClose={() => setNotification({ isVisible: false })}
        item={notification.item!}
      />
    </>
  );
}
