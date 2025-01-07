import { useTranslation } from "react-i18next";
import ContactForm, {
  ContactFormData,
} from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import Header from "../components/layout/Header";
import toast from "react-hot-toast";
import { sendContactRequest } from "../utils/emailService";
import { useCartStore } from "../store/cartStore";

export default function ContactPage() {
  const { t } = useTranslation();
  const { clearCart } = useCartStore();

  const handleContactSubmit = async (formData: ContactFormData) => {
    try {
      const result = await sendContactRequest({
        clientDetails: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        messages: {
          success: t("successMessage"),
          error: t("errorMessage"),
        },
      });

      if (result.success) {
        toast.success(result.message);
        clearCart();
      }
    } catch (error) {
      toast.error("Failed to send booking request. Please try again.");
    }
  };

  return (
    <div className="pt-20">
      <Header
        bgImg="src\\assets\\droneMontains.jpg"
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-semibold mb-8">
              {t("contact.info.titleForm")}
            </h3>
            <ContactForm onSubmit={handleContactSubmit} />
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-8">
              {t("contact.info.titleInfo")}
            </h3>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
