'use client';

import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactFormModal({ isOpen, onClose }) {
  /* ---------------------------- state ---------------------------- */
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    time: '',
    mode: '',
    captchaToken: '',      // <- reCAPTCHA token
  });
  const [errors, setErrors] = useState({});

  /* ------------------------ validation --------------------------- */
  const validate = () => {
    const e = {};
    if (!formData.name.trim())   e.name   = 'Name is required';
    if (!formData.phone.trim())  e.phone  = 'Phone is required';
    if (!formData.email.trim())  e.email  = 'Email is required';
    if (!formData.reason.trim()) e.reason = 'Please tell us what brings you here';
    if (!formData.time.trim())   e.time   = 'Preferred time is required';
    if (!formData.mode.trim())   e.mode   = 'Please select a contact mode';
    if (!formData.captchaToken)  e.captchaToken = 'Please verify you are not a robot';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ----------------------- handlers ------------------------------ */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Form submitted:', formData);
    onClose(); // close modal
  };

  /* ------------------------- render ------------------------------ */
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 overflow-y-auto py-10 px-4">
      <div className="mx-auto max-w-lg">
        <div className="relative bg-white rounded-lg p-6 max-h-[90vh] overflow-y-auto shadow-lg">
          {/* close */}
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-2xl leading-none text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>

          <h2 className="text-2xl font-semibold mb-4 text-[#6D8A9A]">
            Schedule a Consultation
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium">Name *</label>
              <input placeholder='Name'
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium">Phone *</label>
              <input placeholder='(555) 555-5555'
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium">Email *</label>
              <input placeholder='you@example.com'
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Reason */}
            <div>
              <label className="block text-sm font-medium">Message *</label>
              <textarea placeholder='How can I help you?'
                name="reason"
                rows={3}
                value={formData.reason}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
              {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium">Preferred time to reach you *</label>
              <input placeholder='eg., Morning, Afternoon, Evening, Weekends'
                name="time"
                type="text"
                value={formData.time}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
              {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
            </div>

            {/* Mode dropdown */}
            <div>
              <label className="block text-sm font-medium">Preferred mode of contact *</label>
              <select
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
              >
                <option value="">Select</option>
                <option value="Call">Call</option>
                <option value="Email">Email</option>
                <option value="WhatsApp">In Office</option>
              </select>
              {errors.mode && <p className="text-red-500 text-sm">{errors.mode}</p>}
            </div>

            {/* Google reCAPTCHA */}
            <div>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={(token) =>
                  setFormData((prev) => ({ ...prev, captchaToken: token }))
                }
              />
              {errors.captchaToken && (
                <p className="text-red-500 text-sm">{errors.captchaToken}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#6D8A9A] text-white py-2 rounded font-semibold hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
