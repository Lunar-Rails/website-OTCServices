import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title = "Let's connect",
  subtitle = "We're just a message away. Got questions? Ideas? Or just want to say hi? We'd love to hear from you!",
}) => {
  const [phone, setPhone] = useState<string>('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className="text-[36px] sm:text-[48px] lg:text-[72px] font-bold mb-6 leading-[110%]"
        style={{
          background:
            'linear-gradient(135deg,#00E1FF 1.54%,#09CFFA 11.7%,#22A0ED 32.93%,#4A56D9 62.48%,#7800C2 93.87%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {title}
      </h2>

      <div className="text-base sm:text-lg leading-[150%] text-gray-600 mb-8 sm:mb-12">
        <p className="mb-4 sm:mb-6">{subtitle}</p>
        <p>
          Email us at{' '}
          <a
            href="mailto:connect@otc.services"
            className="text-black hover:opacity-80"
          >
            connect@otc.services
          </a>
        </p>
      </div>

      {/* Netlify picks up this form because of data-netlify + form-name hidden field */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/success.html"
        className="space-y-4 sm:space-y-6"
      >
        {/* required for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        {/* spam trap */}
        <input type="hidden" name="bot-field" />

        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          required
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
        />

        <PhoneInput
          name="phone"
          international
          countryCallingCodeEditable={false}
          defaultCountry="AE"
          value={phone}
          onChange={(value) => setPhone(value || '')}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          rows={6}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 sm:py-4 rounded-lg font-semibold text-white text-base sm:text-lg transition-transform hover:scale-105"
          style={{
            background:
              'linear-gradient(135deg,#00E1FF 1.54%,#09CFFA 11.7%,#22A0ED 32.93%,#4A56D9 62.48%,#7800C2 93.87%)',
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
