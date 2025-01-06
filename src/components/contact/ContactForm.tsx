import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import Button from '../common/Button';

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-[var(--bgColorSoft)] p-8 rounded-lg">
      <div>
        <label className="block text-sm mb-2 text-gray-400">
          {t('contact.form.name')}
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[var(--bgColorBlack)] border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:border-[var(--accent)] focus:outline-none transition-colors"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-2 text-gray-400">
          {t('contact.form.email')}
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[var(--bgColorBlack)] border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:border-[var(--accent)] focus:outline-none transition-colors"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-2 text-gray-400">
          {t('contact.form.phone')}
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-[var(--bgColorBlack)] border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:border-[var(--accent)] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-2 text-gray-400">
          {t('contact.form.message')}
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full bg-[var(--bgColorBlack)] border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:border-[var(--accent)] focus:outline-none transition-colors"
            required
          />
        </div>
      </div>

      <Button className="w-full flex items-center justify-center gap-2">
        <Send className="w-4 h-4" />
        {t('contact.form.submit')}
      </Button>
    </form>
  );
}