import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-electric-orange/5 rounded-bl-full -z-0"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-electric-orange/20 rounded-full -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative mb-12 lg:mb-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-b-8 border-r-8 border-midnight transform -rotate-2 hover:rotate-0 transition-transform duration-500">
               <img
                className="w-full h-full object-cover min-h-[400px]"
                src="https://picsum.photos/id/338/600/800"
                alt="Học sinh đi cùng nhau"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                 <p className="font-heading font-bold text-xl">Thành lập 2023</p>
                 <p className="text-sm opacity-90">Tái Định Nghĩa Văn Hóa Học Đường</p>
              </div>
            </div>
            
            {/* Orange Accent box */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-electric-orange rounded-lg -z-10 hidden md:block"></div>
          </div>

          {/* Text Side */}
          <div>
            <h2 className="text-electric-orange font-heading font-bold uppercase tracking-wider text-sm mb-2">
              Câu Chuyện Của Chúng Tôi
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-midnight mb-6 leading-tight">
              Chúng Tôi Là Ai
            </h3>
            <div className="w-20 h-1.5 bg-electric-orange mb-8"></div>
            
            <p className="text-lg text-gray-600 font-sans leading-relaxed mb-6">
              Skool Swag không chỉ là nhà cung cấp đồng phục; chúng tôi là thương hiệu phong cách sống cho thế hệ tương lai. Chúng tôi nhận ra rằng học sinh thể hiện tốt nhất khi cảm thấy tự tin trong trang phục mình mặc.
            </p>
            <p className="text-lg text-gray-600 font-sans leading-relaxed mb-8">
              Chúng tôi kết hợp kỷ luật của đồng phục học đường với sự sáng tạo của streetwear, tạo ra những sản phẩm mà học sinh thực sự <span className="font-bold text-midnight">muốn</span> mặc. Từ đường may chắc chắn đến kiểu dáng hiện đại, mọi chi tiết đều được thiết kế hướng tới hành trình của học sinh.
            </p>

            <ul className="space-y-4 font-heading font-semibold text-midnight">
               <li className="flex items-center">
                  <div className="h-2 w-2 bg-electric-orange rounded-full mr-3"></div>
                  Chất Liệu Siêu Bền
               </li>
               <li className="flex items-center">
                  <div className="h-2 w-2 bg-electric-orange rounded-full mr-3"></div>
                  Thiết Kế Dẫn Đầu Xu Hướng
               </li>
               <li className="flex items-center">
                  <div className="h-2 w-2 bg-electric-orange rounded-full mr-3"></div>
                  Đa Dạng Kích Cỡ
               </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;