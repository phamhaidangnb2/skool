import React, { useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { TestimonialItem } from '../types';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-electric-orange font-heading font-bold uppercase tracking-wider text-sm mb-2">
                Tình Yêu Từ Cộng Đồng
            </h2>
            <h3 className="text-4xl font-heading font-extrabold text-midnight">
                Lời Đồn Trong Trường
            </h3>
          </div>
          
          <div className="hidden sm:flex space-x-2">
            <button 
                onClick={() => scroll('left')}
                className="p-3 rounded-full border-2 border-midnight text-midnight hover:bg-midnight hover:text-white transition-all"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
                onClick={() => scroll('right')}
                className="p-3 rounded-full border-2 border-midnight text-midnight hover:bg-midnight hover:text-white transition-all"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pb-10 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((item: TestimonialItem) => (
            <div 
              key={item.id} 
              className="flex-shrink-0 w-full md:w-[450px] snap-center bg-white p-8 rounded-2xl shadow-sm border-t-4 border-electric-orange flex flex-col"
            >
              <Quote className="w-10 h-10 text-electric-orange mb-6 opacity-50" />
              
              <p className="text-gray-700 font-sans text-lg leading-relaxed mb-8 italic flex-grow">
                "{item.text}"
              </p>
              
              <div className="flex items-center mt-auto border-t border-gray-100 pt-6">
                 <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden mr-4 border-2 border-white shadow-sm">
                    {item.image ? (
                        <img src={item.image} alt={item.author} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-midnight bg-gray-300">
                            {item.author.charAt(0)}
                        </div>
                    )}
                 </div>
                 <div>
                    <h4 className="font-heading font-bold text-midnight text-base">
                        {item.author}
                    </h4>
                    <p className="text-sm text-gray-500 uppercase tracking-wide font-bold text-xs mt-0.5">
                        {item.role}
                    </p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;