
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Hero: React.FC = () => {
  const { heroImage } = useContent();

  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `url("${heroImage}")`, 
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-midnight/60 mix-blend-multiply"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-midnight via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <span className="inline-block py-1 px-3 rounded-full bg-electric-orange/20 text-electric-orange border border-electric-orange/50 text-sm font-bold font-heading mb-6 tracking-wide uppercase animate-fade-in-up backdrop-blur-sm">
          Tiêu Chuẩn Mới
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-tight tracking-tight mb-6 drop-shadow-lg">
          ĐỜI HỌC SINH, <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">NÂNG TẦM.</span>
        </h1>
        
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200 font-sans leading-relaxed mb-10 drop-shadow-md">
          Đồng phục và phụ kiện cao cấp lấy cảm hứng từ streetwear, giúp cá tính của bạn tỏa sáng mà vẫn giữ nét chuyên nghiệp.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#services" 
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-electric-orange rounded-full font-heading hover:bg-electric-orange-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-orange hover:shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1"
          >
            Khám Phá Phong Cách
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
           <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 border-2 border-white/30 hover:border-white/80 hover:bg-white/10 rounded-full font-heading backdrop-blur-sm"
          >
            Đối Tác Trường Học
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
