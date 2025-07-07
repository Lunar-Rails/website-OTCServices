import React, { useState } from 'react';
import { Shield, Code, BarChart3, Users, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
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
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-[100px]">
            <span className="text-sm sm:text-[16px] uppercase block mb-4 sm:mb-6">OUR SERVICES</span>
            <p className="text-[36px] sm:text-[48px] lg:text-[64px] leading-[130%] text-black mb-12 sm:mb-20 max-w-5xl">
              At OTC Services, we're all about{' '}
              <span style={gradientStyle}>solving problems and creating opportunities.</span>{' '}
              Here's how we can help:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
              <div className="p-6 sm:p-8 border border-gray-200 rounded-lg hover:border-gray-300 transition-all">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg border-2 border-black flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4" style={gradientStyle}>Business Consulting</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Need a roadmap to success? We'll help you strategize, optimize, and grow your business with tailored solutions.
                </p>
              </div>

              <div className="p-6 sm:p-8 border border-gray-200 rounded-lg hover:border-gray-300 transition-all">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg border-2 border-black flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4" style={gradientStyle}>Cyber Security</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Stay safe and sound in the digital world. We'll ensure your business meets all regulatory requirements and stays protected from risks.
                </p>
              </div>

              <div className="p-6 sm:p-8 border border-gray-200 rounded-lg hover:border-gray-300 transition-all">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg border-2 border-black flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4" style={gradientStyle}>Software Development and Integration</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  From custom software to seamless integrations, we'll build the tools you need to succeed.
                </p>
              </div>

              <div className="p-6 sm:p-8 border border-gray-200 rounded-lg hover:border-gray-300 transition-all">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg border-2 border-black flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4" style={gradientStyle}>Business Analytics & Research</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Data is power. We'll help you unlock insights, make smarter decisions, and stay ahead of the competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-[36px] sm:text-[48px] lg:text-[72px] font-bold mb-12 sm:mb-16"
            style={gradientStyle}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 sm:space-y-6 mb-12">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl transition-all duration-300 hover:shadow-lg overflow-hidden"
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

          <div className="text-center">
            <Link 
              to="/faq"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-black hover:text-black transition-all duration-300 group"
              style={{
                background: 'white',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #00E1FF 1.54%, #09CFFA 11.7%, #22A0ED 32.93%, #4A56D9 62.48%, #7800C2 93.87%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box'
              }}
            >
              <span>View All FAQs</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;