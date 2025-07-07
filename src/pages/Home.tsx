import React from 'react';
import { ArrowRight, Shield, Code, BarChart3, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo1, Logo2, Logo3 } from '../components/logos/PartnerLogos';
import ContactForm from '../components/ContactForm';
import FloatingLogo from '../components/FloatingLogo';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-[100px] sm:pt-[200px] max-w-3xl">
            <h1 className="text-grey-600">
              <span className="text-[48px] sm:text-[72px] lg:text-[96px] leading-[1.2] font-bold block mb-4">Future-proof</span>
              <span 
                className="text-[48px] sm:text-[72px] lg:text-[96px] leading-[1.2] font-bold block mb-8"
                style={{
                  background: 'linear-gradient(135deg, #00E1FF 1.54%, #09CFFA 11.7%, #22A0ED 32.93%, #4A56D9 62.48%, #7800C2 93.87%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                digital solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-[24px] text-grey-600 mb-8 sm:mb-12 max-w-2xl leading-[150%]">
              Delivering innovative, scalable, and secure digital solutions that evolve with your business. From software development to business analytics, we're here to future-proof your success.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #00E1FF 1.54%, #09CFFA 11.7%, #22A0ED 32.93%, #4A56D9 62.48%, #7800C2 93.87%)',
                backgroundSize: '200% 100%',
                backgroundPosition: '100% 0%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundPosition = '0% 0%';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundPosition = '100% 0%';
              }}
            >
              <span>Get Started</span>
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-gray-50">
        <FloatingLogo />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12 sm:mb-20">
            <span className="text-sm sm:text-[16px] text-black uppercase block mb-4">WHAT WE DO</span>
            <h2 
              className="text-[36px] sm:text-[48px] lg:text-[72px] font-bold mb-6 leading-[110%]"
              style={{
                background: 'linear-gradient(135deg, #00E1FF 1.54%, #09CFFA 11.7%, #22A0ED 32.93%, #4A56D9 62.48%, #7800C2 93.87%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Your digital transformation partners
            </h2>
            <p className="text-lg sm:text-xl lg:text-[24px] text-gray-600 leading-[130%]">
              At OTC Services, we're all about creating future-proof digital solutions that help your business thrive in a fast-paced, ever-changing world. Here's how we make it happen:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 sm:w-12 sm:h-12" />,
                title: "Business Consulting",
                description: "We help you navigate the digital landscape with tailored strategies that drive growth, efficiency, and innovation."
              },
              {
                icon: <Shield className="w-8 h-8 sm:w-12 sm:h-12" />,
                title: "Cyber Security",
                description: "Safeguard your business from evolving threats with tailored security solutions. From risk assessments to advanced protection measures, we ensure your data, systems, and operations stay secure against cyberattacks."
              },
              {
                icon: <Code className="w-8 h-8 sm:w-12 sm:h-12" />,
                title: "Software Development and Integration",
                description: "We design, build, and integrate custom software solutions that streamline operations and enhance user experiences."
              },
              {
                icon: <BarChart3 className="w-8 h-8 sm:w-12 sm:h-12" />,
                title: "Business Analytics & Research",
                description: "Unlock the power of data with insights that help you make smarter decisions and stay ahead of the competition."
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="p-6 sm:p-8 bg-white rounded-xl transition-all duration-300 group hover:shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)]"
                style={{
                  border: '1px solid #E5E7EB'
                }}
              >
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, #00E1FF 1.54%, #09CFFA 11.7%, #22A0ED 32.93%, #4A56D9 62.48%, #7800C2 93.87%)'
                  }}
                >
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12 sm:mb-16">
            <span className="text-sm sm:text-[16px] text-gray-600 uppercase block mb-4 sm:mb-6">WHO WE WORK WITH</span>
            <h2 
              className="text-[36px] sm:text-[48px] lg:text-[72px] font-bold mb-6 sm:mb-8 leading-[110%]"
              style={{
                background: 'linear-gradient(135deg, #00E1FF 1.54%, #09CFFA 11.7%, #22A0ED 32.93%, #4A56D9 62.48%, #7800C2 93.87%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Collaborating with innovators and visionaries
            </h2>
            <p className="text-lg sm:text-xl lg:text-[24px] text-gray-600 leading-[130%] mb-12 sm:mb-20">
              We partner with businesses that are as forward-thinking as we are. Here's who we love working with:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
            <div className="p-6 sm:p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-black">Tech Companies</h3>
              <p className="text-base sm:text-lg text-gray-600">
                From startups to established players, we help tech businesses innovate and scale with confidence.
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-black">Payment Service Providers (PSPs)</h3>
              <p className="text-base sm:text-lg text-gray-600">
                We ensure your payment systems are secure, compliant, and ready to handle the future of digital transactions.
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-black">Business Intelligence Firms</h3>
              <p className="text-base sm:text-lg text-gray-600">
                We turn data into actionable insights, helping you make smarter, faster decisions.
              </p>
            </div>
          </div>
          <p className="text-lg sm:text-xl lg:text-[24px] text-gray-600 leading-[130%] max-w-4xl">
            No matter the size or industry, if you're looking to future-proof your business, we're here to help. Let's build something amazing together!
          </p>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12 sm:mb-16">
            <span className="text-sm sm:text-[16px] uppercase block mb-4">OUR PARTNERS</span>
            <h2 
              className="text-[36px] sm:text-[48px] lg:text-[72px] font-bold leading-[110%] max-w-[1000px]"
              style={{
                background: 'linear-gradient(135deg, #00E1FF 1.54%, #09CFFA 11.7%, #22A0ED 32.93%, #4A56D9 62.48%, #7800C2 93.87%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Working with top industry players, we deliver comprehensive solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            <div className="w-[160px] sm:w-[200px] h-auto">
              <Logo1 />
            </div>
            <div className="w-[160px] sm:w-[200px] h-auto">
              <Logo2 />
            </div>
            <div className="w-[160px] sm:w-[200px] h-auto">
              <Logo3 />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-20 bg-white">
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;