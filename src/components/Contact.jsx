import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvzlaydg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '', // For spam prevention
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (formData.honeypot) {
      newErrors.honeypot = 'Spam detected';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      console.log('Formspree response status:', response.status);
      console.log('Formspree response:', await response.text());

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          honeypot: '',
        });
      } else {
        throw new Error(`Submission failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-28 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.30em] text-[#b99a70]/70">Contact</p>
            <h2 className="mt-4 text-fluid-subtitle font-medium tracking-[0.4px] text-[#f5efe8]">
              Ready to create your forever collection?
            </h2>
            <p className="mt-6 max-w-xl text-fluid-body text-slate-300">
              Share your vision and date, and we’ll respond with a tailored photography proposal that honors your wedding story.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                <span>Name *</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`block w-full rounded-[28px] border px-4 py-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-white/10 bg-[#0a0908]/90 focus:border-[#b99a70]/30 focus:ring-[#b99a70]/20'
                  }`}
                />
                {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                <span>Email *</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@domain.com"
                  className={`block w-full rounded-[28px] border px-4 py-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 ${
                    errors.email
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-white/10 bg-[#0a0908]/90 focus:border-[#b99a70]/30 focus:ring-[#b99a70]/20'
                  }`}
                />
                {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
              </label>
            </div>
            <label className="space-y-2 text-sm text-slate-200">
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number (optional)"
                className={`block w-full rounded-[28px] border px-4 py-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 ${
                  errors.phone
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-white/10 bg-[#0a0908]/90 focus:border-[#b99a70]/30 focus:ring-[#b99a70]/20'
                }`}
              />
              {errors.phone && <p className="text-red-400 text-xs">{errors.phone}</p>}
            </label>
            <label className="space-y-2 text-sm text-slate-200">
              <span>Message *</span>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your wedding vision"
                className={`block w-full rounded-[28px] border px-4 py-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 ${
                  errors.message
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-white/10 bg-[#0a0908]/90 focus:border-[#b99a70]/30 focus:ring-[#b99a70]/20'
                }`}
              />
              {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
            </label>
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              className="sr-only"
              tabIndex="-1"
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-full border border-[#b99a70]/30 bg-[#b99a70]/10 px-8 py-4 text-sm font-medium uppercase tracking-[0.24em] text-[#f5efe8] transition hover:bg-[#b99a70]/15 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send inquiry'}
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-400 text-center text-sm">Your inquiry has been sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 text-center text-sm">Failed to send inquiry. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
