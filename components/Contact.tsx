import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div>
            <h2 className="text-electric-orange font-heading font-bold uppercase tracking-wider text-sm mb-2">
              Liên Hệ
            </h2>
            <h3 className="text-4xl font-heading font-extrabold text-midnight mb-8">
              Cùng Hợp Tác
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Tên</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-electric-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label htmlFor="school" className="block text-sm font-bold text-gray-700 mb-2">Trường Học / Tổ Chức</label>
                  <input 
                    type="text" 
                    id="school" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-electric-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                    placeholder="THPT Lê Hồng Phong"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-electric-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                  placeholder="nguyenvana@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Tin Nhắn</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-electric-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-none"
                  placeholder="Chúng tôi có thể giúp bạn nâng tầm như thế nào?"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-midnight text-white font-heading font-bold rounded-lg hover:bg-midnight-light transition-colors shadow-lg"
              >
                Gửi Tin Nhắn
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="bg-midnight p-10 rounded-3xl text-white relative overflow-hidden flex flex-col justify-between">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">Thông Tin Liên Hệ</h3>
              <p className="text-gray-300 mb-10 leading-relaxed">
                Quan tâm đến việc trang bị đồng phục Skool Swag cho trường của bạn? Hãy liên hệ trực tiếp hoặc ghé thăm showroom của chúng tôi.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-electric-orange p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Trụ Sở Chính</h5>
                    <p className="text-gray-400">123 Đường Giáo Dục, P. 4<br/>Quận Sáng Tạo, TP.HCM</p>
                  </div>
                </div>

                <div className="flex items-start">
                   <div className="bg-electric-orange p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Gửi Email</h5>
                    <p className="text-gray-400">hello@skoolswag.com<br/>support@skoolswag.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                   <div className="bg-electric-orange p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Gọi Ngay</h5>
                    <p className="text-gray-400">+84 90 123 4567<br/>Thứ 2 - Thứ 6, 9h - 18h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 h-48 w-full bg-midnight-light rounded-xl overflow-hidden border border-white/10 relative">
                 <img 
                    src="https://picsum.photos/id/1025/600/300" 
                    className="w-full h-full object-cover opacity-50"
                    alt="Vị trí bản đồ"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-midnight/80 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider">Bản Đồ</span>
                 </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;