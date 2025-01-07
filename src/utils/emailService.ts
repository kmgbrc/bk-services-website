import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID_CMD = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CMD;
const TEMPLATE_ID_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendBookingRequest = async (data: {
  serviceDetails: {
    location: string;
    date: string;
    startTime: string;
    duration: string;
  };
  clientDetails: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  services: {
    serviceName: string;
    planName: string;
    price: string | number;
    description: string;
  }[];
  messages: {
    success: string;
    error: string;
  }
}) => {
  try {
    const { serviceDetails, clientDetails, services, messages } = data;
    
    const servicesText = services.map(service => 
      `- ${service.serviceName} (${service.planName})
       Prix: ${service.price}
       Description: ${service.description}`
    ).join('\n');

    const templateParams = {
      to_name: "BK Services",
      from_name: clientDetails.name,
      from_email: clientDetails.email,
      phone: clientDetails.phone,
      message: clientDetails.message,
      location: serviceDetails.location,
      date: serviceDetails.date,
      time: serviceDetails.startTime,
      duration: serviceDetails.duration,
      services: servicesText
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID_CMD,
      templateParams,
      PUBLIC_KEY
    );

    if (response.status === 200) {
      return {
        success: true,
        message: messages.success
      };
    } else {
      throw new Error(messages.error);
    }
  } catch (error) {
    console.error('Email service error:', error);
    toast.error('Error sending your request. Please try again.');
    throw error;
  }
};

export const sendContactRequest = async (data: {
  clientDetails: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  messages: {
    success: string;
    error: string;
  }
}) => {
  try {
    const { clientDetails, messages } = data;

    const templateParams = {
      to_name: "BK Services",
      from_name: clientDetails.name,
      from_email: clientDetails.email,
      phone: clientDetails.phone,
      message: clientDetails.message
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID_CONTACT,
      templateParams,
      PUBLIC_KEY
    );

    if (response.status === 200) {
      return {
        success: true,
        message: messages.success
      };
    } else {
      throw new Error(messages.error);
    }
  } catch (error) {
    console.error('Email service error:', error);
    toast.error('Error sending your request. Please try again.');
    throw error;
  }
};