
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const { services } = useContent();

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-electric-orange font-heading font-bold uppercase tracking-wider text-sm mb-2">
            Chúng Tôi Cung Cấp Gì
          </h2>
          <h3 className="text-4xl font-heading font-extrabold text-midnight mb-4">
            Trang Bị Để Vươn Xa
          </h3>
          <p className="text-gray-600 font-sans text-lg">
            Khám phá các dòng sản phẩm cao cấp được thiết kế cho học sinh hiện đại.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service: ServiceItem) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-2xl border-2 border-transparent hover:border-midnight shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col overflow-hidden"
            >
              {/* Product Image */}
              <div className="h-64 overflow-hidden relative">
                <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/10 transition-colors duration-300"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-heading font-bold text-midnight mb-3">
                    {service.title}
                </h4>
                
                <p className="text-gray-600 font-sans leading-relaxed flex-grow mb-6">
                    {service.description}
                </p>
                
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <span className="font-heading font-bold text-sm text-midnight group-hover:text-electric-orange transition-colors">
                    Chi Tiết Sản Phẩm
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-electric-orange transition-colors transform group-hover:rotate-45" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
