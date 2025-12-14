import React from 'react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-32 bg-midnight relative overflow-hidden flex items-center justify-center text-center">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 bg-electric-orange rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white border border-white/20 text-xs font-bold font-heading tracking-widest uppercase">
                Tầm Nhìn & Sứ Mệnh
            </span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-10 leading-tight">
          "Trao quyền cho học sinh thể hiện <span className="text-electric-orange">cá tính</span> và <span className="text-electric-orange">sự tự tin</span> thông qua thời trang sáng tạo, chất lượng cao."
        </h2>
        
        <div className="flex flex-col items-center">
           <p className="text-gray-300 font-sans text-xl max-w-2xl mb-8">
             Chúng tôi tin rằng môi trường giáo dục không nên kìm hãm sự sáng tạo. Đó phải là sàn diễn nơi những nhà lãnh đạo tương lai cất cánh.
           </p>
           
           <div className="h-24 w-1 bg-gradient-to-b from-electric-orange to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Vision;