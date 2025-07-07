import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const gradientStyle = {
    background: 'linear-gradient(135deg, #00E1FF 1.54%, #09CFFA 11.7%, #22A0ED 32.93%, #4A56D9 62.48%, #7800C2 93.87%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What does OTC Services do?",
      answer: "We're a digital-first IT consultancy and software house specializing in business consulting, cyber security, business analytics, and software development. Our goal is to help businesses like yours future-proof their operations with innovative, scalable, and secure solutions."
    },
    {
      question: "Who do you work with?",
      answer: "We work with a wide range of clients, including tech companies, payment service providers (PSPs), business intelligence firms, and AML & risk companies. Whether you're a small startup or a large enterprise, we've got the expertise to support your growth."
    },
    {
      question: "What makes OTC Services different?",
      answer: "We're a young, diverse, and modern team that combines technical expertise with a client-focused approach. We don't just deliver solutions – we partner with you to create long-term value and ensure your business is ready for the future."
    },
    {
      question: "What industries do you specialize in?",
      answer: "Our expertise spans technology, finance, payments, business intelligence, and risk management. If you're in a tech-driven industry, chances are we can help!"
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We love working with small businesses and startups to help them scale and succeed. Our solutions are designed to be flexible and scalable, so they grow with you."
    },
    {
      question: "Can you help with custom software development?",
      answer: "Yes! We design, develop, and integrate custom software solutions tailored to your unique business needs. Whether it's a new app, system integration, or a complete digital transformation, we've got you covered."
    },
    {
      question: "How do I get started with OTC Services?",
      answer: "It's easy! Just reach out to us via our contact page, and we'll schedule a consultation to discuss your needs and how we can help. Let's build something amazing together!"
    },
    {
      question: "Where are you located?",
      answer: "We're based in the UAE, but our team works with clients locally and internationally. No matter where you are, we're just a message away."
    },
    {
      question: "How do you ensure your solutions are future-proof?",
      answer: "We stay ahead of the curve by leveraging the latest technologies, trends, and best practices. Our solutions are designed to be scalable, adaptable, and ready to evolve with your business."
    }
  ];

  return (
    <div className="pt-16">
      {/* FAQ Section */}
      <section className="py-[100px] sm:py-[200px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm sm:text-[16px] uppercase block mb-4 sm:mb-6">FAQ</span>
          <h1 
            className="text-[36px] sm:text-[48px] lg:text-[72px] font-bold mb-12 sm:mb-16 leading-[110%]"
            style={gradientStyle}
          >
            Frequently Asked Questions
          </h1>
          <div className="space-y-4 sm:space-y-6 mb-20 sm:mb-32">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left"
                >
                  <h3 className="text-lg sm:text-2xl font-bold text-black pr-8">{item.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 sm:px-8 pb-6 sm:pb-8 text-base sm:text-lg text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default FAQ;