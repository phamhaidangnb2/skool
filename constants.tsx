import { NavLink, ServiceItem, TestimonialItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Về Chúng Tôi', href: '#about' },
  { name: 'Sản Phẩm', href: '#services' },
  { name: 'Tầm Nhìn', href: '#vision' },
  { name: 'Đánh Giá', href: '#testimonials' },
  { name: 'Liên Hệ', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Đồng Phục Streetwear',
    description: 'Kiểu dáng hiện đại, chất liệu thoáng khí và form dáng sành điệu tái định nghĩa vẻ ngoài chuyên nghiệp tại trường học.',
    iconName: 'shirt',
    image: 'https://i.postimg.cc/449ngBZG/Google-AI-Studio-2025-12-14T01-11-49-542Z.png'
  },
  {
    id: 2,
    title: 'Phụ Kiện Swag',
    description: 'Balo, mũ và phụ kiện hàng ngày được thiết kế để nổi bật trên hành lang và bền bỉ theo thời gian.',
    iconName: 'backpack',
    image: 'https://i.postimg.cc/YqB0qYqm/Google-AI-Studio-2025-12-14T01-12-39-325Z.png'
  },
  {
    id: 3,
    title: 'Thiết Kế Riêng',
    description: 'Giải pháp may đo cho các trường muốn có diện mạo mới mẻ. Chúng tôi hợp tác để tạo nên bản sắc độc đáo cho trường của bạn.',
    iconName: 'pencil-ruler',
    image: 'https://i.postimg.cc/rFGmdsDX/Google-AI-Studio-2025-12-14T01-13-09-830Z.png'
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    text: "Cuối cùng cũng có bộ đồng phục mà mình không ghét mặc. Vải thực sự thoải mái và form dáng đẹp hơn nhiều so với mấy cái áo sơ mi hình hộp cũ kỹ.",
    author: "Minh Quân",
    role: "Học sinh Lớp 11",
    image: 'https://i.postimg.cc/SxyKc49G/Google-AI-Studio-2025-12-14T01-14-32-975Z.png'
  },
  {
    id: 2,
    text: "Skool Swag đã thay đổi hình ảnh của trường chúng tôi. Học sinh cảm thấy tự tin hơn, và độ bền của chất liệu thì không gì sánh bằng.",
    author: "Cô Mai Lan",
    role: "Hiệu trưởng, THPT Westview",
    image: 'https://i.postimg.cc/MGHKrYt4/Google-AI-Studio-2025-12-14T01-14-57-910Z.png'
  },
  {
    id: 3,
    text: "Mấy cái balo nhìn chất lừ. Mình có thể bỏ vừa laptop và đồ tập gym mà không nhìn cồng kềnh. Chắc chắn là nâng tầm phong cách hàng ngày.",
    author: "Tuấn Kiệt",
    role: "Học sinh Lớp 10",
    image: 'https://i.postimg.cc/vmTHSv3m/Google-AI-Studio-2025-12-14T01-15-20-429Z.png'
  }
];