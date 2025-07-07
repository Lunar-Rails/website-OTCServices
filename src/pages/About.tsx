import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-[100px] sm:py-[200px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm sm:text-[16px] uppercase block mb-4 sm:mb-6">OUR MISSION</span>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[72px] leading-[110%] text-black mb-6 sm:mb-8 max-w-4xl">
            To deliver{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00E1FF 1.54%, #09CFFA 11.7%, #22A0ED 32.93%, #4A56D9 62.48%, #7800C2 93.87%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              future-proof digital solutions
            </span>{' '}
            that drive growth, innovation, and security for businesses navigating the digital age.
          </h1>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-[100px] sm:py-[200px] bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm sm:text-[16px] uppercase block mb-4 sm:mb-6">OUR VISION</span>
          <h2 className="text-[36px] sm:text-[48px] lg:text-[72px] leading-[110%] text-black mb-6 sm:mb-8 max-w-4xl">
            To be the{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00E1FF 1.54%, #09CFFA 11.7%, #22A0ED 32.93%, #4A56D9 62.48%, #7800C2 93.87%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              trusted partner
            </span>{' '}
            for digital transformation, empowering businesses to thrive in a rapidly evolving world.
          </h2>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-[100px] sm:py-[200px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm sm:text-[16px] uppercase block mb-4 sm:mb-6">OUR TEAM</span>
          <h2 
            className="text-[36px] sm:text-[48px] lg:text-[72px] font-bold mb-6 sm:mb-8 leading-[110%]"
            style={{
              background: 'linear-gradient(135deg, #00E1FF 1.54%, #09CFFA 11.7%, #22A0ED 32.93%, #4A56D9 62.48%, #7800C2 93.87%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Your digital dream team
          </h2>
          <div className="text-base sm:text-lg lg:text-[24px] leading-[150%] text-gray-600 space-y-4 sm:space-y-6 mb-12 sm:mb-16 max-w-4xl">
            <p>
              We're OTC Services, a UAE-based IT consultancy and software house dedicated to helping businesses thrive in a digital-first world. Since 2020, we've delivered innovative, scalable, and secure solutions that drive growth and success.
            </p>
            <p>
              Our diverse team brings expertise, creativity, and fresh perspectives to every project—while having fun along the way, from team lunches to go-kart racing.
            </p>
            <p>
              From business consulting and security to analytics and software development, we make your digital journey seamless and future-proof. Partnering with tech firms, PSPs, and AML specialists, we're shaping a smarter, safer future—together.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Mark Singh",
                position: "CEO"
              },
              {
                name: "Francesco Vivoli",
                position: "Chief Product & Technology Officer"
              },
              {
                name: "Elton Lu",
                position: "Head of Operations"
              },
              {
                name: "Faith Mavunga",
                position: "Financial Controller"
              },
              {
                name: "Jyoti Das",
                position: "Compliance Officer"
              }
            ].map((member, index) => (
              <div key={index} className="p-6 sm:p-8 bg-white rounded-lg hover:shadow-lg transition-all text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 sm:mb-6 bg-gray-100 flex items-center justify-center">
                  <User className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-black">{member.name}</h3>
                <p className="text-base sm:text-lg text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;