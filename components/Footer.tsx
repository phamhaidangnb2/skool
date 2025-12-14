import React from 'react';
import { ShoppingBag, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
                <div className="bg-electric-orange p-1.5 rounded-lg">
                    <ShoppingBag className="h-5 w-5 text-white" />
                </div>
                <span className="font-heading font-extrabold text-xl tracking-tight">
                  SKOOL <span className="text-electric-orange">SWAG</span>
                </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Cách mạng hóa cách học sinh ăn mặc và cảm nhận. Chất lượng, phong cách và sự tự tin trong từng đường may.
            </p>
            <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-electric-orange transition-colors"><Instagram className="h-5 w-5"/></a>
                <a href="#" className="text-gray-400 hover:text-electric-orange transition-colors"><Twitter className="h-5 w-5"/></a>
                <a href="#" className="text-gray-400 hover:text-electric-orange transition-colors"><Facebook className="h-5 w-5"/></a>
                <a href="#" className="text-gray-400 hover:text-electric-orange transition-colors"><Linkedin className="h-5 w-5"/></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Liên Kết Nhanh</h4>
            <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-electric-orange transition-colors">Trang Chủ</a></li>
                <li><a href="#about" className="hover:text-electric-orange transition-colors">Về Chúng Tôi</a></li>
                <li><a href="#services" className="hover:text-electric-orange transition-colors">Sản Phẩm</a></li>
                <li><a href="#vision" className="hover:text-electric-orange transition-colors">Tầm Nhìn</a></li>
                <li><a href="#contact" className="hover:text-electric-orange transition-colors">Liên Hệ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Hỗ Trợ</h4>
            <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-electric-orange transition-colors">Hướng Dẫn Chọn Size</a></li>
                <li><a href="#" className="hover:text-electric-orange transition-colors">Vận Chuyển & Đổi Trả</a></li>
                <li><a href="#" className="hover:text-electric-orange transition-colors">Hợp Tác Trường Học</a></li>
                <li><a href="#" className="hover:text-electric-orange transition-colors">Câu Hỏi Thường Gặp</a></li>
                <li><a href="#" className="hover:text-electric-orange transition-colors">Chính Sách Bảo Mật</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Cập Nhật Tin Tức</h4>
            <p className="text-gray-400 text-sm mb-4">Nhận thông tin về các bộ sưu tập mới nhất và xu hướng học đường ngay trong hộp thư của bạn.</p>
            <div className="flex flex-col gap-3">
                <input 
                    type="email" 
                    placeholder="Nhập email của bạn" 
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-electric-orange transition-colors"
                />
                <button className="w-full bg-electric-orange hover:bg-electric-orange-hover text-white font-bold py-2 rounded-md text-sm transition-colors">
                    Đăng Ký
                </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Skool Swag. Đã đăng ký bản quyền.</p>
            <p className="mt-2 md:mt-0">Thiết kế cho thế hệ tương lai.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;