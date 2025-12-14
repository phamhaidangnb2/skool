
import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchSheetData } from '../utils/googleSheet';
import { SERVICES, TESTIMONIALS } from '../constants';
import { ServiceItem, TestimonialItem } from '../types';

// Link Sheet của bạn
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRzDAp8pwYTFQReZCEKvxISw3FvjGM-OYixuuaB2ws_ojcEY7G9-lK1JLKj0zBsObzOW2__GNkfZEVy/pubhtml?gid=0&single=true';

interface ContentContextType {
  heroImage: string;
  services: ServiceItem[];
  testimonials: TestimonialItem[];
  loading: boolean;
}

const defaultHeroImage = 'https://i.postimg.cc/4drdchvR/Google-AI-Studio-2025-12-14T01-11-18-366Z.png';

const ContentContext = createContext<ContentContextType>({
  heroImage: defaultHeroImage,
  services: SERVICES,
  testimonials: TESTIMONIALS,
  loading: true,
});

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [heroImage, setHeroImage] = useState(defaultHeroImage);
  const [services, setServices] = useState<ServiceItem[]>(SERVICES);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(TESTIMONIALS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchSheetData(SHEET_URL);
      
      if (data) {
        // Cập nhật Background Hero
        if (data['background']) setHeroImage(data['background']);

        // Cập nhật Sản phẩm
        const newServices = [...SERVICES];
        if (data['sanpham1']) newServices[0] = { ...newServices[0], image: data['sanpham1'] };
        if (data['sanpham2']) newServices[1] = { ...newServices[1], image: data['sanpham2'] };
        if (data['sanpham3']) newServices[2] = { ...newServices[2], image: data['sanpham3'] };
        setServices(newServices);

        // Cập nhật Khách hàng
        const newTestimonials = [...TESTIMONIALS];
        if (data['khachhang1']) newTestimonials[0] = { ...newTestimonials[0], image: data['khachhang1'] };
        if (data['khachhang2']) newTestimonials[1] = { ...newTestimonials[1], image: data['khachhang2'] };
        if (data['khachhang3']) newTestimonials[2] = { ...newTestimonials[2], image: data['khachhang3'] };
        setTestimonials(newTestimonials);
      }
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <ContentContext.Provider value={{ heroImage, services, testimonials, loading }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
