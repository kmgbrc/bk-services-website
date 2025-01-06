import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Calendar, Clock, Timer, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface BookingFormProps {
  onClose: () => void;
  onSubmit: (data: BookingFormData) => void;
}

export interface BookingFormData {
  // Service Details
  location: string;
  date: string;
  startTime: string;
  duration: string;
  // Client Details
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function BookingForm({ onClose, onSubmit }: BookingFormProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<BookingFormData>({
    location: '',
    date: '',
    startTime: '',
    duration: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">
          {t('modalForm.serviceDetails.header')}
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2 text-gray-400">
              {t('modalForm.serviceDetails.fields.location.label')}
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-[var(--bgColorBlack)] border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:border-[var(--accent)] focus:outline-none"
                placeholder={t('modalForm.serviceDetails.fields.location.placeholder')}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-400">
              {t('modalForm.serviceDetails.fields.date.label')}
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-[var(--bgColorBlack)] border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:border-[var(--accent)] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2 text-gray-400">
                {t('modalForm.serviceDetails.fields.startTime.label')}
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  className="w-full bg-[var(--bgColorBlack)] border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:border-[var(--accent)] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-400">
                {t('modalForm.serviceDetails.fields.duration.label')}
              </label>
              <div className="relative">
                <Timer className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full bg-[var(--bgColorBlack)] border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:border-[var(--accent)] focus:outline-none"
                >
                  <option value="">{t('modalForm.serviceDetails.fields.duration.placeholder')}</option>
                  <option value="1">{t('modalForm.serviceDetails.fields.duration.options.1')}</option>
                  <option value="2">{t('modalForm.serviceDetails.fields.duration.options.2')}</option>
                  <option value="4">{t('modalForm.serviceDetails.fields.duration.options.4')}</option>
                  <option value="8">{t('modalForm.serviceDetails.fields.duration.options.8')}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">
          {t('modalForm.clientDetails.header')}
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2 text-gray-400">
              {t('modalForm.clientDetails.fields.name.label')}
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[var(--bgColorBlack)] border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:border-[var(--accent)] focus:outline-none"
                required
                placeholder={t('modalForm.clientDetails.fields.name.placeholder')}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-400">
              {t('modalForm.clientDetails.fields.email.label')}
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[var(--bgColorBlack)] border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:border-[var(--accent)] focus:outline-none"
                required
                placeholder={t('modalForm.clientDetails.fields.email.placeholder')}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-400">
              {t('modalForm.clientDetails.fields.phone.label')}
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[var(--bgColorBlack)] border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:border-[var(--accent)] focus:outline-none"
                placeholder={t('modalForm.clientDetails.fields.phone.placeholder')}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-400">
              {t('modalForm.clientDetails.fields.message.label')}
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-[var(--bgColorBlack)] border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:border-[var(--accent)] focus:outline-none"
                placeholder={t('modalForm.clientDetails.fields.message.placeholder')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2 border border-gray-700 rounded-lg hover:border-[var(--accent)] transition-colors"
        >
          {t('modalForm.buttons.cancel')}
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-[var(--accent)] rounded-lg hover:bg-opacity-90 transition-colors"
        >
          {t('modalForm.buttons.confirm')}
        </button>
      </div>
    </form>
  );
}
